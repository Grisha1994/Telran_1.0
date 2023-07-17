import React, { useState } from 'react'
import WordsList from '../WordsList/WordsList';
import AddWord from '../AddWord/AddWord';

export default function WordsContainer() {

    const [words, setWords] = useState(['слово 1', 'слово 2','слово 3']);
  return (
    <div> 
        <AddWord handler = {(word) => setWords([...words, word])}/>
        <WordsList words={words}/>
    </div>
  )
}
