const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const pgp = require('pg-promise')();
const db = pgp({
  database: 'wiki',
  host: 'localhost',
  port: 5432
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/pages', (req, resp, next) => {
  db.any('select * from page')
    .then(pages => resp.json(pages))
    .catch(next);
});

app.get('/api/page/:title', (req, resp, next) => {
  let title = req.params.title;
  db.oneOrNone('select * from page where title = $1', title)
    .then(page => {
      if (page === null) {
        resp.status(404); // 404 not found
        resp.json({
          message: 'Page not found'
        });
      } else {
        resp.json(page);
      }
    })
    .catch(next);
});

app.post('/api/signup', (req,res,next) => {
  let username = req.body.username;
  let password = req.body.password;

  bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      return db.one('insert into authors values(default, $1, $2, now(), now()) returning id, username, time_created', [username, hash])

    })
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.post('/api/login', (req,res,next) => {
  let username = req.body.username;
  let password = req.body.password;
  let auth_id;
  db.one('select * from authors where username=$1', [username])
    .then((data) => {
      auth_id = data.id;
      return bcrypt.compare(password,data.password)
    })
    .then((result) => {
      if (result) {
        let token = uuid.v4();
        return db.one('insert into login_sessions values(default,$1,$2) returning *', [auth_id,token])
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.use(function authenticate(req,res,next) {
  db.one('select * from login_sessions where token=$1', [req.body.token])
    .then((data) => {
      return db.one('select * from authors where id=$1', [data.id])
    })
    .then((data) => {
      req.author = data;
      next();
    })
    .catch((err) => {
      res.send('Unauthenticated user, please log in.');
    });
});

app.put('/api/page/:title', (req, resp, next) => {
  let title = req.params.title;
  let content = req.body.content;
  // this statement below either inserts or updates
  // the page - it is called "upsert"
  // See http://stackoverflow.com/questions/1109061/insert-on-duplicate-update-in-postgresql
  db.one(`
    insert into page values ($1, $2, now(), now())
    on conflict (title) do update
      set content = $2,
          time_modified = now()
    returning *
    `, [title, content])
    .then(page => resp.json({page,author:req.author}))
    .catch(next);
});

app.use((err, req, resp, next) => {
  resp.status(500);
  resp.json({
    error: err.message,
    stack: err.stack.split('\n')
  });
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
