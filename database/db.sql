CREATE DATABASE task;

CREATE TABLE tasks (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO tasks VALUES 
    (1, 'Tasks number one', 'My first task'),
    (2, 'Tasks number two', 'My second task'),
    (3, 'Tasks number three', 'My third task');