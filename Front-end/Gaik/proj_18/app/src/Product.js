// создать компонент Product 
// который принимает в качестве пропсов title, price, count
// и выводит эти данные

import React from 'react'

export default function Product({title, price, count}) {

  return (
    <>
        <div>
            <p>{title}</p>
            <p>{price}</p>
            <p>{count}</p>
        </div>
        <p>product</p>
    </>
  )
}