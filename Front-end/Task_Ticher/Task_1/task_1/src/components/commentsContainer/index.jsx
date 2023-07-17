import React from 'react'
import { useSelector } from 'react-redux'
import CommentItem from '../commentItem';

export default function CommentsContainer() {

    const comments = useSelector(state => state.comments);

    

  return (
    <div>
        {
            comments.map(el => <CommentItem key={el.id} {...el}/>)
        }
    </div>
  )
}
