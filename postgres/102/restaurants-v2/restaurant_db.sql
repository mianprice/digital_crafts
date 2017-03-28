CREATE TABLE restaurant (
  id serial primary key,
  name varchar,
  address varchar,
  category varchar
);

CREATE TABLE reviewer (
  id serial primary key,
  name varchar,
  email varchar,
  karma integer CHECK (karma >= 0 and karma <= 7)
);

CREATE TABLE review (
  id serial primary key,
  reviewer_id integer references reviewer(id),
  stars integer check (stars >= 0 and stars <= 5),
  title varchar,
  review varchar,
  restaurant_id integer references restaurant(id)
);
