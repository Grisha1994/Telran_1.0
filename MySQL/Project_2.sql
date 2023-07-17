create database tmp;
use tmp;

create table products(
 id integer primary key,
 title varchar(128),
 price integer,
 discount_pct integer,
 category varchar(128)
);

insert into products values(1,  'Велосипед',   45000, 12,   'sport');
insert into products values(2,  'Ролики',      22000, 5,    'sport');
insert into products values(3,  'Самокат',     15000, null, 'sport');
insert into products values(4,  'Лыжи',        28000, 10,   'sport');
insert into products values(5,  'Диван',       65000, 15,   'home');
insert into products values(6,  'Стол',        12000, null, 'home');
insert into products values(7,  'Шкаф',        84000, 5,    'home');
insert into products values(8,  'Кровать',     57000, 25,   'home');
insert into products values(9,  'Молоко',      120,   null, 'food');
insert into products values(10, 'Хлеб',        56,    null, 'food');
insert into products values(11, 'Ягоды',       130,   10,   'food');
insert into products values(12, 'Картошка',    64,    null, 'food');
insert into products values(13, 'Шоколад',     80,    15,   'food');

select
title,
price
from products
where category = 'home'; 

-- Вывести продукты, относящиеся к категории домашних (home). Вы выборке должны быть поля title и price.
select * from products where price >= 10000 and price <= 20000;

-- Выведите продукты, у которых цена находится в диапазоне от 10000 до 20000 (включая концы). В выборке должно быть только поле title.
select * from products where price between 10000 and 20000;

-- Выведите продукты, у которых в названии нет буквы "о". В итоговой выборке должны быть поля category и title.
select
category,
title
from products
where title not like '%о%';

-- Выведите продукты, у которых нет скидок. Итоговая выборка должна состоять из поля title.
select
title
from products
where discount_pct is null;

-- Выведите продукты, у которых скидка со значением 5, 15 или вообще отстутствует. Итоговая выборка должна состоять из поля title.
select
title
from products
where discount_pct = 5 or discount_pct = 15 or discount_pct is null;

select
title
from products
where discount_pct in (5, 15) or discount_pct is null;

-- ничего не выведеит потому что в скобках null
select
title
from products
where discount_pct not in (null, 5, 15);
 
