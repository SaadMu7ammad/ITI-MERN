import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {
  let [x, val] = useState('none');
  function toggle() {
    if (x === 'none') {
      val('block');
    } else {
      val('none');
    }
  }
    return (
        <>
            <div className='hdr'>
            <h1>React Accordion Demo</h1>

            </div>
      <div className="rectangle">
          <div className='row'>
              <span>Section 1</span>
    
          <button onClick={toggle}>+</button>

          </div>
      
          <p style={{ display: x }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
        modi autem voluptates natus pariatur omnis. Exercitationem quisquam,
        earum beatae, dignissimos quibusdam, cumque nihil maiores quod totam
        voluptatem consectetur officia.
          </p>
          
            </div>
            <hr></hr>
            </>
  );
}

export default Accordion;
