import React from 'react'
import s from '../AddPost/styleAddPost.madule.css'


export default function AddPost({addPostCard}) {

    const onSubmit = (event) =>{
        event.preventDefault();

        const {title, description} = event.target;

        const newPost = {           
            title: title.value, 
            description: description.value,
            like: false,
            comments:[],
            id: Date.now()
        }
        addPostCard(newPost);
        event.target.reset();
    }
    
  return (
    <div>
        <form className={s.formPost} onSubmit={onSubmit}>
            <input type="title" placeholder='Ваш заголовок' name='title'/>
            <input type="title" placeholder='Ваш текст' name='description'/>
            <button type='submit'>добавить</button>
        </form>
    </div>
  )
}
