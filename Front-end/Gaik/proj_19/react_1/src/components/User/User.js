// 1) создать компонент User cо структурой
// <div>
//     <p>Имя</p>
//     <p>Фамилия</p>
//     <p>Должность</p>
// </div>

// 2) создать массив с объектами, которые хранят данные пользователей
// 3) сгенерировать для каждого элемента массива компонент User внутри App
// 4) добавить немного стилей

import React from 'react'
import s from './style.module.css'

export default function User({name, lastName, position}) {
  return (
    <div className={s.item}>
        <p>Name: {name}</p>
        <p>Lastname: {lastName}</p>
        <p>Position: {position}</p>
    </div>
  )
}

