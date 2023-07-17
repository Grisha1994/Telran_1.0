import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { basket } from '../../store/slice/basketSlice'

export default function ProductsItem({id, title, image, price, rating}) {

  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={image} alt={title}/>
      <p>{title}</p>
      <div>
        <p>Цена: {price}</p>
        <p>{rating.rate}({rating.count})</p>
        <button onClick={() => dispatch(basket(id))}>Добавить</button>
      </div>
    </div>
  )
}
