import React from 'react'
import Post from '../Post'
import { useSelector } from 'react-redux';

export default function PostContainer() {

    const post_state = useSelector(state => state.posts);

  return (
    <div>
        {
            post_state.map(el => <Post key={el.id} {...el}/>)
        }
    </div>
  )
}
