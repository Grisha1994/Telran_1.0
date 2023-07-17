import React, { useContext } from 'react'
import context from '../../context';

export default function AddTodo() {

    const {addTodo} = useContext(context);

    const onSubmit = (event) =>{
        event.preventDefault();

        const {title, done} = event.target;

        const newPost = {           
            title: title.value, 
            done: false,
            id: Date.now()
        }
        addTodo(newPost);
        event.target.reset();
    }
  return (
    <div>
           <form className={s.form} onSubmit={onSubmit}>
            <input type="title" placeholder='Ваш заголовок' name='title'/>
            <input type="checkbox" checked={done} name='done'/>
            <button type ="submit">Добавить</button>
        </form>
    </div>
  )
}
