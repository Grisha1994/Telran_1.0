import React, {useContext} from 'react'
import context from '../../context';
import s from '../Cards/style.module.css'

export default function Cards({id, rus, eng, lang}) {

  const {deleteCard, change_to_card} = useContext(context);

  const text = lang === 'eng' ? eng : rus;

  const styles = {
    backgroundColor: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)',
    color: lang === 'rus' ? 'white' : 'rgb(41, 128, 185)'
  }


  return (
    <div className={s.card} style={styles} onDoubleClick={() => deleteCard(id)} onClick={() => change_to_card(id)}>
      {text}
    </div>
  )
}
