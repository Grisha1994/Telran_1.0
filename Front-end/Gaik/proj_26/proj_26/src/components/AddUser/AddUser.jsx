import React from 'react'
import { useDispatch } from 'react-redux'
import s from '../AddUser/style.module.css'
import {addAction} from '../../store/reducer/userReducer'

export default function AddUser() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();
        const {name, lastname, age, gender} = event.target;

        const user = {
            name: name.value,
            lastname: lastname.value,
            age: +age.value,
            gender: gender.value
        }

        dispatch(addAction(user));
        

        console.log(user);
        event.target.reset();
    }
  return (
    <form className={s.form} onSubmit={onSubmit}>
       <input type="text" name='name' placeholder='Имя'/>
       <input type="text" name='lastname' placeholder='Фамилия'/>
       <input type="text" name='age' placeholder='Возраст'/>
       <select name='gender' defaultValue={0}>
            <option defaultValue={0}>Пол</option>
            <option value="f">женский</option>
            <option value="m">мужской</option>
       </select>
       <button>Добавить</button>
    </form>
  )
}
