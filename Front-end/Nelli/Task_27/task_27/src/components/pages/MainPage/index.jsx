import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function MainPage() {
  return (
    <div className={s.links}>
        <Link to='/product_page'>To product page</Link>
        <br></br>
        <Link to='/card_page'>To card</Link>
    </div>
  )
}
