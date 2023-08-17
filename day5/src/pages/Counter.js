import React, { useContext, useState } from 'react';
import { counterContext } from '../config/CounterContext';
import { useDispatch } from 'react-redux'
import { upCount,downCount } from '../Redux/Slices/CountSlice';
function Counter() {
    var { C, setC } = useContext(counterContext);
    var dispatch = useDispatch();
    function up() {
        // call action
        dispatch(upCount());
    }
    function down() {
        // call action 
        dispatch(downCount(1));
    }
  return (
    <>
      <div>
        <button className="btn btn-danger m-3" onClick={up}>
          + by redux 
        </button>
        <button  className="btn btn-danger"onClick={down}>
          - by redux
        </button>
      </div>
      <div>
        <button onClick={() => setC(C + 1)} className="btn btn-danger m-3">
          + by context
        </button>
        <button onClick={() => setC(C - 1)} className="btn btn-danger">
          - by context
        </button>
      </div>

    </>
  );
}

export default Counter;
