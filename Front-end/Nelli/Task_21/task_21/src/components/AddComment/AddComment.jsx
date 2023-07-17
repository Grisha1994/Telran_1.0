import React from 'react'

export default function AddComment({addCommentCard}) {

    const onSubmit = (event) =>{
        event.preventDefault();

        const {comment} = event.target;

        const newComment = {           
            id: Date.now(),
            comment: comment.value
        }
        addCommentCard(newComment);
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
