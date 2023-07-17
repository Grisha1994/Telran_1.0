import React from 'react'
import TaskItem from '../TaskItem'

export default function EmployeeTasksList({tasks}) {
  return (
    <div>
        {
            tasks.map(el => <TaskItem key={el.id} {...el}/>)
        }
    </div>
  )
}
