import Post from '../Post/Post'
import s from './stylePostContainer.module.css'
import React, { useContext } from 'react'
import { Context } from '../../contex'


export default function PostContainer() {

    const {cardsPosts} = useContext(Context);
    
  return (
    <div className={s.item_container}>
        {
        cardsPosts.map(el => <Post key={el.id} {...el}/>)
        }
        
    </div>
  )
}
