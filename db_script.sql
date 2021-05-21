create database commenting;

use commenting;

create table comments(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,name VARCHAR(60) NOT NULL, email VARCHAR(120) NOT NULL,website VARCHAR(120),message TEXT);

insert into comments (name, email, website,message) values('adan','adan@adan.com','adan.com','This is a comment.');
insert into comments (name, email, website,message) values('alguien','alguien@alguien.com','alguien.com','This is a comment.');
insert into comments (name, email) values('nocomment','nocomment@gmail.com.com');