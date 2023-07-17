import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import {removeAction, remove_discountAction} from '../../store/reducer/productReducer'


export default function ProductItem({id, title, price, discount}) {

    const dispatch = useDispatch();
 
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p className={!!discount ? s.defalt_price : " " }>{price}</p>
        <p className={s.real_price}>{price = discount === undefined ?  " " : price - price / 100 * discount}</p>
        <button onClick={() => dispatch(removeAction(id))}>Удаление</button>

        {
            !!discount ? <button onClick={() => dispatch(remove_discountAction(id))}>Удаление Скидки</button> : " "
        }
        
    </div>
  )
}
