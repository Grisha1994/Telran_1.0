// 2. Создать два компонента Users и UsersContainer
// 3. Импортировать UsersContainer в App
// 4. В UsersContainer для каждого объекта из массива users создать компонент User (имя, возраст и должность)

import React from 'react'
import { users } from '../data/users'
import User from './User'

export default function UsersContainer() {
  return (
    <div>
        {
            //users.map(el => <User age={el.age} firstname={el.firstname} position={el.position} key={el.id}/>)
            users
            .filter(el => el.firstname[0].toUpperCase() === 'A')
            .map(el => <User {...el} key={el.id}/>)
        }
    </div>
  )
}
