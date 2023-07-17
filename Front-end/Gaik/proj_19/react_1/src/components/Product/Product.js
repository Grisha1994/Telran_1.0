// создать компонент Product, который содержит в себе следующую верстку

/* <div>
  <p>Велосипед</p>
  <p>3500</p>
  <p>Очень полезно для здоровья</p>
</div> */
// доработать компонен Product таким образом, чтобы 
// данные продукта передавались через props


import React from 'react'
import s from './style.module.css'

export default function Product({title, price, desc}) {
    console.log(s);
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{desc}</p>
    </div>
  )
}
