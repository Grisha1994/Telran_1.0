use tmp;

-- Напишите запрос, который создаст таблицу employee с полями
-- id - целое число
-- name - строка с длинной 128
-- lastname - строка с длинной 128
-- salary - целое число

create table employee(
 id integer,
 name varchar(128),
 lastname varchar(128),
 salary integer
);

select * from employee;

delete from employee;

insert into employee values(1,  'Петя',   'Васильков', 5000);
insert into employee values(2,  'Маша',   'Ципкина', 4000);
insert into employee values(3,  'Витя',   'Грибоедов', 3000);
insert into employee values(4,  'Надя',   'Калугина', 6000);
insert into employee values(5,  'Даша',   'Рудько', 5500);

-- всем сотрудникам, у которых зп меньше 5000 установить зп 5000

update employee
set salary = 5000
where salary < 5000;

-- всем сотрудникам, у которых зп больше 5000 увеличить зп на 200 единиц

update employee
set salary = salary + 200
where salary > 5000;

-- написать запрос, который удаляет всех пользователей, у которых фамилия заканчивается не на "ов"

delete from employee where lastname like '%ов';
