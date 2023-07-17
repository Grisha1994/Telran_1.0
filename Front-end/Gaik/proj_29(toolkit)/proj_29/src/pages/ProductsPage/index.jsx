import React from 'react'
import ProductList from '../../components/ProductsList'
import FilterContainer from '../../components/FilterContainer'
import { useParams } from 'react-router-dom'



export default function ProductsPage() {

  const {category} = useParams();



  return (
    <div>
      <h2>{category}</h2>
      <FilterContainer/>
      <ProductList category={category}/>
    </div>
  )
}
