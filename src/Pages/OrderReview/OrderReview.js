import React from 'react';

const OrderReview = ({cart,handleRemoveProduct}) => {
    const {name,img,quantity}=cart;
    return (
        <div>
            <h1>{name}</h1>
            <img className='w-100' src={img} alt="" />
            <p>{quantity}</p>
            <button onClick={()=> handleRemoveProduct(cart)}>Click</button>

            
        </div>
    );
};

export default OrderReview;