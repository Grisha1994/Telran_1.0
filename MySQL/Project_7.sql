create database hr;
use hr;

select * from employees;
select * from departments;

select
	employees.first_name,
    employees.last_name,
    departments.department_name
from employees
left join departments
on employees.department_id = departments.department_id;

select
	t1.first_name,
    t1.last_name,
    t2.department_name
from employees t1
left join departments t2
on t1.department_id = t2.department_id;

-- не правильный вариант
-- select
-- 	t1.first_name,
--     t1.last_name,
--     t2.department_name
-- from employees t1, departments t2
-- where t1.department_id = t2.department_id;

select * from departments;
select * from locations;

-- вывести название департаментов и города, в которых они находятся

select
	t1.department_name,
    t2.city
from departments t1
left join locations t2
on t1.location_id= t2.location_id;

-- сформировать запрос, который выводит тольео те названия
-- департаментов, которые находятся в Лондоне

select
	t1.department_name,
    t2.city
from departments t1
inner join locations t2
on t1.location_id = t2.location_id
and t2.city = 'London';


-- -------------------- 03.05.2023-------------------
select * from employees;
select * from departments;

select 
	employees.first_name, employees.last_name, 
    departments.department_name, employees.department_id
from employees
left join departments
on departments.department_id = employees.department_id

union

select 
	employees.first_name, employees.last_name, 
    departments.department_name, employees.department_id
from employees
right join departments
on departments.department_id = employees.department_id;

