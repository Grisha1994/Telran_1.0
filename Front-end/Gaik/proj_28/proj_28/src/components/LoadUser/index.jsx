import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSingleUsers } from '../../store/asyncActions/userAction';


export default function AddForm() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        const id = +event.target.id.value;
        console.log(id);
        dispatch(fetchSingleUsers(id))
        event.target.reset()
    }
  return (
    <form onSubmit={onSubmit}>
        <input type='number' placeholder='id' name='id'/>
        <button>Добавить</button>
    </form>
  )
}
