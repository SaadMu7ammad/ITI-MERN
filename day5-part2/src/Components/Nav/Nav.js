import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

function Navigation() {
var countFavourite=useSelector((state)=>state.AddFavSlice.AddedFav)
// var CartShow=useSelector((state)=>state.AddFavSlice.cart)
//     function clicked() {
//       console.log('clicked');
//       console.log(CartShow);

// }
  return (
    <nav>
      <ul>
        <NavLink to='Home'>
          <i className={`fa fa-home active`} ></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-search active`}></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-play-circle-o active`}></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-share active`}></i>
        </NavLink>
        <NavLink to='Favourite'>
          <i className={`fa fa-heart active`} style={{color:"white"}}>{countFavourite} </i>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
