import React from 'react'
import s from '../UserItem/User.module.css'

export default function UserItem({id, firstName, lastName, maidenName, age}) {
  return (
    <div className={s.item}>
        <p>Name: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>maidenName: {maidenName}</p>
        <p>age: {age}</p>
    </div>
  )
}
