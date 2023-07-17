import React from 'react'
import s from '../Post/style.module.css'
import { useDispatch } from 'react-redux'
import CommentsContainer from '../CommentsContainer';


export default function Post({id, title, description, like, comments}) {

    const dispatch = useDispatch();

    const like_text = like === false ? 'Like ?' : 'liked'
    const like_style = {
        backgroundColor: like ? 'blue' : 'azure',
        color: like ? 'white' : 'black'
      }

    

  return (
    <div className={s.item}>
        <p className={s.btn} onClick={() => dispatch({type: "DELETE_POST", payload: id})}>X</p>
        <p>{title}</p>
        <p>{description}</p>
        <button className={s.itemPost} style={like_style} onClick={() => dispatch({type: "CHANGE_LIKE", payload: id})}>{like_text}</button>
        <CommentsContainer comments={comments} post_id={id}/>
    </div>
  )
}
