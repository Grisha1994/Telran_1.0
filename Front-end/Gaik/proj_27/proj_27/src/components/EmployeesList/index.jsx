import React from 'react'
import { useSelector } from 'react-redux'
import EmployeeItem from '../EmployeeItem'

export default function EmployeesList() {

    const employees = useSelector(({employees}) => employees)

  return (
    <div>
        {
            employees.map(el => <EmployeeItem key={el.id} {...el}/>)
        }
    </div>
  )
}
