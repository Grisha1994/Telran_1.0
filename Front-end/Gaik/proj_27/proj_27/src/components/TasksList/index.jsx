import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem'


export default function TasksList() {

    const tasks = useSelector(({tasks}) => tasks)

  return (
    <div>
         {
            tasks.map(el => <TaskItem key={el.id} {...el}/>)
        }
    </div>
  )
}
