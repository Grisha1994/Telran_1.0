import React from 'react'
import PostItem from '../PostItem/PostItem';
import { useEffect, useState } from 'react';

export default function PostList() {


    const [todoPost, setTodoPost] = useState([]);

    useEffect(() => {
        (async () => {
          const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await resp.json();
          setTodoPost(data);
        })();   
      }, []);

  return (
    <div>
        {
            todoPost.map(el => <PostItem {...el} key={el.id}/>)
        }
    </div>
  )
}
