import React from 'react'
import { useDispatch } from 'react-redux'
import { FilterByCharAction, SortProductListAction } from '../../store/reducer/productListReducer';

export default function FilterProducts() {

    const dispatch = useDispatch();

    function inputHandler(event){
        dispatch(FilterByCharAction(event.target.value))
    }

    function selectHandler(event){
        dispatch(SortProductListAction(event.target.value));
    }

  return (
    <div>
        <input onChange={inputHandler} placeholder="search"/>
        <select onChange={selectHandler}>
            <option value={0}>default</option>
            <option value={1}>По возрастанию цены</option>
            <option value={2}>По убыванию цены</option>
        </select>
    </div>
  )
}
