import React, { useContext } from 'react'
import s from './stylePost.module.css'
import { Context } from '../../contex'
import CommentsContainer from './CommentsContainer/CommentsContainer';
import AddComment from '../AddComment/AddComment';
import { useState } from 'react'


export default function Post({id, title, description, like, comments}) {

    const {switch_like, delete_post} = useContext(Context);

    const like_text = like === false ? 'Liked' : 'like ?'

    const like_style = {
        backgroundColor: like ? 'blue' : 'azure',
        color: like ? 'white' : 'black'
      }

      const [cardsComments, setCardsComments] = useState(comments);

      const addCommentCard = (comment) => {
        const newStateComment = [...cardsComments, comment];
        setCardsComments(newStateComment)
        console.log(newStateComment);
      }
       
      
      const delete_comment = id => setCardsComments(cardsComments.filter(el => el.id !== id));
      
  return (
    <div className={s.item}>
        <p className={s.btn} onClick={() => delete_post(id)}>X</p>
        <p>{title}</p>
        <p>{description}</p>
        <button className={s.itemPost} style={like_style} onClick={() => switch_like(id)}>{like_text}</button>
   
        <Context.Provider value={{cardsComments, delete_comment}}>
        <CommentsContainer comments={comments} />
        <AddComment addCommentCard={addCommentCard}/>
        </Context.Provider>
    </div>
  )
}
