import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

export default function ProductList() {

    const products = useSelector(({products}) => products)

  return (
    <div>
        {
            products.map(el => <ProductItem key={el.id} {...el} />)
        }
    </div>
  )
}
