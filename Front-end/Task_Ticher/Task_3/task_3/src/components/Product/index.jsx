import React from 'react'
import styles from './style.module.css'


export default function Product( { product } ) {

  return (
      <div className={styles.product_card}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button className={styles.add_to_cart_btn}>Add to cart</button>
      </div>
  )
}
