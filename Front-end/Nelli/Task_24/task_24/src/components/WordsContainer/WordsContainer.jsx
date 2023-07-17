import React from 'react'
import { useSelector } from 'react-redux'
import WordCard from '../WordCard/WordCard';

export default function WordsContainer() {

    const words_data = useSelector(state => state.words);

    // console.log(words_data);
  return (
    <div>
        {
            words_data.map((el => <WordCard key={el.id} {...el}/>))
        }
    </div>
  )
}
