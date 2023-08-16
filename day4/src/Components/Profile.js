import React, { useState } from 'react'

function Profile() {
    //state===data 
    // logic 
    // any component in react has data 
    var fullname2 = ''; // stateless function component
    var [fullname, setName] = useState("saad mo"); // statefull component
    console.log(fullname)
    function showAlert() {
        //fullname = "ahmed ali"; //in memory  
        setName('ahmed ali');
        // override name and talk v tree dom make rerendr to this component
        // rerender with new data.
        fullname = prompt()
        console.log(fullname);
        setName(fullname)
    }
    // rerender 
    // draw ui 
    return (
        <div>
            <h1> full name</h1>
            <h2>{fullname}</h2>
            <button onClick={showAlert} >Edit data</button>
        </div>
    )
}

export default Profile