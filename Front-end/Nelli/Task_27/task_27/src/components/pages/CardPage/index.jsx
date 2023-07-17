import React from 'react'
import CardContainer from '../../../CardContainer'
import { Link } from 'react-router-dom'

export default function CardPage() {
  return (
    <div>
        <CardContainer/>
        <Link to='/product_page'>To product page</Link>
        <br></br>
        <Link to='/'>Main page</Link>
    </div>
  )
}
