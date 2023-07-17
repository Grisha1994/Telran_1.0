import React from 'react'
import s from './style.module.css'
import Card from '../Card'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/reducer/cardReducer'


export default function CardContainer({id}) {
  const dispatch = useDispatch();

  const cart_state = useSelector(state => state.card)
  console.log(cart_state);

   const total_amount = cart_state.reduce((acc, {price, count}) => acc + price * count, 0);

  return (
    <div className={s.card}>
        <p>Корзина</p>
        <div>
            {
              cart_state.map(el => <Card key={el.id} {...el} />)
            }
        </div>
        <p>Итого: {total_amount}</p>
        <div onClick={() => dispatch(remove(id))}>Clear cart</div>
    </div>
  )
}
