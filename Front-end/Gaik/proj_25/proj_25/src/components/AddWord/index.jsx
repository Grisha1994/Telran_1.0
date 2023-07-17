import React from 'react'
import { useDispatch } from 'react-redux';


export default function AddWord() {

    const dispatch = useDispatch();

    const onSubmit = event => {
        event.preventDefault();

        const word = event.target.word.value;
        dispatch({type: 'ADD', payload: word})
        console.log(word);
        event.target.reset();
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name='word' placeholder='Новое слово'/>
        <button>Добавить</button>
    </form>
  )
}
