import React, { useState, useEffect } from 'react';
import { getUsers } from '../../requests/users-req';
import User from '../User';
import s from './style.module.css'



export default function UsersContainer() {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers(setUsers)
    }, []);

    // console.log(users);
    // getUsers();

  return (
    <div className={s.users_container}>
        {
            users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
