import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function NavMenu() {

    const classFunction = ({isActive}) => isActive ? s.active : '';
  return (
    <div className={s.nav}>
        <NavLink className={classFunction} to='/'>Category</NavLink>
        <NavLink className={classFunction} to='/products'>Products</NavLink>
        <NavLink className={classFunction} to='/basket'>Basket</NavLink>
    </div>
  )
}
