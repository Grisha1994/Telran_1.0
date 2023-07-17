import React from 'react'
import ProductsItem from '../ProductsItem'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function ProductList({category}) {

    const list = useSelector(({products}) => products.list);
    
    const filteredProducts = category
    ? list.filter(el => el.category === category)
    : list;

    
  
  return (
    <div className={s.products_item}>
        {
          status === 'Loading'
          ?<p>Идет загрузка...</p>
          :status === 'error'
            ?<p>Произошла ошибка</p>
            :filteredProducts
            .filter(({show}) => Object.values(show).every(el => el))
            .map(el => <ProductsItem key={el.id} {...el}/>)
        }
    </div>
  )
}
