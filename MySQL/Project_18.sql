use hr;

use tmp_1;

select * from orders;
select * from customers;
select * from products;

-- найти кол-во онлайн и прямых заказов
-- в итоговой выборке должны быть поля  order_type и cnt

select 
	order_type,
	count(order_type) as cnt
from orders
group by order_type;

-- определить процент онлайн заказов и процент прямых заказов

select 
	count(case when order_type = 'online' then 1 end) * 100 / count(*) as online_cnt,
    count(case when order_type = 'direct' then 1 end) * 100 / count(*) as direct_cnt
from orders;

-- вывести общее кол-во заказаных продуктов для online заказов и для direct заказов

select 
	order_type,
	sum(product_count) as cnt
from orders
group by order_type;

-- вывести всех клиентов и кол-во заказных продуктов каждым 
-- если у клиента нет заказов, должно быть значение 0 
-- вывести имя, фамилию и кол-во заказов

select 
 t1.name,
 t1.lastname,
 COALESCE(t2.product_count , 0) as product_count
from customers t1 
inner join (
 select 
  t1.id,
  sum(product_count) as product_count
 from customers t1 
 left join orders t2 
 on t1.id = t2.customer_id 
 group by t1.id
) t2
on t1.id  = t2.id

-- вывести имя и фамилию покупателя и сумму всех его заказов

select 
 t1.name,
 t1.lastname,
 COALESCE(t2.order_price , 0) as ordet_total
from customers t1 
inner join (
 select 
  t1.id,
  sum(product_count * t3.price) as order_price
 from customers t1 
 left join orders t2 
 on t1.id = t2.customer_id 
 left join products t3 
 on t2.product_id  = t3.id 
 group by t1.id
) t2
on t1.id  = t2.id

-- вывести имя и фамилию покупателя и общую сумму онлайн заказов

select 
 t1.name,
 t1.lastname,
 t2.order_price
from customers t1 
inner join (
 select 
  t1.id,
  sum(case when order_type = 'online' then 1 end * (product_count * t3.price)) as order_price
 from customers t1 
 left join orders t2 
 on t1.id = t2.customer_id 
 left join products t3 
 on t2.product_id  = t3.id 
 group by t1.id
 ) t2
on t1.id  = t2.id
where t2.order_price is not null;


-- ---------------------------------------------- 04.07.2023 -------------------------------------

select * from orders;
select * from customers;
select * from products;


-- 1) сформировать выборку, которая содержит имя и фамилию 
-- покупателя и сумму заказов, которые он сделал online.

select 
 t1.name,
 t1.lastname,
 t2.order_price
from customers t1 
inner join (
 select 
  t1.id,
  sum(product_count * t3.price) as order_price
 from customers t1 
 left join orders t2 
 on t1.id = t2.customer_id 
 left join products t3 
 on t2.product_id  = t3.id 
 where order_type = 'online'
 group by t1.id
 ) t2
on t1.id  = t2.id;


select 
 t1.name,
 t1.lastname,
 t2.online_total,
 t2.direct_total
from customers t1 
inner join (
 select 
  t1.id,
  sum(case when order_type = 'online' then 1 end * (product_count * t3.price)) as online_total,
  sum(case when order_type = 'direct' then 1 end * (product_count * t3.price)) as direct_total
 from customers t1 
 left join orders t2 
 on t1.id = t2.customer_id 
 left join products t3 
 on t2.product_id  = t3.id 
 where order_type is not null
 group by t1.id
 ) t2
on t1.id  = t2.id;


-- написать запрос, который вывод кол-во каждого товара, который нужно 
-- отправить онлайн

-- в итоговой выборке должны быть поля 
-- title (название товара)
-- cnt(кол-во товара, которое нужно отправить онлайн)

select
	t1.title,
	t2.cnt
from products t1
inner join (
	select
		product_id,
		sum(product_count) as cnt
	from orders
	where order_type = 'online'
	group by product_id
) t2
on t1.id = t2.product_id;

-- доработать запрос таким образом, чтобы в итоговой выборке были поля
-- title, online_cnt, direct_cnt

select
	t1.title,
	coalesce(t2.onlain_cnt, 0) as onlain_cnt, 
    coalesce(t2.direct_cnt, 0) as direct_cnt
from products t1
left join (
	select
		product_id,
		sum(case when order_type = 'online' then product_count end ) as onlain_cnt,
        sum(case when order_type = 'direct' then product_count end ) as direct_cnt
	from orders
	group by product_id
) t2
on t1.id = t2.product_id;