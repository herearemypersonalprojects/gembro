CREATE TABLE IF NOT EXISTS user (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  email VARCHAR (50) UNIQUE ,
  password_hash VARCHAR (100),
  role ENUM('USER', 'ADMIN'),
  UNIQUE (email),
  KEY (id)
);


