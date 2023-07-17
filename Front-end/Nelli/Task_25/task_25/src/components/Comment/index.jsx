import React from 'react'
import s from '../Comment/style.module.css'
import { useDispatch } from 'react-redux';

export default function Comment({id, comment, post_id}) {

    const dispatch = useDispatch();

    return (
      <div className={s.comment_item}>
          <p>{comment}</p>
          <p className={s.btn_comment} 
          onClick={() => dispatch({type: "DELETE_COMMENT",
          payload: {
            comment_id: id,
            post_id
            }
            })}>X</p>
      </div>
    )
  }
