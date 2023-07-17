import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../BasketItem'
import s from './style.module.css'
import BasketCalculation from '../BasketCalculation'

export default function BasketContainer() {

    const basket = useSelector(({basket}) => basket)
    const {list} = useSelector(({products}) => products)

    const result = basket.map(el => {
        const product = list.find(({id}) => id === el.id);
        return {...el, ...product}
    })

    
  return (
    <div className={s.item_container}>
      <div>
          {
                result.map(el => <BasketItem key={el.id} {...el}/>)
          }
      </div>
      <BasketCalculation result={result}/>
    </div>
  )
}
