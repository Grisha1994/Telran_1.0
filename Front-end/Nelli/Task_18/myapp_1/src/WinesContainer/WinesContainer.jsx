import React from 'react'
import Wineitem from '../Wineitem/Wineitem.jsx'
import s from "./WinesContainer.module.css"

export default function WinesContainer({cards, delete_card}) {
  return (
    <div className={s.wines_container}>
      {
        cards.map(el => <Wineitem {...el} key={el.id} delete_card={delete_card}/>)
      }
    </div>
  )
}
