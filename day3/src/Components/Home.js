import './home.css'
import { useState } from 'react';
function Home() {
    var [show, setShow] = useState('block');
    var [name, setName] = useState('hide');

    function showP() {
        if (name == 'hide') {
            // override show ='none';
            setShow('none'); // display :'none'; 
            setName('show');
        }
        else {
            setShow('block');
            setName('hide');
        }
    }
    return (
        <div>
            <button onClick={showP}>{name}</button>
            <p style={{ display: show }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis inventore, quae blanditiis odit nostrum tenetur rem similique incidunt nobis accusamus nesciunt culpa dolorum praesentium numquam voluptates labore. Earum, voluptate itaque?</p>

        </div>
    );
}

export default Home;