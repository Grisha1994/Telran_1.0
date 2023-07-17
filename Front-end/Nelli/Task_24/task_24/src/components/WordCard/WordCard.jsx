import React from 'react'
import s from '../WordCard/style.module.css'
import { useDispatch } from 'react-redux';

export default function WordCard({id, rus, eng, lang}) {

    const dispatch = useDispatch();

    const card_text = lang === 'rus' ? eng : rus;
  return (
    <div className={s.word_card} onDoubleClick={() => dispatch({type: 'DELETE_CARD', payload: id})} onClick={() => dispatch({type: 'CHANGE_LANG', payload: id})}>
        {card_text}
    </div>
  )
}
