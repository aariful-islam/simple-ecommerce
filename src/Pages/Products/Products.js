import React from 'react';
import './Products.css'

const Products = ({product,handleAddtoCart}) => {
    const {name,img,seller,price,ratings}= product;
    return (
        <div className='product shadow-lg p-3 mb-5 bg-white rounded ms-4' style={{height:"580px" , width:"350px"}}>
            <img className='w-100 p-3' style={{height:"286px"}} src={img} alt="" />
            <div className='p-3'>
            <h4>{name}</h4>
            <h5>Price : ${price}</h5>
            <p>Seller : {seller}</p>
            <p>Ratings {ratings}</p>
            <button onClick={()=> handleAddtoCart(product)} className='btn btn-primary w-75' style={{MarginLeft:"10px"}}>Add to cart</button>

            </div>
            
            
            
        </div>
    );
};

export default Products;