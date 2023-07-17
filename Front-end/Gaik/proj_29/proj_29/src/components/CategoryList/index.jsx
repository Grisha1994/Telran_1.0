import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem'
import s from './style.module.css'
import Loading from '../UI/Loading'

export default function CategoryList() {

    const {status, list}  = useSelector(({category}) => category)

  return (
    <div className={s.item_list}>
        {
          status === 'Loading'
          ?<Loading/>
          :status === 'error'
            ?<p>Произошла ошибка</p>
            :list.map(el => <CategoryItem  key={el} title={el} />)
        }
    </div>
  )
}
