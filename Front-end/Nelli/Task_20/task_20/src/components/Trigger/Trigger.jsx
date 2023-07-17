import React, { useContext } from 'react'
import s from '../Trigger/style.module.css'
import context from '../../context'

export default function Trigger() {

  const {change_to_eng, change_to_rus} =useContext(context);

  return (
    <div className={s.trigger}>
        <button onClick={change_to_rus}>RUS</button>
        <button onClick={change_to_eng}>ENG</button>
    </div>
  )
}
