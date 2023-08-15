// import React from 'react';
import React, { useState } from 'react';
import './Login.css';
function Login() {
  // var [user, setUser] = useState({});
  var [usr, show] = useState({});
  var [final, submit] = useState({});
  var [color1, changeColor1] = useState('');
  var [color2, changeColor2] = useState('');
  var [disp, Hide] = useState('none');

  function tracer(e) {
    if (e.target.name == 'u') {
      show({ ...usr, name: e.target.value });
      console.log('user');
      //  validEmail(e.target.value.length)
    } else if (e.target.name == 'p') {
      console.log('pass');
      show({ ...usr, pass: e.target.value });
    }
  }
  function BorderFocus(event) {
    if (event.target.name === 'u') {
      if (color1 === 'red') {
        changeColor1('');
      } else {
        changeColor1('red');
      }
    } else {
      if (color2 === 'red') {
        changeColor2('');
      } else {
        changeColor2('red');
      }
    }
  }
  function sub(event) {
    console.log(usr);
    // changeColor1('red')
    submit(usr);
    Hide('block');
  }
  return (
    <div class="login">
      <h1>Login</h1>
      <div className="form">
        <input
          style={{ border: `1px solid ${color1}` }}
          className="user"
          type="text"
          name="u"
          placeholder="Email"
          required="required"
          onChange={tracer}
          onFocus={BorderFocus}
          onBlur={BorderFocus}
        />
        <input
          style={{ border: `1px solid ${color2}` }}
          type="text"
          className="pass"
          name="p"
          placeholder="Password"
          required="required"
          onChange={tracer}
          onFocus={BorderFocus}
          onBlur={BorderFocus}
        />
        <button onClick={sub}>submit</button>
      </div>
      <div className="output" style={{ display: disp }}>
        <h2>u submitted successfully</h2>
        <i class="checkmark">✓</i>

        <h3>{final.name}</h3>
        <h3>{final.pass}</h3>
      </div>
    </div>
  );
}

export default Login;
