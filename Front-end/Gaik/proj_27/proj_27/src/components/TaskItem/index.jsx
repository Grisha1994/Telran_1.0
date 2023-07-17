import React from 'react'
import s from './style.module.css'


export default function TaskItem({id, casename, price, done, employee}) {

    
  return (
    <div className={s.item}>
        <p>{casename}</p>
        <p>{price}</p>
        <p>{employee}</p>
        <input type="checkbox" checked={!!done} onChange={()=>(id)}/>
    </div>
  )
}
