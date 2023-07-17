use hr;

-- select * from employees;

-- select sum(salary) from employees;

-- select sum(salary) from employees where first_name = "Steven";

-- select sum(
--      case
--          when salary > 10000 then salary else 0
--      end
-- ) as "Salary Sum" from employees;

-- select first_name, last_name, salary from employees;

-- select sum(
--      case
--         when salary > 10000 then salary * 0.07 else salary * 0.05
--     end
-- ) as "Taxes" from employees;
 
--  найти среднюю зарплату сотрудников с salary <= 10000

-- select avg(
--   case
--     when salary <= 10000 then salary else null
--   end
-- ) as "srednee" from employees;
 
-- select first_name, last_name, salary, department_id from employees;

-- select department_id, sum(salary) from employees group by department_id;

-- select department_id, max(salary), min(salary) from employees group by department_id;

-- составить список из 2 колонок: department_id и are_everyone_more_10k

-- select department_id, min(
--   case
--     when salary >= 10000 then 1 else 0
--   end
-- ) as "are_everyone_more_10k" from employees group by department_id;

--  select department_id, max(  
--    case
--      when salary >= 10000  then 1 else 0
--    end
--  ) as "is_anyone_more_10k" from employees group by department_id;
 
--  составить список из 2 колонок: department_id и is_anyone_more_10k
 -- is_anyone_more_10k = 1, если хотя бы один сотрудник департамента получает >= 10000, и 0, если все сотрудники департамента получают < 10000

-- select first_name, last_name, salary, (
--      case
--          when salary >= 10000 then 1 else 0
--      end
-- )as "More than 10K" from employees;    

-- вывести список из 2 колонок: department_id и число сотрудников в этом департаменте

-- select department_id, count(salary) from employees group by department_id;  
-- select department_id, count(employee_id) from employees group by department_id;

-- вывести список всех сотрудников из employees с колонками first_name, last_name, salary и grade
-- grade = 0, если salary < 5000, = 1, если salary от 5000 до 10000 включительно и = 2, если salary > 10000

-- select first_name, last_name, salary,(
--      case
--          when salary < 5000 then 0 
--          when salary >= 5000 and salary <= 10000 then 1
--          when salary > 10000 then 2
--      end
-- )as "grade" from employees; 

-- select (
--      case
--          when salary < 5000 then 0 
--          when salary >= 5000 and salary <= 10000 then 1
--          when salary > 10000 then 2
--      end
-- )as "grade", count(employee_id) as "count" from employees group by grade; 

-- выбрать все first_name, last_name, salary где выполняется такое 
-- условие: показывать только сотрудников с зп >= 4000 
-- НО если job_id = IT_PROG,то с зп >= 6000

-- select first_name, last_name, salary from employees where salary >= (
-- 	case
-- 		when job_id = "IT_PROG" then 6000 else 4000
--     end
-- );

-- select job_id, min(salary), max(salary) from employees group by job_id;

-- select job_id, department_id, min(salary), max(salary) from employees group by job_id, department_id;

-- все сотрудники жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований.
-- все сотрудники жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований для каждого департамента.
-- все сотрудники, зарабатывающие больше 10 000, жертвуют 10% от зп в фонд защиты дикой природы. Посчитать сумму всех пожертвований.
-- прилетел дракон и оштрафовал всех сотрудников на 10 000 из их зарплаты. Сотрудник не может получать отрицательное число денег, поэтому если зп сотрудника < 10000, то он штрафуется на величину своей зп. Посчитать сумму всех штрафов.




