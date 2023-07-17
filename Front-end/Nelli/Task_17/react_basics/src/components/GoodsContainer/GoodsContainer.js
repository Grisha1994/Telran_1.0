import React from 'react'
import { goods } from '../data/Goods'
import Good from '../Good/Good'
import s from './GoodsContainer.module.css'

export default function GoodsContainer() {
  return (
    <div className={s.goodsContainer_item}>
        {
            goods.map(el => <Good {...el} key={el.id}/>)
        }
    </div>
  )
}
