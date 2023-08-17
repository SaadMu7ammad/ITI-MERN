import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

function HomePage() {
    var [products, setProducts] = useState([]);
  useEffect(function () {
    // after the component did mount
    getData();
  }, []);
  async function getData() {
    // http call axios  api
    var response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);
    setProducts([...response.data.products]);
  }
  return (
    <div>
      <div className="row">
        {products.length == 0 ? (
          <span className="loaderloader"></span>
        ) : (
          products.map((item, index) => {
            return <Card key={index} data={item} />;
          })
        )}
      </div>
    </div>
  );
}
export default HomePage;
