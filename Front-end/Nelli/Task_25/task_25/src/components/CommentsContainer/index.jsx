import React from 'react'
import Comment from '../Comment'
import AddComment from '../AddComment'


export default function CommentsContainer({comments, post_id}) {
  return (
    <div>
      <div>
        {
          comments.map(el => <Comment key={el.id} {...el} post_id={post_id}/>)
        }
      </div>
      <AddComment  post_id={post_id}/>
    </div>
  )
}
