import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {name,img,seller,price,ratings}= product;
    return (
        <div className='product shadow-lg p-3 mb-5 bg-white rounded ms-4' style={{height:"580px" , width:"350px"}}>
            <img className='w-100 p-3' style={{height:"286px"}} src={img} alt="" />
            <div className='p-3'>
            <h4>{name}</h4>
            <h6> Price :{price}</h6>
            <p>Seller : {seller}</p>
            <p>Ratings {ratings}</p>
            <button className='btn btn-primary w-50 mx-auto' style={{MarginLeft:"10px"}}>Add to cart</button>

            </div>
            
            
            
        </div>
    );
};

export default Products;