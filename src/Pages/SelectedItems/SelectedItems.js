import React from 'react';
import './SelectedItems.css'

const SelectedItems = ({cart}) => {
    let total=0;
    for(const prod of cart){
        total = total + prod.price;
    }
    return (
        <div className='p-3'>
           <h5>Total Price:{total}</h5>
           <h5>Total Shipping charge:</h5>
           <h5>Tax:</h5>
           <h2>Grand Total:</h2>

            
        </div>
    );
};

export default SelectedItems;