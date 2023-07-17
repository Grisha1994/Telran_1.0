use hr;

select * from hr.departments;

-- count(*) - сколько не нулевых строк
-- min() max()
-- avg()
-- sum()

-- найти мах зарплату
select max(salary) from employees;  

-- найти мах зарплату в компании
select 
	department_id, 
    max(salary) 
from employees
where department_id is not null
group by department_id
order by max(salary) desc; 


select 
	t1.department_name, 
    t2.max_salary
from departments t1
inner join (select 
	department_id, max(salary) as max_salary
    from employees
	where department_id is not null
	group by department_id
	) t2
on t1.department_id = t2.department_id
order by t2.max_salary desc;

-- найти сотрудников, получающих мах зарплату в компании (колонки first_name, last_name, salary)

select first_name, last_name, salary
from employees
where salary = (select max(salary) from employees);

-- найти сотрудников, получающих мах зарплату в своем департаменте (колонки first_name, last_name, salary, department_id)

select 
	t1.department_id,
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
on t1.department_id = t2.department_id and t1.salary = t2.max_salary;

-- найти сотрудников, получающих меньше среднего зарплату в компании

select * from employees where salary < (select avg(salary) from employees);


-- найти сотрудников, получающих avg зарплату в своем департаменте (колонки first_name, last_name, salary, department_id)
select 
	t1.first_name, 
    t1.last_name,
    t1.salary,
    t1.department_id
from employees t1
inner join (select 
	department_id, avg(salary) as avg_salary
    from employees
	where department_id is not null
	group by department_id
	) t2
on t1.department_id = t2.department_id and t1.salary < t2.avg_salary;

-- найти всех сотрудников, получающих не мах и не мин зарплату в своем департаменте (колонки first_name, last_name, salary, department_id)

select 
	t1.first_name, 
    t1.last_name,
    t1.salary,
    t1.department_id
from employees t1
inner join (select 
	department_id, max(salary) as max_salary, min(salary) as min_salary
    from employees
	where department_id is not null
	group by department_id
	) t2
on t1.department_id = t2.department_id and t1.salary < t2.max_salary and t1.salary > t2.min_salary;



-- посчитать сколько сотрудников в каждом департаменте

select department_id, count(employee_id)
from employees
group by department_id;

-- вывести id департамента, где работает больше всего сотрудников

-- select max(amount_of_employees)
-- from ( select department_id, count(employee_id) as amount_of_employees
-- from employees
-- group by department_id) t1

create view tmp as select department_id, count(employee_id) as amount_of_employees
	from employees
	group by department_id;
    
select department_id from tmp
where amount_of_employees = (select max(amount_of_employees) from tmp);

drop view tmp;

-- вывести всех сотрудников (first_name, last_name, department_id), 
-- работающих в самом большом департаменте

create view tmp as select department_id, count(employee_id) as amount_of_employees
	from employees
	group by department_id;
    
select 
	first_name, last_name, department_id 
from employees
where department_id = (
	select department_id from tmp
	where amount_of_employees = (
		select max(amount_of_employees) from tmp
	)
);

drop view tmp;

-- вывести среднюю зп в департаментах с мин кол-ом сотрудников 

create view tmp as select department_id, count(employee_id) as amount_of_employees
	from employees
	group by department_id;

select 
	avg(salary)
from employees
where department_id in (
	select department_id from tmp
	where amount_of_employees = (
		select min(amount_of_employees) from tmp
	)
);

drop view tmp;

    

