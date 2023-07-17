import React, { useState } from 'react'

export default function Test() {
  const state = useState(0);
    // const count = state[0];
  // const setCount = state[1];
  const [count, setCount] = state;

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count -1)}>-</button>
        <button onClick={() => setCount(count +1)}>+</button>
        <button onClick={() => setCount(0)}>0</button>
    </div>
  )
}
