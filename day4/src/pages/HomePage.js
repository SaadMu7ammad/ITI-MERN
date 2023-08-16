import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

function HomePage() {

    // show()
    // function show() {
    //     console.log("saad");
    // }
    useEffect(function () {  // did mount
        getData();
        console.log(products);
    }, [])
    var [products, setProducts] = useState([]);
    async function getData() {
        // http call axios  api 
        var response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products);

        response.data.products.map((item) => {
            console.log( item.category)
        })
        setProducts([...response.data.products]);
        // rerender


    }
    return (
        <div>
           
            <div className='row'>
                {
                    products.length == 0 ? <span className="loaderloader"></span> :
                        products.map((item, index) => {
                            return <Card data={item} />
                        })

                }
            </div>
        </div>

    )
}

export default HomePage