import React, { useEffect, useState } from 'react'
import Product from '../Product';
import products_container from './style.module.css'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/asyncAction/productAction';

export default function ProductContainer() {

    const [product, setProducts] = useState([]);

    const { category } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(dispatch, category))
      }, [category, dispatch])

  return (
    <div className={products_container}>
        {
            product.map(el => <Product product={product}/>)
        }
    </div>
  )
}
