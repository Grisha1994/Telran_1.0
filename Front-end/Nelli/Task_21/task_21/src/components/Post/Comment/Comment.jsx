import React from 'react'
import s from '../Comment/styleComment.module.css'
import { useContext } from 'react'
import { Context } from '../../../contex'

export default function Comment({id, comment}) {

  const {delete_comment} = useContext(Context);

  return (
    <div className={s.comment_item}>
        <p>{comment}</p>
        <p className={s.btn_comment} onClick={() => delete_comment(id)}>X</p>
    </div>
  )
}
