import React from 'react'
import s from './style.module.css'

export default function Loading() {
  return (
    <div className={s.center}>
      <div className={s.pacman}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={s.eye}></div>
    </div>
  )
}
