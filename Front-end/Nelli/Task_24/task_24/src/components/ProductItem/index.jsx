import React from 'react'
import s from '../ProductItem/style.module.css'

export default function ProductItem({title, price}) {
  return (
    <div className={s.product_item}>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
    </div>
  )
}
