import React, { useState } from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import { upCount, addToFav,downCount,removeFromFav } from '../../Redux/Slices/AddFavSlice';

function Card(props, favpage) {
  // let favCart = []
  // let [favCart,setFavCart]=useState([])
  var dispatch = useDispatch();
  // console.log(typeof props.data[1]);
  function addFavourite(info) {
    dispatch(upCount());
    dispatch(addToFav(info));
  }
  function removeFavourite(info) {
    dispatch(downCount());
    dispatch(removeFromFav(info));
  }
  return (
    <div className="cellphone-container">
      <div className="movie">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.data[0].poster_path}`}
            alt="not found"
          />
          {/* <p>{props.data.id }</p> */}
        </div>
        <div className="info">
          <h1>{props.data[0].title}</h1>
          {props.data[1] == true && (

            <>
            <div>{props.data[0].quantityFav}</div>
            </>
          )


          }
        </div>
      </div>
      {props.data[1] == false && (
        <button
          onClick={() => {
            addFavourite(props.data[0]);
          }}
        >
          add to favourite
        </button>
      )}
      {props.data[1] == true && (
        <>
          <button
            onClick={() => {
              addFavourite(props.data[0]);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              removeFavourite(props.data[0]);
            }}
          >
            -
          </button>
        </>
      )}
      {/* {
      
      if(favpage==false)
      <button onClick={() => { addFavourite(props.data[0]) }}>add to favourite</button>
      
      } */}
    </div>
  );
}

export default Card;
