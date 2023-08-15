import './style.css';
import React, { useState, useRef } from 'react';

function Todo() {
  let inputRef = useRef(null); // Create a ref for the input element
  var [input, setInput] = useState('');
  var [todo, setTodo] = useState([]);
  var [editbtn, editBtn] = useState('Add');
  var [val, valInput] = useState(0);
  var [idx, EditIndx] = useState(0);

  function addInput(e) {
    setInput(e.target.value);
  }
  function deleteMe(indx) {
    todo.splice(indx, 1);
    setTodo([...todo]);
  }
  function editMe(indx) {
    console.log(indx);
    editBtn('Edit');
    EditIndx(indx);
    inputRef.current.focus();
    console.log(input);
  }
  function add() {
    if (editbtn === 'Edit') {
      console.log('edit');
      console.log(input);
      console.log(val);
      todo[idx].title = input;
      setTodo([...todo]);
      editBtn('Add');
    } else {
      val = input;
      valInput(val);
      setTodo([...todo, { title: input, done: 'unchecked' }]);
    }
  }
  function makeDone(index) {
    if (todo[index].done === 'checked') {
      todo[index].done = 'unchecked';
    } else {
      todo[index].done = 'checked';
    }
    setTodo([...todo]); //rerender
  }
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: 5 }}>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          ref={inputRef}
          onChange={addInput}
          placeholder="Title..."
        />
        <span onClick={add} class="addBtn">
          {editbtn}
        </span>
      </div>
      <ul id="myUL">
        {todo.map((item, index) => {
          return (
            <div className="list" key={index}>
              <li
                className={item.done}
                key={index}
                onClick={() => makeDone(index)}
              >
                {item.title}{' '}
              </li>
              <button
                className="del"
                onClick={() => {
                  deleteMe(index);
                }}
              >
                X
              </button>
              <button
                className="edit"
                onClick={(e) => {
                  editMe(index, e);
                }}
              >
                edit
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
