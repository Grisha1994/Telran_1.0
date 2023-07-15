import React from 'react'

export default function ProductItem({id, title, description, price}) {
  return (
    <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

