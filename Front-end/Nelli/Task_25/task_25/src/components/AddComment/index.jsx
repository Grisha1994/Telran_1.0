import React from 'react'
import { useDispatch } from 'react-redux';

export default function AddComment({post_id}) {

  const dispatch = useDispatch();

    const onSubmit = (event) =>{
        event.preventDefault();

        const {comment} = event.target;

        const newComment = {       
            post_id,    
            comment: comment.value
        }
        dispatch({type: "ADD_COMMENT", payload: newComment});
        console.log(newComment);
        event.target.reset();
    }

    

  return (
    <div>
          <form onSubmit={onSubmit}>
            <input type="title" placeholder='Ваш комментарий' name='comment'/>
            <button type='submit'>добавить</button>
        </form>
    </div>
  )
}
