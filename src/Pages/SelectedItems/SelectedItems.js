import React from 'react';
import './SelectedItems.css'

const SelectedItems = ({cart}) => {
    let total=0;
    let shipping =0;
    for(const prod of cart){
        total = total + prod.price;
        shipping =shipping +prod.shipping;
    }
    let tax=(total *0.1).toFixed(2);
    let grandTotal =total+shipping+tax;
    
    return (
        <div className='p-3'>
            <h5>Total Item :{cart.length}</h5>
           <h5>Total Price:${total}</h5>
           <h5>Total Shipping charge:${shipping}</h5>
           <h5>Tax:${tax}</h5>
           <h4>Grand Total:{grandTotal}</h4>

            
        </div>
    );
};

export default SelectedItems;