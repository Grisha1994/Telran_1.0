import React from "react"
import s from "./Wineitem.module.css"


export default function Wineitem({ winery, wine, image, id, delete_card}) {
    return (
      <div className={s.wine_item} onClick={() => delete_card(id)}>
        <img src={image} alt={wine} />
        <p>Titile: { wine }</p>
        <p>Winery: { winery }</p>
      </div>
    )
  }
  