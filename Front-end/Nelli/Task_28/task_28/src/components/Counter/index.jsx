import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import s from './style.module.css'
import { decrementAction, incrementAction, removeAction } from '../../store/reducer/counterReducer';

export default function Counter({id}) {

    const dispatch = useDispatch();

    const counter_state = useSelector(state => state.counter)
  return (
    <div className={s.counter}>
        <p>{counter_state}</p>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
        <button onClick={() => dispatch(removeAction())}>0</button>
    </div>
  )
}
