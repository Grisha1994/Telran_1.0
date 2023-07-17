import React from 'react'
import { useDispatch } from 'react-redux';
import { plusAction, minusAction, deleteAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'

export default function BasketItem({id, count, title, image, price}) {

    const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p> {price} x {count}= {(price * count).toFixed(2)}</p>
        
        <div className={s.item_count}>
            <button onClick={() => dispatch(plusAction(id))}>+</button>
            <button onClick={() => dispatch(minusAction(id))}>-</button>
        </div>
        <button onClick={() => dispatch(deleteAction(id))}>Удалить</button>
    </div>
  )
}
