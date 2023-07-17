import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { getProduct } from '../requests/requests_req'
import { useState, useEffect } from 'react'

export default function ProductContainer() {

    const [products, setTodoProduct] = useState([]);

    useEffect(() => {
        getProduct(setTodoProduct)
    }, []);

    console.log(products);

  return (
    <div>
         {
        products.map(el => <ProductItem {...el} key={el.id}/>)
        }
    </div>
  )
}
