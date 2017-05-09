CREATE TABLE login_sessions(
	id SERIAL PRIMARY KEY,
	auth_id INTEGER,
	token VARCHAR,
	created TIMESTAMP DEFAULT now()
);
