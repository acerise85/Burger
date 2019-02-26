drop DATABASE if EXISTS burgers_db;

create DATABASE burgers_db;
use burgers_db;

create TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

