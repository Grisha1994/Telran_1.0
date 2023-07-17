import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/tasksReducer';

export default function TaskAdd() {

    const dispatch = useDispatch();
    
    const onSubmit = event => {
        event.preventDefault();
        
       const casename = event.target.casename.value;
       const price = +event.target.price.value;
       const employee = +event.target.employee.value;
        
        console.log({casename, price, employee});
        dispatch(addAction({casename, price, employee}));
        event.target.reset();
    }


    const employees = useSelector(({employees}) => employees)
  return (
    <div>
        <h2>Добавление дела</h2>
        <form onSubmit={onSubmit}>
            <input type="text" name='casename' placeholder='Наименование'/>
            <input type="text" name='price' placeholder='Цена'/>
            <select name='employee'>
                {
                    employees.map(({id, name, lastname}) => <option key={id} value={id}> {name} {lastname} </option>)
                }
            </select>
            <button>Добавить</button>
        </form>
    </div>
  )
}
