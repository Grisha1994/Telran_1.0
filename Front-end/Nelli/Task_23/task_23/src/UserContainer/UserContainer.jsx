import React, { useContext } from 'react'
import User from '../User/User'
import context from '../context'
import s from '../UserContainer/styleUserContainer.module.css'

export default function UserContainer() {

    const {users} = useContext(context);

  return (
    <div className={s.users_container}>
        {
            users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
