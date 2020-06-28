CREATE TYPE status AS ENUM ('todo', 'doing', 'done');

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  status status default 'todo'
);
