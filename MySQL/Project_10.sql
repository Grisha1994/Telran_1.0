-- ------------------------------- 05.05.2023--------------------------------
use hr;
select * from hr.employees;
use tmp;
select * from employee;
select * from tasks;

-- сформировать запрос, который содержит имя 
-- сотрудника и все номера его задач

select
	t1.name, 
    t2.title
from employee t1
left join tasks t2
on t1.id = t2.employee_id;

-- сформировать запрос, который содержит имя 
-- сотрудника и все номера его несделаных задач;

select
	t1.name, 
    t2.title
from employee t1
left join tasks t2
on t1.id = t2.employee_id
and t2.done_flg = 0;


-- написать запрос, который выводит имя и фамилию сотрудников
-- у которых есть задачи, которые они еще не сделали

select distinct
	t1.name, 
    t1.lastname
from employee t1
inner join tasks t2
on t1.id = t2.employee_id
and t2.done_flg = 0 ;

-- вывести имя сотрудника и имя его менеджера
-- name, manager_name

select 
	t1.name, 
    t2.name as manager_name
from employee t1
left join employee t2
on t1.manager_id = t2.id;

-- вывести имя и фамилию сотрудников, у которых зарплата больше 
-- зарплаты менеджера

select 
	t1.name, 
    t1.lastname,
    t1.salary
from employee t1
left join employee t2
on t1.manager_id = t2.id
where t1.salary > t2.salary;


-- какой сотрудник работает на какой город
use hr;

select
	t1.first_name,
    t1.last_name,
-- первый способ    
--  case
-- 		when t3.city is null then 'неизвестно'
--         else t3.city
-- 	end as city
-- второй способ    
	coalesce(t3.city, 'неизвестно') as city
from employees t1
left join departments t2
on t1.department_id = t2.department_id
left join locations t3
on t2.location_id = t3.location_id;



-- Сформируйте выборку, которая содержит имя и фамилию менеджеров и 
-- все задачи их непосредственных подчиненных. В выборке должны быть 
-- поля name, lastname, workers_task (наименование задач подчиненных).

use tmp;
select * from employee;
select * from tasks;

select
	t1.name,
    t1.lastname,
    t3.title as workers_task
from employee t1
inner join employee t2
on t1.manager_id = t2.id
inner join tasks t3
on  t2.id = t3.employee_id;



-- ------------------------------------10.04.2023----------------------------------
use library;
select * from employees;

alter table employees
add last_name varchar (255);

alter table employees
add middle_name varchar (255);

update employees
set last_name = "Иванов"
where id = 1;

insert into employees(name, last_name, middle_name, address) values("Петя", "Сидоров", "Петрович", " ");

select concat(name, " ", last_name, " ",coalesce (middle_name, " ")) from employees;

create database uni;
use uni;

create table Students(
	id integer primary key auto_increment,
    name varchar(128) not null,
    age integer
);

create table Teachers(
	id integer primary key auto_increment,
    name varchar(128) not null,
    age integer
);

create table Competencies(
	id integer primary key auto_increment,
    title varchar(128) not null
);

create table Teachers2Competencies(
	id integer primary key auto_increment,
    teacher_id integer,
    competencies_id integer
);

create table Courses(
	id integer primary key auto_increment,
    teacher_id integer,
    title varchar(128) not null,
    headman_id integer
);

create table Students2Courses(
	id integer primary key auto_increment,
    student_id integer,
    course_id integer
);

use uni;

insert into students (name, age) values ('Анатолий', 29);
insert into students (name, age) values ('Олег', 25);
insert into students (name, age) values ('Семен', 27);
insert into students (name, age) values ('Олеся', 28);
insert into students (name, age) values ('Ольга', 31);
insert into students (name, age) values ('Иван', 22);

insert into teachers (name, age) values ('Петр', 39);
insert into teachers (name, age) values ('Максим', 35);
insert into teachers (name, age) values ('Антон', 37);
insert into teachers (name, age) values ('Всеволод', 38);
insert into teachers (name, age) values ('Егор', 41);
insert into teachers (name, age) values ('Светлана', 32);

insert into Competencies (title) values ('Математика');
insert into Competencies (title) values ('Информатика');
insert into Competencies (title) values ('Программирование');
insert into Competencies (title) values ('Графика');

insert into courses (teacher_id, title, headman_id) values (1, 'Алгебра логики', 2);
insert into courses (teacher_id, title, headman_id) values (2, 'Математическая статистика', 3);
insert into courses (teacher_id, title, headman_id) values (4, 'Высшая математика', 5);
insert into courses (teacher_id, title, headman_id) values (5, 'Javascript', 1);
insert into courses (teacher_id, title, headman_id) values (5, 'Базовый Python', 1);

insert into students2courses (student_id, course_id) values (1, 1);
insert into students2courses (student_id, course_id) values (2, 1);
insert into students2courses (student_id, course_id) values (3, 2);
insert into students2courses (student_id, course_id) values (3, 3);
insert into students2courses (student_id, course_id) values (4, 5);

insert into Teachers2Competencies (teacher_id, competencies_id) values (1, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (2, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (2, 3);
insert into Teachers2Competencies (teacher_id, competencies_id) values (3, 2);
insert into Teachers2Competencies (teacher_id, competencies_id) values (4, 1);
insert into Teachers2Competencies (teacher_id, competencies_id) values (5, 3);

select * from Competencies;
select * from teachers;
select * from students;
select * from students2courses;
select * from courses;
select * from Teachers2Competencies;


-- вывести имена студентов и курсы, которые они проходят

select students.name, courses.title 
from students
inner join students2courses
on students.id = students2courses.student_id
inner join courses
on students2courses.course_id = courses.id;

select
	t1.name, 
    t3.title
from students t1
inner join students2courses t2
on t1.id = t2.student_id
inner join courses t3
on t2.course_id = t3.id;

-- вывести имена всех преподавателей и названия их компетенций

select
    t1.name,
    t3.title
from  teachers t1
inner join Teachers2Competencies t2
on  t2.teacher_id = t1.id
inner join Competencies t3
on t2.competencies_id = t3.id;

-- вывести преподавателей, у которых нет компетенций

select
    t1.name,
    t3.title
from  teachers t1
left join Teachers2Competencies t2
on  t2.teacher_id = t1.id
left join Competencies t3
on t2.competencies_id = t3.id
where t3.title is null;

-- найти студентов, которые не проходят ни один курс

select
	t1.name, 
    t3.title
from students t1
left join students2courses t2
on t1.id = t2.student_id
left join courses t3
on t2.course_id = t3.id
where t3.title is null;

-- найти курсы, которые не посещает ни один студент

select 
	courses.title
from courses
left join students2courses
on courses.id = students2courses.course_id
where students2courses.id is null;

-- найти компетенции, которых нет ни у одного преподавателя

select 
	Competencies.title
from Competencies
left join Teachers2Competencies
on Competencies.id = Teachers2Competencies.competencies_id
where Teachers2Competencies.id is null;

select 
	t1.title
from Competencies t1
left join Teachers2Competencies t2
on t1.id = t2.competencies_id
where t2.id is null;

-- вывести название курса и имя старосты

select 
	t1.title,
    t2.name
from courses t1
left join students t2
on t1.headman_id = t2.id;

-- вывести имена студентов и количество курсов, на которых они являются старостами

select 
    t2.name,
    count(t1.id)
from courses t1
left join students t2
on t1.headman_id = t2.id
group by t2.name;

-- вывести название курса и число студентов на нём

select 
    t1.title,
    count(t2.id)
from courses t1
left join students2courses t2
on t1.id = t2.course_id
group by t1.title;

-- вывести имена студентов и число курсов, на которые они ходят

select 
    t1.name,
    count(t2.id)
from students t1
left join students2courses t2
on t1.id = t2.student_id
group by t1.name;

-- вывести имя студента, имя старосты и имя преподавателя для курсов, которые этот студент проходит


select 
	students.name as "Student name", 
    students_copy.name as "Headman name", 
    teachers.name as "Teacher name"
from students
inner join students2courses
on students.id = students2courses.student_id
inner join courses
on courses.id = students2courses.course_id
inner join teachers
on courses.teacher_id = teachers.id
inner join students students_copy
on students_copy.id = courses.headman_id;

select
	t1.name as "Student name", 
	t1_copy.name  as "Headman name",
	t4.name as "Teacher name"
  
from students t1
inner join students2courses t2
on t1.id = t2.student_id
inner join courses t3
on t3.id = t2.course_id
inner join teachers t4
on t3.teacher_id = t4.id
inner join students t1_copy
on t1_copy.id = t3.headman_id;