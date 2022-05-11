import React from 'react';

const Products = ({product}) => {
    const {name,img,seller,price,ratings}= product;
    return (
        <div style={{border:"2px solid black"}}>
            <img className='w-100' style={{height:"286px"}} src={img} alt="" />
            <h1>{name}</h1>
            <h3> Price :{price}</h3>
            <p>Seller : {seller}</p>
            <p>Ratings {ratings}</p>
            
        </div>
    );
};

export default Products;