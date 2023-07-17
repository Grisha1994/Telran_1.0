import React from 'react'
import s from './style.module.css'
import EmployeeTasksList from '../EmployeeTasksList'
import { useSelector } from 'react-redux'

export default function EmployeeItem({id, name, lastname}) {

    const tasks = useSelector(({tasks}) => tasks.filter(({employee}) => employee === id))

  return (
    <div className={s.item}>
        <p>{name} {lastname}</p>
        <EmployeeTasksList tasks={tasks}/>
    </div>
  )
}
