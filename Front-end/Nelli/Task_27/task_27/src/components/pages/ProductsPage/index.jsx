import React from 'react'
import ProductsContainer from '../../ProductsContainer'
import AddProductForm from '../../AddProductForm'
import { Link } from 'react-router-dom'

export default function ProductPage() {
  return (
    <div>
        <AddProductForm/>
        <ProductsContainer/>
        <Link to='/card_page'>To card</Link>
        <br></br>
        <Link to='/'>Main page</Link>
    </div>
  )
}
