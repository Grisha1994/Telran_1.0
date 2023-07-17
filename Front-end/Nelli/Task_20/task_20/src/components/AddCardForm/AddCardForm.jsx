import React, { useContext } from 'react'
import context from '../../context';

export default function AddCardForm() {

  const {addCard} = useContext(context);

    const onSubmit = (event) =>{
        event.preventDefault();

        const {rus, eng} = event.target;
        
        const newWord = {
            id: Date.now(),
            rus: rus.value, 
            eng: eng.value,
            lang: 'eng'
        }
        addCard(newWord);
        event.target.reset();
        
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="title" placeholder='Русское слово' name='rus'/>
        <input type="title" placeholder='Английское слово' name='eng'/>
        <button>добавить</button>
    </form>
  )
}
