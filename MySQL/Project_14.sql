------------------------- 07.06.23 ------------------------

create database OE;
use OE;

select * from categories_tab;
select * from customers;
select * from order_items;
select * from orders;
select * from product_information;

-- 1. Вывести имя, фамилию пользователей и даты их заказов(order_date).

select
	t1.cust_first_name, t1.cust_last_name,
    t2.order_date
from customers t1
inner join orders t2
on t1.customer_id = t2.customer_id;

-- 2. Вывести даты заказов продуктов и описание этих продуктов(product_description).

select
	t1.ORDER_DATE,
    t3.PRODUCT_DESCRIPTION
from orders t1
inner join order_items t2
on t1.ORDER_ID = t2.ORDER_ID
inner join product_information t3
on t3.PRODUCT_ID = t2.PRODUCT_ID;

-- 3. Вывести имя, фамилию пользователей, даты заказов(order_date), описание 
-- продуктов(product_description), которые они заказали и категории соответствующих 
-- продуктов (category_name).

select
    t1.cust_first_name, t1.cust_last_name,
	t2.ORDER_DATE,
    t4.PRODUCT_DESCRIPTION,
    t5.category_name
from customers t1
inner join orders t2
on t1.customer_id = t2.customer_id
inner join order_items t3
on t3.ORDER_ID = t2.ORDER_ID
inner join product_information t4
on t3.PRODUCT_ID = t4.PRODUCT_ID
inner join categories_tab t5
on t4.CATEGORY_ID = t5.CATEGORY_ID;

-- Вывести названия(product_name), описания категорий(category_description) и 
-- количества(quantity) тех продуктов, у которых минимальная стоимость (min_price) больше 
-- 300.

select
    t1.PRODUCT_NAME, t1.min_price,
	t2.CATEGORY_DESCRIPTION,
    t3.QUANTITY
from product_information t1
inner join categories_tab t2
on t1.CATEGORY_ID = t2.CATEGORY_ID
	inner join order_items t3
	on t1.PRODUCT_ID = t3.PRODUCT_ID
	where t1.min_price > 300;

-- 5. Вывести имя, фамилию покупателей, которые купили принтеры.

select
    t1.CUST_FIRST_NAME, t1.CUST_LAST_NAME,
	t5.CATEGORY_DESCRIPTION
from customers t1
inner join orders t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID
	inner join order_items t3
	on t2.ORDER_ID = t3.ORDER_ID
		inner join product_information t4
		on t3.PRODUCT_ID = t4.PRODUCT_ID
			inner join categories_tab t5
			on t4.CATEGORY_ID = t5.CATEGORY_ID
			where t5.CATEGORY_DESCRIPTION like '%printers%';
            

create database tasks;
use tasks;          

create table employee(
    id integer primary key,
    name varchar(128) not null,
    lastname varchar(128) not null,
    salary integer check(salary >= 0) default 0,
    manager_id integer,
    department_id integer
);

insert into employee values (1, 'Thomas'   , 'Nelson'     , 150000, null, 1 );
insert into employee values (2, 'Willie'   , 'Mitchell'   , 90000 , 1,    3 );
insert into employee values (3, 'David'    , 'Garrett'    , 170000, 2,    2 );
insert into employee values (4, 'Gary'     , 'Richardson' , 140000, 1,    5 );
insert into employee values (5, 'Donald'   , 'Stewart'    , 100000, 3,    5 );
insert into employee values (6, 'Frederick', 'White'      , 70000 , 2,    3 );
insert into employee values (7, 'Willie'   , 'Gonzales'   , 12000 , 1,    1 );
insert into employee values (8, 'Angel'    , 'Carter'     , 990000, 3,    3 );

create table tasks(
    id integer,
    title varchar(128),
    employee_id integer,
    payment integer,
    done_flg integer
);

insert into tasks values(1,  'Task # 616', 1,   367,  1);
insert into tasks values(2,  'Task # 741', 4,   430,  1);
insert into tasks values(3,  'Task # 526', 4,   173,  0);
insert into tasks values(4,  'Task # 588', 1,   141,  1);
insert into tasks values(5,  'Task # 964', 2,   506,  0);
insert into tasks values(6,  'Task # 282', 4,   404,  0);
insert into tasks values(7,  'Task # 350', 5,   339,  0);
insert into tasks values(8,  'Task # 523', 7,   130,  1);
insert into tasks values(9,  'Task # 776', 2,   439,  1);
insert into tasks values(10, 'Task # 155', 2,   467,  1);
insert into tasks values(11, 'Task # 348', 4,   570,  0);
insert into tasks values(12, 'Task # 703', 3,   574,  1);
insert into tasks values(13, 'Task # 727', 6,   116,  0);
insert into tasks values(14, 'Task # 131', 5,   497,  0);
insert into tasks values(15, 'Task # 166', 10,  218,   0);
insert into tasks values(16, 'Task # 167', 10,  263,   1);
insert into tasks values(17, 'Task # 168', 10,  334,   0);

select * from employee;
select * from tasks;

-- 1) Напишите запрос, который выводит одно поле (avg_salary) со средней зарплатой.
-- Результат округлите с точностью до двух знаков после запятой.

select
	round(avg(salary), 2) as avg_salary
from employee;

-- 2) Напишите запрос, который выводит имя и фамилию сотрудников с максимальной зарплатой.

select 
	name, 
    lastname,
    salary
from employee 
where salary = (
	select 
		max(salary)
    from employee
);

-- 3) Напишите запрос, который выводит одно поле (done_cnt) с колличеством сделаных задач.
-- count(*) - считает общее количество строк

select 
	count(*) as done_flg
from tasks
where done_flg like '%1%';

-- 4) Найдите колличество сотрудников, у которых есть хотя бы одна невыполненая задача.
-- Выборка должна содержать поле busy_cont

-- distinct - выводит не поаторяющиеся значения

select 
	count(distinct employee_id) as busy_count
from tasks
where done_flg = 0;

-- 5) Найдите общую стоимость невыполненых задач. Результат выведите в поле total_payment.

select 
	sum(payment) as total_payment
from tasks
where done_flg = 0;


use OE;

select * from categories_tab;
select * from customers;
select * from order_items;
select * from orders;
select * from product_information;

-- 1. Вывести сумму заказов для всех покупателей, name, lastname.

select
	t1.CUST_FIRST_NAME, t1.CUST_LAST_NAME,
    t2.sum
from customers t1
inner join(
	select 
		sum(ORDER_TOTAL) as sum,
		CUSTOMER_ID
	from orders
	group by CUSTOMER_ID) t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID;

-- 2. Вывести имя и фамилию тех покупателей, у которых лимит кредита больше среднего.

select 
	CUST_FIRST_NAME, CUST_LAST_NAME,
    CREDIT_LIMIT
from customers  
where CREDIT_LIMIT > (
	select 
		 avg(CREDIT_LIMIT)
    from customers
);

-- 3. Вывести количество покупателей мужского пола.

select 
		count(CUSTOMER_ID) as male_count
from customers
where GENDER = 'M';
    
-- 4. Вывести максимальный лимит кредита покупателей женского пола и мужского по 
-- отдельности. Вывести имя и фамилию этих покупателей.

select 
	t1.CUST_FIRST_NAME, t1.CUST_LAST_NAME,
    t1.CREDIT_LIMIT,
    t1.GENDER
from customers t1
inner join (
	select 
		GENDER,
		max(CREDIT_LIMIT) as max
    from customers
    group by GENDER
) t2
on t1.GENDER = t2.GENDER
and t1.CREDIT_LIMIT = t2.max;

-- 1. Найти среднее значение unit_price для тех товаров, у которых quantity больше 50. 
-- 2. Вывести id тех покупателей(customer_id), сумма покупок(order_total) у которых больше 
-- 100.000.
-- 3. Вывести имя и фамилию тех покупателей, суммы покупок у которых больше 100.000.
-- 4. Если у покупателя credit_limit меньше 600, выводить 1, если больше либо равно 600 и меньше 
-- 800 выводить 2, если больше либо равно 800 вводить 3, и выводить имя и фамилию
-- покупателей.
-- 5. Если у покупателя сумма order_total больше 150.000 вывести member, в остальных случаях 
-- new, также вывести id покупателя.
-- 6. Вывести название продукта и разницу между list price и min price, если эта разница больше 
-- 100, если нет вывести null. 
-- 7. Вывести product_id и произведение unit_price на quantity, в том случае, если quantity больше 
-- 10, если нет, только unit price.