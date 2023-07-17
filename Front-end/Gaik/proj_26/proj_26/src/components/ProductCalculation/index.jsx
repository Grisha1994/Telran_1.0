import React from 'react'
import { useSelector } from 'react-redux';
import s from './style.module.css'

export default function ProductCalculation() {

    const products = useSelector(({products}) => products);

    // const totalSum = products.reduce((acc, {price, discount}) => discount === undefined ? acc + price : acc + price - price / 100 * discount, 0);
    const totalSum = products.reduce((acc, {price, discount}) => acc + price - price / 100 * (discount ?? 0), 0);
    

  return (
    <div className={s.item}>
       <p> Количество породуктов: {products.length}</p>
       <p> Сумма товаров с учетом скидки: {totalSum}</p>
    </div>
  )
}
