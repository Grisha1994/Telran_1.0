import React from 'react'
import { useSelector } from 'react-redux'
import WordItem from '../WordItem';

export default function WordList() {

   const words = useSelector(state => state);
   

  return (
    <div>
        {
            words.map(word => <WordItem  key={word.id} {...word}/>)
        }
    </div>
  )
}
