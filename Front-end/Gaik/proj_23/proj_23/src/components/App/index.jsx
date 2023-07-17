import ToDoList from "../ToDoList/ToDoList";
import React, { useEffect, useState } from 'react'
import context  from '../../context';
import PostList from "../PostList/PostList";

function App() {

  // const List = [
  //   {id: 1, title: 'поесть', done: 1},
  //   {id: 2, title: 'позаниматься', done: 1},
  //   {id: 3, title: 'погулять', done: 0},
  //   {id: 4, title: 'встретиться с друзьями', done: 1},
  //   {id: 5, title: 'поспать', done: 0}
  // ];
  
  const [todoList, setTodoList] = useState([]);

  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(resp => resp.json())
  //   .then(data => setTodoList(data.map(({id, title, complited}) =>({id, title, done: completed}))))
  // }, []);

//   console.log(todoList);

//   useEffect(() => {
//   (async () => {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await resp.json();
//     const clearData = data.map(({id, title, completed}) => ({id, title, done: completed}));
//     setTodoList(clearData);
//   })();   
// }, []);



  
  const remove = (delId) => setTodoList(todoList.filter(({id}) => id !== delId));
  
  const StatusDone = (id) => {
    const newState = todoList.map(el => {
        if(el.id === id){
        el.done = el.done === 1 ? 0 : 1;
        }
        return el
    })
    setTodoList(newState);
  }

  return (
    <div>
      <context.Provider value={{todoList, StatusDone, remove}}>
        <ToDoList/>
        <PostList/>
      </context.Provider>
    </div>
  );
}

export default App;
