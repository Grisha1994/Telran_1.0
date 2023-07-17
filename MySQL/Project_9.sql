-- -------------------- 03.05.2023-------------------

CREATE DATABASE shop;

USE shop;

CREATE TABLE SELLERS(
       SELL_ID    INTEGER, 
       SNAME   VARCHAR(20), 
       CITY    VARCHAR(20), 
       COMM    NUMERIC(2, 2),
             BOSS_ID  INTEGER
);
                                            
CREATE TABLE CUSTOMERS(
       CUST_ID    INTEGER, 
       CNAME   VARCHAR(20), 
       CITY    VARCHAR(20), 
       RATING  INTEGER
);

CREATE TABLE ORDERS(
       ORDER_ID  INTEGER, 
       AMT     NUMERIC(7,2), 
       ODATE   DATE, 
       CUST_ID    INTEGER,
       SELL_ID    INTEGER 
);

INSERT INTO SELLERS VALUES(201,'Олег','Москва',0.12,202);
INSERT INTO SELLERS VALUES(202,'Лев','Сочи',0.13,204);
INSERT INTO SELLERS VALUES(203,'Арсений','Владимир',0.10,204);
INSERT INTO SELLERS VALUES(204,'Екатерина','Москва',0.11,205);
INSERT INTO SELLERS VALUES(205,'Леонид ','Казань',0.15,NULL);


INSERT INTO CUSTOMERS VALUES(301,'Андрей','Москва',100);
INSERT INTO CUSTOMERS VALUES(302,'Михаил','Тула',200);
INSERT INTO CUSTOMERS VALUES(303,'Иван','Сочи',200);
INSERT INTO CUSTOMERS VALUES(304,'Дмитрий','Ярославль',300);
INSERT INTO CUSTOMERS VALUES(305,'Руслан','Москва',100);
INSERT INTO CUSTOMERS VALUES(306,'Артём','Тула',100);
INSERT INTO CUSTOMERS VALUES(307,'Юлия','Сочи',300);


INSERT INTO ORDERS VALUES(101,18.69,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(102,5900.1,'2022-03-10',307,204);
INSERT INTO ORDERS VALUES(103,767.19,'2022-03-10',301,201);
INSERT INTO ORDERS VALUES(104,5160.45,'2022-03-10',303,202);
INSERT INTO ORDERS VALUES(105,1098.16,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(106,75.75,'2022-04-10',304,202); 
INSERT INTO ORDERS VALUES(107,4723,'2022-05-10',306,201);
INSERT INTO ORDERS VALUES(108,1713.23,'2022-04-10',302,203);
INSERT INTO ORDERS VALUES(109,1309.95,'2022-06-10',304,203);
INSERT INTO ORDERS VALUES(110,9891.88,'2022-06-10',306,201);
insert into orders(order_id, amt, odate, cust_id, sell_id) values(111, 1001, curdate(), 301, 201);


select * from CUSTOMERS;
select * from ORDERS;
select * from SELLERS;

-- вывести имена всех продавцов и имя их руководителя как колонку boss_name

select
	SELLERS.sname , SELLERS_copy.sname as boss_name
from SELLERS
left join SELLERS SELLERS_copy
on SELLERS.boss_id = SELLERS_copy.sell_id;

-- вывести имена всех покупателей, которые совершили разовую покупку на сумму > 1000

select distinct
	CUSTOMERS.cname 
from CUSTOMERS
left join ORDERS
on CUSTOMERS.cust_id = ORDERS.cust_id
where ORDERS.amt  > 1000;

-- вывести все заказы в виде пары "Имя покупателя", "Имя продавца", AMT

select 
	CUSTOMERS.cname as "Имя покупателя",
    SELLERS.sname as "Имя продавца",
    ORDERS.amt
from ORDERS
inner join CUSTOMERS
on ORDERS.cust_id = CUSTOMERS.cust_id
inner join SELLERS
on ORDERS.sell_id = SELLERS.sell_id;


-- вывести имена покупателей и продавцов, связанных с каким-то заказом
-- в котором продавец и покупатель были из разных городов

select 
	CUSTOMERS.cname as "Имя покупателя",
    SELLERS.sname as "Имя продавца"
from ORDERS
inner join CUSTOMERS
on ORDERS.cust_id = CUSTOMERS.cust_id
inner join SELLERS
on ORDERS.sell_id = SELLERS.sell_id
where CUSTOMERS.city != SELLERS.city; -- не равно это != или <>


select customers.cname as "Имя", orders.order_id, "Customer" as "Роль"
from customers
left join orders
on orders.cust_id = customers.cust_id

union all

select sellers.sname, orders.order_id, "Seller"
from sellers
left join orders
on orders.sell_id = sellers.sell_id;


-- вывести таблицу из двух колонок: sname (имя продавца), 
-- diff (разница между комиссией начальника и комиссией продавца)
-- если начальника нет, то выводить в колонке diff null

select 
sellers.sname as "Имя продавца", 
(sellers_copy.comm - sellers.comm) as "Diff"
from sellers
left join sellers sellers_copy
on sellers.boss_id = sellers_copy.sell_id;

-- вывести все order_id + имя продавца + сколько он получил за этот заказ

select 
sellers.sname as "Имя продавца",
sum( orders.amt * sellers.comm) as "Комиссия"
from orders
inner join sellers
on orders.sell_id = sellers.sell_id
group by sellers.sname
order by sum( orders.amt * sellers.comm);


