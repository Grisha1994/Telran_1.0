import React from 'react'

export default function PostItem({id, title, body}) {
  return (
    <div>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}
