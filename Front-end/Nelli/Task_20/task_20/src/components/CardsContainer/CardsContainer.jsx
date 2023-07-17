import React from 'react'
import Cards from '../Cards/Cards'
import s from '../CardsContainer/style.module.css'
import { useContext } from 'react'
import context from '../../context'

export default function CardsContainer() {

  const {cards} = useContext(context);

  return (
    <div className={s.cards_container}> 
      {
      cards.map(el => <Cards key={el.id} {...el}/>)
      }
    </div>
  )
}
