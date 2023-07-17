import React from 'react'
import Product from './Product'
import { products } from './data/Products'

export default function ProductContainer() {


    

  return (
    <div>
        {
            // <Product title={'Aser'} price={3000}/>
            // <Product title={'Asus'} price={3050}/>
            // <Product title={'Apple'} price={3450}/> 
            products
            .filter(el => el.in_stock === true && el.price <= 100)
            .map(el => <Product {...el} key={el.id}/>)
        }
    </div>
  )
}
