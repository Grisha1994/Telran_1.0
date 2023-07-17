import React from 'react'
import { useDispatch } from 'react-redux';

export default function WordItem({id, title}) {

    const dispatch = useDispatch();

  return (
    <div>
        <p onDoubleClick={() => dispatch({type: 'REMOVE', payload: id})}>
            {title}
        </p>
    </div>
  )
}
