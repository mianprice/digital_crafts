CREATE TABLE restaurants (
  id serial primary key,
  name varchar NOT NULL,
  distance numeric,
  stars int DEFAULT 3 CHECK (stars >= 0 and stars <= 5),
  category varchar,
  favorite_dish varchar,
  takeout boolean DEFAULT FALSE,
  last_visit date NOT NULL
);
