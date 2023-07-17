use hr;

select * from employees;

select
sum(salary),
max(salary),
min(salary),
avg(salary)
from employees;

select
	department_id,
	avg(salary)
from employees
group by department_id;

-- найти максимальную зп для каждого значения job_id
select
	job_id,
	max(salary)
from employees
group by job_id;

use tmp;

create table orders(
 id integer,
 customer_id integer,
 product_id integer,
 amount integer
);

select * from orders;

-- написать запрос, который выводит id покупателя и общее кол-во заказаных товаров
select
	customer_id,
	sum(amount) as sum_amount
from orders
group by customer_id;

-- отсортировать записи по customer_id ( от меньшего к большему)
select
	customer_id,
	sum(amount) as sum_amount
from orders
group by customer_id
order by customer_id;

select
	customer_id,
	sum(amount) as sum_amount
from orders
group by customer_id
order by sum_amount, customer_id;

select
	count(*), -- кол-во всех зписей
    count(commission_pct), -- кол-во не null зписей
    count(distinct commission_pct) -- кол-во уникальных зписей
from employees;

-- salary_group 
-- от 0 до 4 - 1
-- от 4 до 9 - 2
-- от 9      - 3
select  
	employee_id,
	salary,
	case
		when salary < 4000 then 1
		when salary < 9000 then 2
		else 3
	end as salary_group
from employees;   


select  
	case
		when salary < 4000 then 1
		when salary < 9000 then 2
		else 3
	end as salary_group,
    count(*) as cnt
from employees
group by
	case
		when salary < 4000 then 1
		when salary < 9000 then 2
		else 3
	end;
    
 --  select * from employees;
 
-- 1) найти у каждого менеджера кол-во сотрудников
    
select
	manager_id,
    count(*) as cnt
from employees
where manager_id is not null 
group by manager_id;

-- все сотрудники жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований.
-- SELECT sum(salary * 0.1) from employees;
-- все сотрудники жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований для каждого департамента.
-- SELECT department_id, sum(salary * 0.1) from employees group by department_id;
-- все сотрудники, зарабатывающие больше 10 000, жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований.
-- SELECT sum(salary * 0.1) from employees WHERE salary > 10000;
-- SELECT sum(
-- 	case
-- 		when salary >= 10000 then salary * 0.1
--     end
-- ) from employees;
-- прилетел дракон и оштрафовал всех сотрудников на 10 000 из их зарплаты. Сотрудник не может получать отрицательное число денег, поэтому если зп сотрудника < 10000, то он штрафуется на величину своей зп. Посчитать сумму всех штрафов.
-- SELECT sum(
-- 	case
-- 		when salary > 10000 then 10000 else salary
--     end
-- ) from employees;
