import React from 'react'

export default function UserItem({id, name, lastname}) {
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{lastname}</p>
    </div>
  )
}
