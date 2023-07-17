import React from 'react'
import s from './style.module.css'

export default function AddProduct({addProduct}) {

    const onSubmit = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const price = +event.target.price.value;
        const count = +event.target.count.value;
        const newProduct = {
            id: Date.now(),
            title, price, count
        }
        addProduct(newProduct);
        console.log(newProduct);
        event.target.reset();
    }

  return (
    <form onSubmit={onSubmit} className={s.form}>
        <input type="text" placeholder='название' name='title'/>
        <input type="number" placeholder='цена' name='price'/>
        <input type="number" placeholder='количество' name='count'/>
        <button>добавить</button>
    </form>
  )
}
