import React from 'react'
import s from '../User/styleUser.module.css'

export default function User({name, email, avatar}) {

    const email_mailto = `mailto:${email}`

  return (
    <div className={s.user_item}>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <a href={email_mailto}>{email}</a>
    </div>
  )
}
