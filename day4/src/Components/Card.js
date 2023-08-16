
import React from 'react'
function Card({ data }) {
    return (
        <div className="card col-5">
            <img src={data.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;