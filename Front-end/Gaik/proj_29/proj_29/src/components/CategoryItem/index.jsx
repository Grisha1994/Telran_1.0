import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({title}) {
  return (
    <Link to={`/products/${title}`} className={s.item}>
        <p>{title}</p>
    </Link>
  )
}
