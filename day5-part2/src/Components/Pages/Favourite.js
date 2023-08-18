import React, { useEffect } from 'react'
// import {  addToFav } from '../ ../../Redux/Slices/AddFavSlice';
import {  addToFav } from '../../Redux/Slices/AddFavSlice';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function Favourite() {
  var CartShow=useSelector((state)=>state.AddFavSlice.cart)
  return (
    <>
    {/* <Nav></Nav> */}
    <div className="FilmsContainer">
      {CartShow
        ? CartShow.map((item, index) => <Card key={index} data={[item,true]}/>)
        : null}
    </div>
  </>
  )
}

export default Favourite