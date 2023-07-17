import React from 'react'
import { useSelector } from 'react-redux'
import s from '../UsersCalculation/style.module.css'

export default function UsersCalculation() {

    const users = useSelector(({users}) => users);

    const mCount = users.filter(({gender}) => gender === 'm').length;
    const fCount = users.filter(({gender}) => gender === 'f').length;
  
    const avgAge = Math.round(users.reduce((acc, {age}) => acc + age, 0) / users.length);

  return (
    <div className={s.container}>
        <p>Количество пользователей: {users.length}</p>
        <p>Количество мужчин: {mCount}</p>
        <p>Количество женсчин: {fCount}</p>
        <p>Средний возраст: {avgAge}</p>
    </div>
  )
}
