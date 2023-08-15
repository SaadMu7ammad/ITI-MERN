import React, { useState } from 'react'

function Counter() {
    // data variant when user make interactive use [useState]
    var [counter, setCounter] = useState(0);
    function plus() {
        // counter++;
        // console.log(counter)
        setCounter(++counter);
        //over ride value ,call v tree dom to make rerender

    }
    function min() {
        // counter--;
        // console.log(counter)
        setCounter(--counter);
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plus}>+</button>
            <button onClick={min}>-</button>
        </div>
    )
}

export default Counter