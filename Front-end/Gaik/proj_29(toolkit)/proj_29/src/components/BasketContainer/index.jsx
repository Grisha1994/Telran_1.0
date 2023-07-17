import React from 'react'
import BasketItem from '../BasketItem'
import s from './style.module.css'
import BasketCalculation from '../BasketCalculation'
import { useBasketProducts } from '../hooks/useBasketProducts'


export default function BasketContainer() {

const result = useBasketProducts();

  return (
    <div className={s.item_container}>
      {
          
        result.length !== 0 
        ?<> 
          <div>
            {
              result.map(el => <BasketItem key={el.id} {...el}/>)
            }
          </div>
          <BasketCalculation />
        </>
        : <p>Корзина пуста</p> 
        }
    </div>
  )
}
