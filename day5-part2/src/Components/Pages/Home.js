import { useState, useEffect } from 'react';
import axios from 'axios';


import React from 'react';
import Card from '../Card/Card'
import Nav from '../Nav/Nav';


function Home() {
  useEffect(() => {
    getFilms();
    console.log('hello');
  }, []);
  let [films, setFilms] = useState([]);

  async function getFilms() {
    const temp = [];
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c'
    );
    console.log(res.data.results);
    res.data.results.forEach((item) => {
      if (
        item.title != 'No Hard Feelings' &&
        item.title != 'Barbie' &&
        item.title != 'Fast X' &&
        item.title !== 'Resident Evil: Death Island' &&
        item.title !== 'Heart of Stone' &&
        item.title !== 'Fear the Night' &&
        item.title !== 'No Hard Feelings'
      ) {
        temp.push({ title: item.title, poster_path: item.poster_path,id:item.id,quantityFav:0 });
      }
      // console.log(title);
    });
    // temp.forEach((item) => {
    //   console.log(item);
    // });
    setFilms([...temp]);
  }
  return (
    <>
      {/* <Nav></Nav> */}
      <div className="FilmsContainer">
        {films
          ? films.map((item, index) => <Card key={index} data={[item,false]} />)
          : null}
      </div>
    </>
  );
}

export default Home;
