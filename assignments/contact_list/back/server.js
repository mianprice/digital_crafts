const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'contact_list'
});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/contacts', (req,res,next) => {
  db.any('select * from contacts')
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.post('/api/contacts', (req,res,next) => {
  db.one('insert into contacts values(default,$1,$2,$3,$4,false) returning *', [req.body.name,req.body.phone,req.body.email,req.body.type])
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.delete('/api/contacts/:id', (req,res,next) => {
  db.none('delete from contacts where id = $1', [req.params.id])
    .then(() => {
      res.json({success: true});
    })
    .catch(next);
});

app.put('/api/contacts', (req,res,next) => {
  db.one('update contacts set (name,phone,email,type) = ($1,$2,$3,$4) where id = $5 returning *', [req.body.name,req.body.phone,req.body.email,req.body.type,req.body.id])
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

app.put('/api/favorite/:id', (req,res,next) => {
  db.one('update contacts set favorite = not favorite where id = $1 returning *', [req.params.id])
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});


app.listen(3001,() => {console.log('listening on 3001')});
