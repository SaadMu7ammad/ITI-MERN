import React, { useState } from 'react'

function Table() {
    var [users, setUsers] = useState([{
        name: 'ali',
        age: 22,
        address: 'aswan'
    }, {
        name: 'sayed',
        age: 22,
        address: 'alex'
    }, {
        name: 'negm',
        age: 22,
        address: 'cairo'
    }, {
        name: 'ahmed',
        age: 22,
        address: 'assuit'
    }, {
        name: 'ali',
        age: 22,
        address: 'aswan'
    }])

    function deleteUser(index) {
        // logic delete => name id address index 
        // console.log(users[index]);
        users.splice(index, 1); // 
        setUsers([...users]); // 
    }
    return (

        <table border={3}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>age</th>
                    <th>address</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, index) => {

                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                        <td> <button onClick={() => deleteUser(index)}>delete</button></td>
                    </tr>
                })}

            </tbody>
        </table>

    )
}

export default Table