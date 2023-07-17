import React, { useState } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

export default function ToDoContainer() {
    const defaultTodoList = [
        {id: 1, title: 'поесть', status: 1, priority: 0},
        {id: 2, title: 'позаниматься', status: 0, priority: 0},
        {id: 3, title: 'погулять', status: 1, priority: 1},
        {id: 4, title: 'встретиться с друзьями', status: 0, priority: 1},
        {id: 5, title: 'поспать', status: 1, priority: 0}
      ];
    
      const [todoList, setTodoList] = useState(defaultTodoList);
    // написать функцию, которая получает id задачи
    // и заменяет status на обратный (0 -> 1, 1 -> 0)
    // в конце функции не забудьте вызвать setTodoList и передать туда новый state

    const changeStatus = (id) => {
        const newState = todoList.map(el => {
            if(el.id === id){
            el.status = el.status === 0 ? 1 : 0;
            }
            return el
        })
        setTodoList(newState);
    }

    

    const deleteStatus = (deleteId) => {
        const newState = todoList.filter(({id}) => id !== deleteId);
        setTodoList(newState);
    }

  return (
    <div>
        {
        // todoList.map(el => <ToDoItem {...el} key={el.id} deleteStatus={deleteStatus} changeStatus={changeStatus}/>)
        todoList.map(el => <ToDoItem {...el} key={el.id} {...{deleteStatus, changeStatus}}/>)
        }
    </div>
  )
}
