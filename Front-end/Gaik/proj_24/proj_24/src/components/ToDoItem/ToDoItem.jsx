import React, { useContext } from 'react'
import s from '../ToDoItem/StyleToDoItem.module.css'
import context from '../../context'

export default function ToDoItem({id, title, done}) {

    const {status, btn_delete} = useContext(context);
  return (
    <div className={s.item}>
        <p>{title}</p>
        <input type="checkbox" checked={done} onChange={()=> {status(id)}}/>
        <button onClick={() => btn_delete(id)}>Удалить</button>
    </div>
  )
}
