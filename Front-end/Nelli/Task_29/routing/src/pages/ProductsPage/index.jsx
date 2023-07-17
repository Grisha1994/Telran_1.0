import React, { useEffect, useState } from 'react'
import { getCategorys } from '../../requests/products_req'
import CategoryItem from '../../components/CategoryItem';


export default function ProductPage() {

const [categories, setCategories] = useState([]);

useEffect(() => {
  getCategorys(setCategories)
})
  return (
    <div>
      {
        categories.map((el, i) => <CategoryItem key={i} category={el}/>)
      }
    </div>
  )
}
