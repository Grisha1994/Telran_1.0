import React, { useState } from 'react'
import Switch from '../Switch/Switch';

export default function SwitchContainer() {
    const tasks = [
        { id: 1, title: 'Task 1', completed: true, status: 'On'},
        { id: 2, title: 'Task 2', completed: false, status: 'OFF'},
        { id: 3, title: 'Task 3', completed: false, status: 'OFF'}
      ];

      const [List, setTodoList] = useState(tasks);

      const changeComplited = (id) => {
        const newState = List.map(el => {
            if(el.id === id){
            el.completed = el.completed === true ? false : true ;
            el.status = el.status === 'On' ? 'OFF' : 'On';
            }
            return el
        })
        setTodoList(newState);
    }
  return (
    <div>
            <div>
        {
        // todoList.map(el => <ToDoItem {...el} key={el.id} deleteStatus={deleteStatus} changeStatus={changeStatus}/>)
        List.map(el => <Switch {...el} key={el.id} {...{changeComplited}}/>)
        }
    </div>
    </div>
  )
}
