create table artist(
  id serial primary key,
  name varchar
);
create table album(
  id serial primary key,
  name varchar,
  year integer
);
create table song(
  id serial primary key,
  name varchar
);
create table track(
  id serial primary key,
  name varchar,
  duration integer,
  album_id integer references album(id),
  song_id integer references song(id)
);
create table songwriter(
  id serial primary key,
  name varchar
);
create table genre(
  id serial primary key,
  name varchar
);
create table track_genre(
  track_id integer references track(id),
  genre_id integer references genre(id)
);
create table song_songwriter(
  song_id integer references song(id),
  songwriter_id integer references songwriter(id)
);
create table artist_album(
  artist_id integer references artist(id),
  album_id integer references album(id),
  is_lead boolean
);
