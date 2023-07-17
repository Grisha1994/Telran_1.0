import React from 'react'
import ProductsItem from '../ProductsItem'
import { useSelector } from 'react-redux'
import s from './style.module.css'
import Loading from '../UI/Loading'
import Error from '../UI/Error'

export default function ProductList({category}) {

    const {status, list} = useSelector(({products}) => products);
    const filteredProducts = category
    ? list.filter(el => el.category === category)
    : list;

    
  
  return (
    <div className={s.products_item}>
        {
          status === 'Loading'
          ?<Loading/>
          :status === 'error'
            ? <Error/>
            :filteredProducts
            .filter(({show}) => Object.values(show).every(el => el))
            .map(el => <ProductsItem key={el.id} {...el}/>)
        }
    </div>
  )
}
