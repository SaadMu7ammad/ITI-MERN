import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import '../Components/style.css';
function Products() {
  let [products, setProducts] = useState([]);
  //   let [selectedFilter, setSelect] = useState('');
  let temp = [];
  function showFilterNorender(e) {
    console.log(e.target.value);
    showFilter(e.target.value);
  }
  async function showFilter(filterVal) {
    console.log(filterVal);
    // async function getData() {
    // http call axios  api
    var response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);

    response.data.products.map((item) => {
      if (item.category == filterVal) {
        temp.push(item);
      }
    });
    setProducts([...temp]);
    // rerender
    // }
  }
  return (
    <div>
      {useEffect(function () {
        // did mount
        showFilter('smartphones');
        console.log(products);
      }, [])}
      <h1>products section</h1>
      <select onChange={showFilterNorender}>
        <option>smartphones</option>
        <option>laptops</option>
        <option>fragrances</option>
        <option>skincare</option>
        <option>groceries</option>
        <option>home-decoration</option>
      </select>
      <div className="selectedDiv">
        {products.length == 0 ? (
          <span className="loaderloader"></span>
        ) : (
          products.map((item, index) => {
            return <Card data={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default Products;
