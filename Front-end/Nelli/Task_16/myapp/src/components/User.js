import React from 'react'

export default function User({firstname, age, position}) {
  return (
    <div>
    <p>{firstname}</p>
    <p>{age}</p>
    <p>{position}</p>
</div>
  )
}
