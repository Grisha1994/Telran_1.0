import React from 'react'
import { useDispatch } from 'react-redux';
import { plusAction } from '../../../store/reducer/counterReducer';

export default function AddForm() {

    const dispatch = useDispatch();

    const onSubmit = event => {
    event.preventDefault();
    const number = +event.target.number.value
    dispatch(plusAction(number));
    
    event.target.reset();
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name='number' placeholder='Число'/>
            <button>Добавить</button>
        </form>
    </div>
  )
}
