import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux'
import { upCount } from '../../Redux/Slices/AddFavSlice';
function Card(props) {

  var dispatch=useDispatch()
  function addFavourite() {
    dispatch(upCount())
  }
  return (
    <div class="cellphone-container">
      <div class="movie">
        <div class="poster">
          
            <img  src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}  alt="not found"/>

        </div>
        <div class="info">
          <h1>{props.data.title}</h1>
        </div>
      </div>
      <button onClick={addFavourite}>add to favourite</button>
    </div>
  );
}

export default Card;
