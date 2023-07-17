import React from 'react'
import UserItem from '../UserItem/UserItem'
import s from '../UsersList/style.module.css'
import { useSelector } from 'react-redux'

export default function UsersList() {
  

const users = useSelector(({users}) => users)
    

  return (
    <div className={s.container}>
        {
            users.map(el => <UserItem key={el.id} {...el}/>)
        }
    </div>
  )
}
