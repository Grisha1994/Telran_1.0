import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../../store/asyncActions/productListAction'
import s from './style.module.css'


export default function ProductList() {

    const productList = useSelector(store => store.productList).reverse().filter(el => el.show)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchProductList())
    },[])

    console.log(productList);

  return (
    <div className={s.product_wrapper}>
        {
        productList.map(el =>
        <div>
            <p>{el.title}</p>
            <p>id: {el.id}</p>
            <p>price: {el.price}</p>
        </div>
            )
            }
    </div>
  )
}

