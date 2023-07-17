import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { resultAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'
import Checkbox from '../UI/Checkbox';

export default function BasketCalculation({result}) {


    const totalSum = result.reduce((acc, {price, count}) => acc + price * count, 0).toFixed(2);
    const dispatch = useDispatch();

    const [ showPrice, setShowPrice] = useState(false);
    
  return (
    <div className={s.item}>
        <div>
          {showPrice && <p>Итого: {totalSum}</p> }
          <Checkbox onChange={({target}) => setShowPrice(target.checked)} 
          label={'показать цену'}/>
        </div>
        <button onClick={() => dispatch(resultAction())}>Очистить корзину</button>
    </div>
  )
}
