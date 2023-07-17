import React from 'react'

export default function User({name, lastName, age}) {

  return (
    <div>
        <p>{name}</p>
        <p>{lastName}</p>
        <p>{age}</p>
    </div>
  )
}
