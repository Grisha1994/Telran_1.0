import React from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/employeesReducer';

export default function AddEmployee() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();

        const {name, lastname} = event.target;

        const employee = {
            name: name.value,
            lastname: lastname.value,
        }
        dispatch(addAction(employee));
        event.target.reset();
    }

  return (
    <div>
        <h2>Добавление сотрудника</h2>
        <form onSubmit={onSubmit}>
            <input type="text" name='name' placeholder='Имя'/>
            <input type="text" name='lastname' placeholder='Фамилия'/>
            <button>Добавить</button>
        </form>
    </div>
  )
}
