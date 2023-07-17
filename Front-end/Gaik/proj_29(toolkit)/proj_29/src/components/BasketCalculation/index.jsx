import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import s from './style.module.css'
import Checkbox from '../UI/Checkbox';
import { clear } from '../../store/slice/basketSlice';
import { useBasketProducts } from '../hooks/useBasketProducts';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function BasketCalculation() {

    const result = useBasketProducts();

    const totalSum = result.reduce((acc, {price, count}) => acc + price * count, 0).toFixed(2);
    const dispatch = useDispatch();

    const [ showPrice, setShowPrice] = useLocalStorage('setShowPrice', false);

    console.log(showPrice);
    
  return (
    <div className={s.item}>
        <div>
          {showPrice && <p>Итого: {totalSum}</p> }
          <Checkbox 
            checked={showPrice}
            onChange={({target}) => setShowPrice(target.checked)} 
            label={'показать цену'}/>
        </div>
        <button onClick={() => dispatch(clear())}>Очистить корзину</button>
    </div>
  )
}
