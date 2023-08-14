import React, { useState } from 'react';
import './Flip.css';
function Flip() {
  const t =
    'https://media.istockphoto.com/id/476098857/photo/1-cent-coin-isolated-on-white.jpg?s=612x612&w=is&k=20&c=iF4KaNAgsAm41_vpyK2uRc08NZJBv_FoGfjC2EsV2OU=';
  const h =
    'https://media.istockphoto.com/id/476098227/photo/1-cent-coin-isolated-on-white.jpg?s=612x612&w=is&k=20&c=mwf0njray0eD0sum8NrrP7Lf_hM43Mrg-v9DwyZ_MDc=';
  //   var val = t;
  var [val, set] = useState(t);
  var [c, inc] = useState(0);
  var [heads, setHeads] = useState(0);
  var [status, hidePic] = useState('block');
  var [tails, setTails] = useState(1);

  function toggle() {
    if (c === 0) {
      hidePic('block');
    }
    if (c === 10) {
      console.log('object');
      set('out of 0 flips there have been 0 heads and 0 tails ');
      hidePic('none');
      setTails(0);
      setHeads(0);
      inc(0);
      console.log(c);
    } else if (val === t) {
      set(h);
      inc(++c);
      setHeads(++heads);
    } else {
      set(t);
      inc(++c);
      setTails(++tails);
    }
  }

  return (
    <div className="coin">
      <div className="image">
        <img src={val} style={{ display: status }}></img>
      </div>
      <button onClick={toggle}>flip</button>
      <p>
        out of {c} flips there have been {heads} heads and {tails} tails{' '}
      </p>
    </div>
  );
}

export default Flip;
