import React from 'react';
import { useDispatch } from 'react-redux';
import { add_ProductAction } from '../../store/reducer/productsReducer';


export default function AddProductForm() {

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        const { title, price } = event.target;

        const addProduct = {
            title: title.value,
            price: price.value
        }
        dispatch(add_ProductAction(addProduct));
        event.target.reset();
    }
    
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="title" placeholder='Title' name='title'/>
            <input type="title" placeholder='Price' name='price'/>
            <button type='submit' >Добавить</button>
        </form>
    </div>
  )
}
