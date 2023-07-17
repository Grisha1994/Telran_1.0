import React from 'react'

export default function AddWord({handler}) {
const onClick = () => {
    const word = prompt('Укажите слово');
    handler(word);
}
  return (
    <button onClick={onClick}>Добавить слово</button>
  )
}
