USE myadmin;
CREATE TABLE IF NOT EXISTS test (
  ocena varchar(250) NOT NULL,
  predmet varchar(250) NOT NULL,
  PRIMARY KEY (ocena,predmet)
);