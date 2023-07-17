import React, { useContext } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import context from '../../context'

export default function ToDoList() {

    const {list, status} = useContext(context);

  return (
    <div>
        {
        list.map(el => <ToDoItem key={el.id} {...el} {...{status}}/>)
        }
    </div>
  )
}
