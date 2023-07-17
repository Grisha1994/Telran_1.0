import React from 'react'
import UserItem from '../UserItem/UserItem'
import { getUsers } from '../requests/users_req'
import { useState, useEffect } from 'react'
import s from '../UserContainer/UserContainer.module.css'

export default function UserContainer() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers(setUsers)
    }, []);

    console.log(users);

  return (
    <div className={s.item}>
        {
        users.map(el => <UserItem {...el} key={el.id}/>)
        }
    </div>
  )
}
