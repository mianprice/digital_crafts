CREATE TABLE contacts (
  id serial primary key,
  name varchar,
  phone varchar,
  email varchar,
  type varchar,
  favorite boolean
);

INSERT INTO contacts VALUES(default,'Alice','555-555-5555','alice@fake.com','none',false);
INSERT INTO contacts VALUES(default,'Bob','555-555-5555','alice@fake.com','family',false);
INSERT INTO contacts VALUES(default,'Carol','555-555-5555','alice@fake.com','friend',true);
INSERT INTO contacts VALUES(default,'Dan','555-555-5555','alice@fake.com','coworker',false);
