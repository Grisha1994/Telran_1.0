// 1. Создать карточки товаров (image, title, price, description) на основе массива goods. Отобразить карточки в браузере

import React from 'react'
import s from './Good.module.css'

export default function Good({image, title, price, description, rating}) {

  const good_Style = {
    backgroundColor: price > 100 ? 'lightgreen' : 'lightblue'
  }

  return (
    <div style={good_Style} className={s.good_item}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{rating.rate}</p>
    </div>
  )
  
}
