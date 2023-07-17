import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';
import ProductCalculation from '../ProductCalculation';


export default function ProductsList() {

    const products = useSelector(({products}) => products);

  return (
    <div>
        {
            products.map(el => <ProductItem key={el.id} {...el} />)
        }
        <ProductCalculation/>
    </div>
  )
}
