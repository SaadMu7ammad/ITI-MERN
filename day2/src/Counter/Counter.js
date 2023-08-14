import React, { useState } from 'react'
import'./Counter.css'
function Counter() {
    let [c,change]=useState(0)
    function plus() {
        change(++c)
    }
    function minus() {
        change(--c)
    }
  return (
      <div className='t1'>
          <h1>{c}</h1>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <hr></hr>
    </div>
  )
}

export default Counter