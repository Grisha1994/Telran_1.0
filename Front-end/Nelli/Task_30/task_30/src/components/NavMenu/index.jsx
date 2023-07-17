import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to='/'>Configurations</Link>
        <Link to='/teams_page'>Teams</Link>
    </div>
  )
}
