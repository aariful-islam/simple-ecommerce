import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCarts from '../../CustomHooks/useCarts';
import useProducts from '../../CustomHooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import OrderReview from '../OrderReview/OrderReview';
import SelectedItems from '../SelectedItems/SelectedItems';

const Orders = () => {
    const [products] = useProducts([]);
    const [carts,setCarts] = useCarts(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product =>{
        const rest = carts.filter(pd => pd.id !== product.id);
        setCarts(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop'>
            
            <div className="products">
            {
                carts.map(cart=> <OrderReview cart={cart}
                    handleRemoveProduct = {handleRemoveProduct}
                ></OrderReview>)
            }
            </div>

            <div className="cart bg-primary text-white" style={{ height: "700px" }}>
                <SelectedItems cart={carts}>
                
                </SelectedItems>
                <button className='text-center' onClick={()=>navigate('/inventory')}> Checkout </button>

            </div>
            
        </div>
    );
};

export default Orders;