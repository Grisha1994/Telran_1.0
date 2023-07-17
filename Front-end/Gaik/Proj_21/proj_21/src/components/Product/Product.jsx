import React from 'react'
import s from '../Product/style.module.css'

export default function({id, title, price, deleteStatus, count, plus, minus, reset, plus1000}) {
 

  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <p className={s.count}>{count === 0 ? "товар отсстуетут" : count}</p>
        <button onClick={() => {plus(id); console.log(`кол-во товара с id ${id} увеличилось`)}}>+</button>
        <button onClick={() => {minus(id); console.log(`кол-во товара с id ${id} уменьшилось`)}}>-</button>
        <button onClick={() => reset(id)}>Обнулить</button>
        <button className={s.button} onClick={() => deleteStatus(id)} >Delete</button>
        <button onClick={() => {plus1000(id)}}>увеличениe на 1000</button>
    </div>
  )
}
