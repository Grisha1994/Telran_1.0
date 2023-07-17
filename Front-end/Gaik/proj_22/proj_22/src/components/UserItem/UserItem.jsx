import React from 'react'
import s from './style.module.css'

export default function UserItem({id, name, age, gender, deleteUser}) {
  return (
    <div className={s.item}>
        <p>Имя: {name}</p>
        <p>Возраст: {age}</p>
        <button onClick={() => deleteUser(id)}>Удалить</button>
    </div>

  )
}
