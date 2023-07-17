import React, { useEffect, useState} from 'react'
import ToDoList from '../ToDoList/ToDoList';
import  context  from '../../context';

//  const initialState = [
//     {id: 1, title: 'Поесть', done: true},
//     {id: 2,title: 'Попить', done: false},
//     {id:3, title: 'Побегать', done: true},
//     {id:4, title: 'побегать', done: true},
//     {id:5, title: 'поспать', done: false},
//     {id:6, title: 'позаниматься', done: true},
//     {id:7, title: 'почитать', done: false}
//   ];



export default function ToDoContainer() {

const [list, setList] = useState(() => {
   return JSON.parse(localStorage.getItem('list'));
});

const status = (value) => {
    const target = list.find(({id}) => id === value);
        target.done = !target.done 
        setList([...list]);   
}

const btn_delete = (delId) => setList(list.filter(({id}) => id !== delId));


    useEffect(() => {
  (async () => {
    if(list.length !== 0) return
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await resp.json();
    const clearData = data.map(({id, title, completed}) => ({id, title, done: completed}));
    setList([...list,...clearData]);
  })();   
}, []);

useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
}, [list]);

const addTodo = (add_list) => {
    const newState = [...list, add_list];
    setList(newState)
  }

  return (
    <div>
        <context.Provider value={{list, status, btn_delete}}>
        <ToDoList/>
        </context.Provider>
    </div>
  )
}
