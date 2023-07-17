import React from 'react'
import { useDispatch } from 'react-redux';
import s from './style.module.css'
import { plus, minus, remove} from '../../store/slice/basketSlice';

export default function BasketItem({id, count, title, image, price}) {

    const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p> {price} x {count}= {(price * count).toFixed(2)}</p>
        
        <div className={s.item_count}>
            <button onClick={() => dispatch(plus(id))}>+</button>
            <button onClick={() => dispatch(minus(id))}>-</button>
        </div>
        <button onClick={() => dispatch(remove(id))}>Удалить</button>
    </div>
  )
}
