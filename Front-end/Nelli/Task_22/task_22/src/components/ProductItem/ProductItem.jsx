import React from 'react'
import s from '../ProductItem/ProductItem.module.css'


export default function ProductItem({id, title, description, price, discountPercentage}) {
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{discountPercentage}</p>
    </div>
  )
}
