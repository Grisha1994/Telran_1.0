import Comment from '../Comment/Comment'
import React, { useContext } from 'react'
import { Context } from '../../../contex'


export default function CommentsContainer() {

  const {cardsComments} = useContext(Context);
  
  return (
    <div>
        {
            cardsComments.map(el => <Comment key={el.id} {...el}/>)
        }
    </div>
  )
}
