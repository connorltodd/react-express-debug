CREATE DATABASE todos_database;

USE todos_database;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
    name VARCHAR(150),
    isCompleted bool
);