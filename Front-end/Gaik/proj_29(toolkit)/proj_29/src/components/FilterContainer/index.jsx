import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../UI/Checkbox';
import { priceAction, filterAction, sortAction, rateAction } from '../../store/slice/productsSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FilterContainer() {

    const dispatch = useDispatch();

    const products = useSelector(({products}) => products);
console.log(products);
    const [priceFilter, setPriceFilter] = useLocalStorage('priceFilter',  {min: 0, max: Infinity})

    useEffect(() => {
      priceFilter.max = priceFilter.max ?? Infinity;
      dispatch(priceAction(priceFilter));
    }, [priceFilter, products]);
    

    const [rateFilter, setRateFilter] = useLocalStorage('rateFilter', false);

    useEffect(() => {
      dispatch(rateAction(rateFilter));
    }, [rateFilter, dispatch, products]);

    const [wordFilter, setWordFilter] = useLocalStorage('wordFilter', '');

    useEffect(() => {
      dispatch(filterAction(wordFilter));
    }, [wordFilter, dispatch, products]);

 


  const sortHandler = ({target}) => {
    dispatch(sortAction(target.value));
  }

  const cleareFilters = () => {
    setPriceFilter({min: 0, max: Infinity});
    setRateFilter(false);
    setWordFilter('');
  }

    const sortOptions = [
      {id:1, value: 'price', label: 'Цена'},
      {id:2, value: 'title', label: 'название'},
      {id:3, value: 'rate', label: 'рейтинг'},
    ]
 

  return (
    <div className={s.container}>
        <form>
            <input value={wordFilter} onChange={({target}) => setWordFilter(target.value)} type="text" placeholder='поиск'/>
            <select onChange={sortHandler}>
              {
              sortOptions.map(({id, value, label}) => 
                <option key={id} value={value}>{label}</option>
              )
            }
            </select>
        </form>
            <div>
              <input value={priceFilter.min === 0 ? '' : priceFilter.min} 
                type="number" placeholder='Цена от' 
                onChange={({target}) => setPriceFilter({...priceFilter, min: +target.value})}/>

              <input value={priceFilter.max ?? Infinity} 
              type="number" placeholder='Цена до' 
              onChange={({target}) => setPriceFilter({...priceFilter, max: +(target.value || Infinity)} )}/>
              {/* <input type="text" placeholder='Цена от' onChange={event => setPrice({...price, min: +event.target.value})}/>
              <input type="text" placeholder='Цена до' onChange={event => setPrice({...price, max: +event.target.value})}/>    */}
            </div>
            <Checkbox 
              checked={rateFilter}
              label={"выбор покупателей"}
              onChange={({target}) => setRateFilter(target.checked)}
              />
            <button onClick={cleareFilters}>Очистить филтр</button>  

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