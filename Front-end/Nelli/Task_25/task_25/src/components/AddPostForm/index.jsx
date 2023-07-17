import React from 'react'
import s from '../AddPostForm/style.module.css'
import { useDispatch } from 'react-redux';


export default function AddPost() {

    const onSubmit = (event) =>{
        event.preventDefault();

        const {title, description} = event.target;

        const newPost = {           
            title: title.value, 
            description: description.value,
            like: false,
            comments:[],
            
        }
        dispatch({type: "ADD_POST", payload: newPost});
        event.target.reset();
    }
    
    const dispatch = useDispatch();
    
  return (
    <div>
        <form className={s.formPost} onSubmit={onSubmit}>
            <input type="title" placeholder='Ваш заголовок' name='title'/>
            <input type="title" placeholder='Ваш текст' name='description'/>
            <button type='submit' >добавить</button>
        </form>
    </div>
  )
}

