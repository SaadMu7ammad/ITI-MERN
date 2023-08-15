import React, { useState } from 'react'

function Login() {
    var [user, setUser] = useState({});
    var [error, setError] = useState({});
    // state object 
    // var [obj, setObj] = useState({ name: "ahmed", age: 22 });
    // function changeName() {
    //     // obj.name = "ali"; // override
    //     // obj.address = "aswan"; // add new prop
    //     // setObj({ ...obj });
    //     //   {name:'ali' ,age:22 ,address:'alex' }
    //     setObj({ ...obj, name: 'ali', address: 'alex' });
    //     // override 
    // }
    function getData(event) {
        console.log(event.target.name);
        if (event.target.name == "user") {
            if (event.target.value.length <= 3) {
                setError({ ...error, name: "length must be greater than 3 chars" })
            }
            else {
                setUser({ ...user, name: event.target.value })
                setError({ ...error, name: "" })
            }

        }
        else {
            if (event.target.value.length <= 6) {
                setError({ ...error, job: "length must be greater than 6 chars" })
            }
            else {
                setUser({ ...user, job: event.target.value })
                setError({ ...error, job: "" })
            }

        }

    }
    return (
        <>
            {/* <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.address}</h1>
            <button onClick={changeName}>change</button> */}

            <input type="text" onChange={getData} name="user" />
            <br />
            <small style={{ color: 'red' }}>{error.name}</small>
            <br />
            <input type="text" onChange={getData} name='job' />
            <small style={{ color: 'red' }}>{error.job}</small>
            <br />
            <button>save</button>
            <h2>{user.name}</h2>
            <h2>{user.job}</h2>
        </>
    )
}

export default Login