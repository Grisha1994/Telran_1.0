-- ----------31.05.2023------------------

-- select * 
-- from (
-- 	select department_id, count(department_id) as count
-- 	from employees
-- 	group by department_id
-- ) t1
-- where count >= 10;

-- select department_id, count(department_id)
-- from employees
-- group by department_id
-- having count(department_id) >= 10;

-- вывести названия департаментов, где работает больше 10 человек

select t1.department_name
from departments t1
inner join (
	select department_id
	from employees
	group by department_id
	having count(*) >=10
) t2
on t1.department_id = t2.department_id;

-- вывести название департамента, в котором работает больше среднего по компании число людей

select t1.department_name
from departments t1
inner join (
	select department_id
    from employees
    group by department_id
    having count(*) >= (
		select avg(cnt)
		from (
			select department_id, count(*) as cnt
			from employees
			group by department_id
		) t3
    )
) t2
on t1.department_id = t2.department_id;

-- найти такие департаменты, где работают не минимум и не максимум сотрудников