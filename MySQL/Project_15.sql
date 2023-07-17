create database tmp_1;
use tmp_1;

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(20),
    lastname VARCHAR(20),
    gender char(1) check(gender in ('f', 'm')),
    age integer
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    customer_id integer,
    product_id integer,
    order_type varchar(128),
    product_count integer
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    title varchar(128),
    price numeric(8, 2)
);


INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (1, 3, 'online', 3);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (1, 2, 'online', 5);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (3, 1, 'direct', 2);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (3, 4, 'direct', 6);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (3, 3, 'direct', 3);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (1, 3, 'online', 4);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (5, 7, 'online', 2);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (5, 9, 'online', 7);
INSERT INTO orders (customer_id, product_id, order_type, product_count) VALUES (6, 5, 'direct', 4);


INSERT INTO customers (name, lastname, age, gender) VALUES ('Гайк', 'Инанц', 29, 'm');
INSERT INTO customers (name, lastname, age, gender) VALUES ('Максим', 'Грибов', 32, 'm');
INSERT INTO customers (name, lastname, age, gender) VALUES ('Антон', 'Куликов', 27, 'm');
INSERT INTO customers (name, lastname, age, gender) VALUES ('Юрий', 'Митрофанов', 30, 'm');
INSERT INTO customers (name, lastname, age, gender) VALUES ('Нелли', 'Ефремян', 25, 'f');
INSERT INTO customers (name, lastname, age, gender) VALUES ('Ольга', 'Степанова', 35, 'f');

INSERT INTO products (title, price) VALUES ('молоко', 70);
INSERT INTO products (title, price) VALUES ('колбаса', 230);
INSERT INTO products (title, price) VALUES ('хлопья', 150);
INSERT INTO products (title, price) VALUES ('хлеб', 30);
INSERT INTO products (title, price) VALUES ('масло', 120);
INSERT INTO products (title, price) VALUES ('чипсики', 60);
INSERT INTO products (title, price) VALUES ('шоколад', 70);
INSERT INTO products (title, price) VALUES ('кетчуп', 150);
INSERT INTO products (title, price) VALUES ('яблоко', 70);


select * from customers;
select * from orders;
select * from products;

-- найти сердний возраст покупателе мужского и женского пола

select 
	GENDER,
	avg(age) as avg_Age
from customers
group by GENDER;

-- найти самых молодых покупателей женского и мужского пола

select
	t1.name, t1.lastname, t1.gender, t1.age
from customers t1
inner join (
	select 
		GENDER,
		min(age) as min_Age
	from customers
	group by GENDER
) t2
on t1.gender = t2.gender
and t1.age = t2.min_Age; 

-- найти имя и фамилию покупателей, у которых нет заказов

select
	name,
    lastname
from customers
where id not in (select customer_id from orders);

select
	t1.name, t1.lastname
from customers t1
left join orders t2
on t1.id = t2.customer_id
where t2.id is null; 

-- вывести название продуктов, которые ни разу не заказывали

select
	title, price
from products
where id not in (select product_id from orders);

select
	title, price
from products t1
left join orders t2
on t1.id = t2.product_id
where t2.id is null; 

-- сформировать выборку, которая выводит кол-во онлайн заказов и прямых

select 
	order_type,
	count(order_type) as count_Order
from orders
group by order_type;

-- вывести имя и фамилию покупателей с максимальным кол-вом заказов

select
	name, lastname
from customers
where id in (
	select
		customer_id
	from orders
	group by customer_id
	having count(*) = (
		select
			max(cnt)
		from(
			select
				count(*) as cnt
			from orders
			group by customer_id
		)t1
	)
);



