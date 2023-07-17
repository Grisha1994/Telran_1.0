import ToDoItem from '../ToDoItem/ToDoItem';
import React, { useContext } from 'react'
import context from '../../context';
import s from '../ToDoList/styleToDoList.module.css'


export default function ToDoList() {

    const {todoList} = useContext(context);



  return (
    <div className={s.ToDoList}>
        {
        todoList.map(el => <ToDoItem {...el} key={el.id}/>)
        }
    </div>
  )
}
