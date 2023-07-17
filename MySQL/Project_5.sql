use library;

select * from books;

alter table books
add inv_number integer default 0;

alter table books
modify inv_number integer default 1;

insert into books(title, author) values("Три мушкетера, 20 лет спустя", "Александер Дюма");

update books
set inv_number = null;

alter table books
modify inv_number varchar(128) default "000/000";

update books
set inv_number = 1;

show columns from books;

alter table books
change inv_number inventory_number varchar(255);

alter table books
drop column inventory_number;

delete from books where id = 13;

select * from books;

-- UPDATE books
-- set inv_number = "111/111"
-- where title = "Тараканище";

-- update books
-- set id = 13
-- where id = 17;

-- insert into books(title, author) values("Три поросёнка", "Народная")

alter table books
add is_deleted integer default 0;

update books
set is_deleted = 1
where author = "Чуковский Корней";

-- Создать новую таблицу readers с полями:
-- id (primary key + автоинкремент)
-- name (varchar(255)) обязательное поле
-- address(varchar(255))
-- и вставить в неё 3 читателей: Петя, живёт на улице Мира, д. 17
-- Маша, живёт на проспекте Луначарского, д. 7
-- Витя, живёт на улице Распутина, д. 13

create table readers(
id int auto_increment,
name varchar(255) not null,
address varchar(255) not null,
primary key (id)
);

insert into readers(name, address) values("Петя,","живёт на улице Мира, д. 17");
insert into readers(name, address) values("Маша,","живёт на проспекте Луначарского, д. 7");
insert into readers(name, address) values("Витя,","живёт на улице Распутина, д. 13");

select * from readers;

-- Добавить новую колонку date_of_birth
-- тип DATE, может быть пустым
-- поставить дни рождения ребят в следующем порядке:
-- Петя 2010-01-01
-- Маша 2011-02-02
-- Витя 2010-10-10

alter table readers
 add date_of_birth date;

update readers
set date_of_birth = "2010-01-01", name = "Петя"
where name = "Петя,";

update readers
set date_of_birth = "2011-02-02", name = "Маша"
where name = "Маша,";

update readers
set date_of_birth = "2010-10-10", name = "Витя"
where name = "Витя,";

select * from readers;

alter table readers
add created_at timestamp default current_timestamp;
alter table readers
add updated_at timestamp default current_timestamp on update current_timestamp;

-- переименовать колонку date_of_birth в birth_date и поставить значение по умолчанию 
-- равное текущей дате 
-- чтобы проверить, создайте новую строку с name = "Коля" и address = "ул. Лунтика, д. 99"

alter table readers
change date_of_birth  birth_date date;

insert into readers(name, address) values("Коля", "ул. Лунтика, д. 99");

alter table readers
modify birth_date date default(current_date);

select * from books;

-- -----------------------------HomeWork------------------------------------
-- в таблице books создать колонки created_at и updated_at (логика колонок идентична логике в readers)
-- ALTER TABLE books
-- ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- ALTER TABLE books
-- ADD updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- в таблице books переименовать колонку title в name
-- ALTER TABLE books
-- CHANGE title name varchar(255);

-- в таблице readers реализовать механизм soft delete
-- ALTER TABLE readers
-- ADD is_deleted int DEFAULT 0;

-- работаем в таблице hr: посчитать среднюю зарплату для каждого департамента
-- SELECT department_id, avg(salary) from employees GROUP BY department_id;

-- работаем в таблице hr: посчитать разницу между максимальной и минимальной зарплатой для каждого департамента 
-- SELECT department_id, max(salary) - min(salary) from employees GROUP BY department_id;

-- -------------------------------------------------
-- создать таблицу workers с полями id (автоинкремент), last_name, gender("M", "F"), birthdate
-- добавить в таблицу 2 сотрудников "Иванова, "F", 1990-03-20", "Петров, "M", 1991-07-15"

drop table workers;

create table workers(
 id int primary key auto_increment,
 last_name varchar(255),
 gender varchar(1) check(gender in("M", "F")),
 birthdate date
);

insert into workers(last_name, gender, birthdate) values(1, 'Иванова', 'F', "1990-03-20");
insert into workers(last_name, gender, birthdate) values(2, 'Петров', 'M', "1991-07-15");
insert into workers(last_name, gender, birthdate) values("Сидорова", "F", "1990-03-20");
insert into workers(last_name, gender, birthdate) values("Кузнецова", "F", "1990-03-20");
insert into workers(last_name, gender, birthdate) values("Кузнецов", "M", "1991-07-15");

select * from workers;

-- поменять тип у gender на char(1)
alter table workers
change gender gender char(1);
-- или
alter table workers
modify gender char(1);

show columns from workers;

-- показать 2 колонки. первая колонка - gender, вторая колонка - "Количество", где количество - 
-- это число сотрудников с этим полом

select
	gender,
	count(id) as "Количество"
from workers
group by gender;

-- добавить новую колонку first_name и у существующих записей поменять значения на:
-- Иванова - Мария
-- Петров - Пётр
-- Сидорова - Ксения
-- Кузнецова - Ольга
-- Кузнецов - Семён

alter table workers
 add first_name varchar(255);
 
update workers
set first_name = "Мария"
where last_name = "Иванова";

update workers
set first_name = "Пётр"
where last_name = "Петров";

update workers
set first_name = "Ксения"
where last_name = "Сидорова";

update workers
set first_name = "Ольга"
where last_name = "Кузнецова";

update workers
set first_name = "Семён"
where last_name = "Кузнецов";

-- поменять у Ольги Кузнецовой день рождения на 1990-04-05
update workers
set birthdate = "1990-04-05"
where first_name = "Ольга";


-- как добавить имя в таблице после фамилии 
ALTER TABLE workers
ADD first_name VARCHAR(255)
AFTER last_name;
-- или
ALTER TABLE workers
modify column last_name VARCHAR(255)
after first_name;

select * from workers;

select * from workers where date_format(birthdate, "%m %d") = date_format(current_date(), "%m %d");


-- ----------Занятие 19.04.23----------------- 

-- создать новую таблицу employees
-- поля: id, created_at, updated_at (по аналогии), is_deleted
-- name, address, birth_date
-- поле is_deleted может быть только 0 или 1

create table employees(
 id int primary key auto_increment,
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp,
 is_deleted int default 0 check(is_deleted in(1, 0)),
 name varchar(255) not null,
 address varchar(255) not null,
 birth_date date
);

insert into employees(name, address, birth_date) values("Иванов Иван", "ул. Мира, д. 17", "1989-09-22");

select * from employees;

select id, name, birth_date from readers
union 
select id, name, birth_date from employees;

select 
	id, 
    name, 
    birth_date, 
    address, 
    (case when true then "reader" end) as "status" 
from readers
union
select 
	id, 
    name, 
    birth_date,
    address, 
    (case when true then "employee" end) as "status"
from employees;


-- добавить в таблицу employees поле salary int > 0
-- поставить salary у Пети = 10000

alter table employees
add salary int check(salary > 0);

update employees
set salary = 10000
where id = 1;


select id, name, null as salary from readers
union all
select id, name, salary from employees;

select * from books;
select * from readers;
select * from employees;

alter table books
add reader_id int;

alter table books
add foreign key(reader_id) references readers(id);

update books
set reader_id = 2
where id = 1;

alter table books
add employees_id int;

alter table books
add foreign key(employees_id) references employees(id);

update books
set employees_id = 1
where id = 2;

-- в базе данных hr
-- создать таблицу citizens с полями id (auto increment) и name
-- создать таблицу real_estate с полями id (auto increment) и address

use hr;
select * from employees;

create table citizens(
 id int primary key auto_increment,
 name varchar(255) not null
);

create table real_estate(
 id int primary key auto_increment,
 address varchar(255) not null
);

select * from citizens;
select * from real_estate;

insert into citizens(name) values("Иван");
insert into citizens(name) values("Мария");
insert into citizens(name) values("Игнат");

insert into real_estate(address) values("ул. Мира, д. 17");
insert into real_estate(address) values("ул. Алабяна, д. 3");
insert into real_estate(address) values("Беверли-Хиллз 90\2010");


-- Дз
-- 1)у одного жителя может быть много домов. Реализовать механизм связи между домом и жителем.
-- проверка: написать запрос, который вернёт все дома гражданина с id = 1
-- 2)у одно жителя может быть много домов и у одного дома может быть несколько владельцев
-- реализовать механизм связи многие ко многим в рамках этой задачи


-- выбрать id, name, created_at из таблиц readers и employees

select id, name, created_at  from readers
union 
select id, name, created_at from employees;

select * from books;
select * from readers;
select * from employees;

select 
	books.id, books.title, books.author, readers.name as "читатель" , readers.address as "адрес читателя"
from books
inner join readers
on books.reader_id = readers.id;

-- вывести books.id, books.name, books.author, employees.name как "Имя сотрудника" и employees.salary как "Зарплата сотрудника"
-- для всех книг

select 
	books.id, books.title, books.author, 
    employees.name as "Имя сотрудника" , employees.salary as "Зарплата сотрудника"
from books
left join employees
on books.employees_id = employees.id;


-- update books
-- set employees_id = 1
-- where id = 1;

select
	books.id, books.title, books.author,
    employees.name as "Имя сотрудника", employees.salary as "Зарплата сотрудника",
    readers.name as "Читатель", readers.address as "Адрес читателя"
from books
inner join employees
on books.employees_id = employees.id
inner join readers
on books.reader_id = readers.id;

-- вывести имя и фамилию всех сотрудников и название департамента, где они работают

use hr;
select * from departments;
select * from employees;

select 
	employees.first_name, employees.last_name, 
    departments.department_name
from employees
left join departments
on employees.department_id = departments.department_id;

-- вывести имя и фамилию всех сотрудников и имя и фамилию их менеджера
select 
	employees.first_name, employees.last_name,
    managers.first_name, managers.last_name
from employees
inner join employees managers
on employees.manager_id = managers.employee_id;

-- вывести имя и фамилию тех сотрудников, которые зарабатывают больше, чем их менеджер
select 
	employees.first_name, employees.last_name, employees.salary
from employees
inner join employees managers
on employees.manager_id = managers.employee_id
where managers.salary < employees.salary;

select 
	employees.first_name, employees.last_name, employees.salary,
    managers.first_name, managers.last_name, managers.salary
from employees
inner join employees managers
on employees.manager_id = managers.employee_id
where managers.salary < employees.salary;

-- для всех сотрудников вывести имя, фамилию и город проживания

select * from locations;

select 
	employees.first_name, employees.last_name,
    locations.city,  locations.street_address
from employees
inner join departments
on employees.department_id = departments.department_id
inner join locations
on departments.location_id = locations.location_id;

-- вывести названия департаментов, где никто не работает

select departments.department_name
from departments
left join employees
on employees.department_id = departments.department_id
where employees.employee_id is null;

-- вывести названия департаментов, где менеджеры получают > 10000

select departments.department_name
from departments
left join employees
on employees.employee_id = departments.manager_id
where employees.salary > 10000 ;

-- для каждого сотрудника вывести имя, фамилию, название должности

select employees.first_name, employees.last_name, jobs.job_title
from employees
inner join jobs
on jobs.job_id = employees.job_id;

-- вывести все города из locations как имя города + страна

select locations.city, countries.country_name
from locations
inner join countries
on countries.country_id = locations.country_id;

-- для каждого сотрудника вывести его имя, зарплату, минимальную и максимальную зарплату
-- для его должности

select employees.first_name, employees.salary,
      jobs.job_title, jobs.min_salary, jobs.max_salary
from employees
inner join jobs
on jobs.job_id = employees.job_id;