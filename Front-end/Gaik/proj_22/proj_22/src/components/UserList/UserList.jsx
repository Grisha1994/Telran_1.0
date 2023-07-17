import React from 'react'
import UserItem from '../UserItem/UserItem'
import { useState } from 'react'

export default function UserList() {

    const defaultUsers = [
        {id: 1, name: 'Grisha', age: 29, gender: "M"},
        {id: 2, name: 'Vika', age: 24, gender: "W"},
        {id: 3, name: 'Liza', age: 28, gender: "W"},
        {id: 4, name: 'Vova', age: 50, gender: "M"},
        {id: 5, name: 'Misha', age: 30, gender: "M"}
      ];

      const [usersList, setUsersList] = useState(defaultUsers);
     
      const deleteUser = (id) => {
      const newUsers = usersList.filter((el) => el.id !== id);
      setUsersList(newUsers);
      }

  return (
    <div>
          {
          usersList.length === 0 ? <p>пользователей нет</p> : usersList.map(el => <UserItem {...el} key={el.id} {...{deleteUser}}/>)
          }
    </div>
  )
}
