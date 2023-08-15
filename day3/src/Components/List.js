import React, { useState } from 'react'

function List() {
    var [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // arr of product
    function addArr() {
        // logic add new value
        setNum([...num, 77]);
        // after override in memory make rerender component
    }
    function popArr() {
        num.pop(); // 
        setNum([...num]); // over ride 
    }
    function unshiftArr() {
        num.unshift(7772333); // 
        setNum([...num]);
    }
    function shiftArr() {
        num.shift(); // 
        setNum([...num]);
    }
    return (
        <>
            <ul>
                {num.map((item, index) => {

                    return <li key={index}>{item}</li>
                })}

            </ul>
            <button onClick={addArr}>add</button>
            <button onClick={popArr}>pop</button>
            <button onClick={unshiftArr}>unshift</button>
            <button onClick={shiftArr}>shift</button>
        </>
    )
}

export default List