import React, { useState } from 'react'

function Profile() {
    var [fullname, setName] = useState("saad mo"); // statefull component
    console.log(fullname)
    function showAlert() {
        fullname = prompt()
        console.log(fullname);
        setName(fullname)
    }
    return (
        <div>
            <h1> full name</h1>
            <h2>{fullname}</h2>
            <button onClick={showAlert} >Edit data</button>
        </div>
    )
}

export default Profile