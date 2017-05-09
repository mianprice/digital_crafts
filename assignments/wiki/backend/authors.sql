CREATE TABLE authors(
	id SERIAL PRIMARY KEY,
	username VARCHAR UNIQUE,
	password VARCHAR,
	time_created TIMESTAMP DEFAULT now(),
	last_login TIMESTAMP
);
