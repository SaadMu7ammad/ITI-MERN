import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

function Navigation() {
var countFavourite=useSelector((state)=>state.AddFavSlice.AddedFav)
    function clicked() {
    console.log('clicked');
}
  return (
    <nav>
      <ul>
        <NavLink to='Home'>
          <i className={`fa fa-home active`} onClick={clicked}></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-search active`}onClick={clicked}></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-play-circle-o active`}onClick={clicked}></i>
        </NavLink>
        <NavLink>
          <i className={`fa fa-share active`}onClick={clicked}></i>
        </NavLink>
        <NavLink to='Favourite'>
          <i className={`fa fa-heart active`} onClick={clicked}style={{color:"white"}}>{countFavourite} </i>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
