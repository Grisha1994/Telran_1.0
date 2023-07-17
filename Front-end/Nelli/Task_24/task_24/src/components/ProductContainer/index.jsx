import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';

export default function ProductContainer() {

  const product_state = useSelector(state => state.products);

  console.log(product_state);

  return (
    <div>
      {
        product_state.map(el => <ProductItem key={el.id} {...el}/>)
      }
    </div>
  )
}
