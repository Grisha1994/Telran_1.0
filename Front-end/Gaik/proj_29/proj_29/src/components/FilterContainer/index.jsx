import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { priceProductsAction, productsFilterAction, sortProductsAction, rateProductsAction } from '../../store/reducer/productsReducer';
import Checkbox from '../UI/Checkbox';

export default function FilterContainer() {

    const dispatch = useDispatch();

    const serchHandler = ({target}) => {
        dispatch(productsFilterAction(target.value));
    }

    const sortHandler = ({target}) => {
      dispatch(sortProductsAction(target.value));
  }

  const minPriceHandler = ({target}) => {
    setPrice({...price, min: +target.value})
}

const maxPriceHandler = ({target}) => {
  if(target.value === ''){
    setPrice({...price, max: Infinity})
  } else{
    setPrice({...price, max: +target.value})
  }
}

const checboxHandler = ({target}) => {
    dispatch(rateProductsAction(target.checked))
    // console.log(target.checked);
}

    const sortOptions = [
      {id:1, value: 'price', label: 'Цена'},
      {id:2, value: 'title', label: 'название'},
      {id:3, value: 'rate', label: 'рейтинг'},
    ]
 
    const [price, setPrice] = useState({min: 0, max: Infinity})

    useEffect(
      () => {dispatch(priceProductsAction(price))},
      [price]
    )

  return (
    <div className={s.container}>
        <form>
            <input onChange={serchHandler} type="text" placeholder='поиск'/>
            <select onChange={sortHandler}>
              {
              sortOptions.map(({id, value, label}) => 
                <option key={id} value={value}>{label}</option>
              )
            }
            </select>
        </form>
            <div>
              <input type="text" placeholder='Цена от' onChange={minPriceHandler}/>
              <input type="text" placeholder='Цена до' onChange={maxPriceHandler}/>
              {/* <input type="text" placeholder='Цена от' onChange={event => setPrice({...price, min: +event.target.value})}/>
              <input type="text" placeholder='Цена до' onChange={event => setPrice({...price, max: +event.target.value})}/>    */}
            </div>
            <Checkbox label={"выбор покупателей"} onChange={checboxHandler}/>

            {/* <div>
              <label>выбор покупателей</label>
              <input type="checkbox"  onChange={checboxHandler} />
            </div> */}
        


    </div>
  )
}










// ?? - оператор нулевого слияния

// если значение слева от оператора null или undefined, то выведет справа

//  || -

// если значение слева от оператора true, то выведет слева (всё выражение будет true)

// если значение слева от оператора false, то выведет справа (true либо false в зависимости от того что справа)

// && -

// если значение слева от оператора false, то вернет false и на правое значение он не посмотрит

// если левое true, то выведет справа