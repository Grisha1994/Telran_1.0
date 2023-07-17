import React from 'react'
import s from '../UserItem/style.module.css'
import { useDispatch } from 'react-redux';
import { minusAction, plusAction, removeAction, zeroAction } from '../../store/reducer/userReducer';

export default function UserItem({id, name, lastname, age, gender}) {

   const dispatch = useDispatch();

    const background = gender === 'm' ? '#2980b9' : '#e84393';

  return (
    <div className={s.item} style={{background}}>
        <p>{name} {lastname}</p>
        <div className={s.age_block}>
            <button onClick={() => dispatch(minusAction(id))}>-</button>
            <p>{age}</p>
            <button onClick={() => dispatch(plusAction(id))}>+</button>
            <button onClick={() => dispatch(zeroAction(id))}>0</button>
        </div>
        
        <button onClick={() => dispatch(removeAction(id))}>Delete</button>
    </div>
  )
}


