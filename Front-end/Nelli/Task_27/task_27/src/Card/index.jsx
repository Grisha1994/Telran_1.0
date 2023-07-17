import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { minus, plus, delete_card } from '../store/reducer/cardReducer'


export default function Card({id, title, price, count}) {

  const dispatch = useDispatch();

  return (
    <div className={s.card_item}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(plus(id))}>+</button>
            <button onClick={() => dispatch(minus(id))}>-</button>
        </div>
        <p onClick={() => dispatch(delete_card(id))}>X</p>
    </div>
  )
}
