import React from 'react'
import s from './index.module.css'

export default function Nav({menuActive, setMenuActive, colorRed, colorWith}) {

    const nav_classes = [s.nav_menu_list, menuActive ? s.active : ''].join(' ');
    const color = colorRed ? s.logo : '';
    // => 1) true - 's.nav_menu_list s.active' 
    // => 2) false - 


  return (
    <div className={s.nav_menu}>
      <p className={color} 
      onClick={() => colorWith(!colorRed)}>LOGO</p>
      <ul className={nav_classes}>
        <li>Main</li>
        <li>About</li>
        <li>Prices</li>
        <li>Account</li>
      </ul>
      <p onClick={() => setMenuActive(!menuActive)}>=</p>
    </div>
  )
}

