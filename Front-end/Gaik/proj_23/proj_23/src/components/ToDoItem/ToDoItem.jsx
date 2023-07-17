import React from 'react'
import s from '../ToDoItem/styleToDoItem.module.css'
import { useContext } from 'react'
import context from '../../context';

export default function ToDoItem({id, title, done}) {

    const {StatusDone, remove} = useContext(context);
    
  return (
    <div className={s.ToDoItem}>
        <p>{title}</p>
        <input type="checkbox" checked={!!done} onChange={()=>StatusDone(id)}/>
        <button onClick={() => remove(id)}>delete</button>
    </div>
  )
}