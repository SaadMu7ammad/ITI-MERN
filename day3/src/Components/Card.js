
import React from 'react'
function Card(props) {
    console.log(props);

    var obj1 = {
        name: 'ali',
        age: 22,
        address: 'cairo'
    }
    var obj2 = {
        name: 'negm',
        age: 33,
        address: 'aswan'
    }

    // function sum(x, y) {
    //     console.log(x + y);
    // }

    // sum(10, 20);
    // sum(30, 40);
    return (
        <h1 style={{ color: props.color, padding: 20, fontSize: 20 }}>{props.name}</h1>
    )
}

export default Card