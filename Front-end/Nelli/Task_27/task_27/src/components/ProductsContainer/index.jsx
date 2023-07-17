import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product';

export default function ProductsContainer() {

    const products_state = useSelector(state => state.products);

    console.log(products_state);

  return (
    <div>
        {
            products_state.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}
