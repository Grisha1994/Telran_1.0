import React from 'react'
import s from './style.module.css'

export default function CategoryItem({category}) {

const category_up = category[0].toUpperCase() + category.slice(1);
  return (
    <div className={s.category}>
      {category_up}
    </div>
  )
}
