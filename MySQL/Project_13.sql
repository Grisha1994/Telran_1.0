use hr;

select * from hr.employees;

-- вывести имя и фамилию сотрудников, у кого зп больше средней

select 
	first_name, 
    last_name
from employees 
where salary > (
	select 
		avg(salary)
    from employees
);

-- сформировать выборку, которая содержит id департамента
-- и максимальную зп в нем

select 
	department_id, 
    max(salary) 
from employees
where department_id is not null
group by department_id
order by max(salary) desc; 

-- сформировать запрос, который выдает имя и фамилию сотрудников
-- с максимальной зп в своем департаменте

select 
	t1.first_name, 
    t1.last_name,
    t1.salary
from employees t1
inner join (select 
	department_id, max(salary) as max_salary
    from employees
	where department_id is not null
	group by department_id
	) t2
on t1.department_id = t2.department_id 
and t1.salary = t2.max_salary;

-- добавить к выборке название департамента

select 
	t3.department_name,
	t1.first_name, 
    t1.last_name,
    t1.salary
from employees t1
inner join (select 
	department_id, max(salary) as max_salary
    from employees
	where department_id is not null
	group by department_id
	)t2
on t1.department_id = t2.department_id 
and t1.salary = t2.max_salary
inner join departments t3
on t1.department_id = t3.department_id;

-- мы должны вывести только департаменты из Европы

select * from hr.regions;
select * from hr.countries;
select * from hr.locations;

select 
 t1.first_name ,
 t1.last_name,
 t3.department_name 
from employees t1 
inner join (
 SELECT 
  department_id,
  max(salary) as max_salary
 from employees 
 where department_id is not null
 group by department_id
) t2 
on t1.department_id = t2.department_id
and t1.salary = t2.max_salary
inner join departments t3 
on t1.department_id = t3.department_id
inner join locations t4 
on t3.location_id = t4.location_id 
inner join countries t5
on t4.country_id  = t5.country_id 
inner join regions t6
on t5.region_id  = t6.region_id 
and t6.region_name  = 'Europe';

-- написать запрос, который выводит id департамента и разницу между максимальной 
-- и минимальной зарплатой в департаменте

select 
	department_id, 
    max(salary) - min(salary) as delta_salary 
from employees
where department_id is not null
group by department_id
order by delta_salary  desc;

-- найти департамент с наибольшей дельтой

select 
	department_id, 
    max(salary) - min(salary) as delta_salary 
from employees 
where department_id is not null
group by department_id
having max(salary) - min(salary) = ( 
	select 
		max(delta_salary) as max_delta 
	from (
		select
			max(salary) - min(salary) as delta_salary 
		from employees
		where department_id is not null
		group by department_id
		order by delta_salary  desc
		) t1
);
