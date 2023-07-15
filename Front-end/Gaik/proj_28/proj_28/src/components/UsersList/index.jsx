import React from 'react'
import UserItem from '../UserItem'
import { useSelector } from 'react-redux'

export default function UsersList() {

    const users = useSelector(({users}) => users)
    
  return (
    <div>
        {
            users.map(el => <UserItem key={el.id} {...el}/>)
        }
    </div>
  )
}
