-- create database library;

use library;

-- create table books(
-- id int auto_increment,
-- title varchar(128) not null,
-- author varchar(128) not null,
-- primary key (id)
-- );

-- insert into books(title, author) values("Тараканище","Чуковский Корней");
-- insert into books(title, author) values("Муха-цокотуха","Чуковский Корней");
-- insert into books(title, author) values("Ружья, микробы и сталь","Джарельт Даймонд");

-- select * from books;
-- select title from books;
-- select title from books where author = 'Чуковский Корней';
-- select distinct title from books where author = 'Чуковский Корней';
-- select distinct title from books where author like '%ельт%';
-- select * from books order by title desc;
-- select title, author from books where author <> 'Чуковский Корней';
-- select * from books where id > 3 and id < 7;
-- select * from books where id between 3 and 6;
-- select * from books where id not between 3 and 6;
-- select * from books where title = "Муха-цокотуха" or title = "Ружья, микробы и сталь";
-- select * from books where title in ("Муха-цокотуха", "Ружья, микробы и сталь");
select * from books where title not in ("Муха-цокотуха", "Ружья, микробы и сталь");