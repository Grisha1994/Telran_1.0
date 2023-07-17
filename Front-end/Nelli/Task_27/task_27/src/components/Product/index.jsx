import React from 'react'
import s from './style.module.css'
import { add_to_card} from '../../store/reducer/cardReducer'
import { delete_product} from '../../store/reducer/productsReducer'
import { useDispatch } from 'react-redux'


export default function Product({id, title, price}) {

  const  dispatch =  useDispatch();
  const addToCard = () => dispatch(add_to_card({id, title, price}));
 
  return (
    <div className={s.product_item}>
        <p>{title}</p>
        <p>{price}</p>
        <div onClick={addToCard}>Add to card</div>
        <p onClick={() => dispatch(delete_product(id))}>X</p>
    </div>
  )
}
