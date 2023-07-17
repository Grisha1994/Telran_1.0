import React from 'react'
import { AddProductAction } from '../../store/reducer/productReducer';
import { useDispatch } from 'react-redux';

export default function AddProductForm() {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const {title, price} = event.target;
    const product = {
      id: Date.now(),
      title: title.value,
      price: price.value
    }
    dispatch(AddProductAction(product));
    event.target.reset();

  }
  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Price' name='price' />
      <button>Add product</button>
    </form>
  )
}
