import React from 'react';
import useCarts from '../../CustomHooks/useCarts';
import useProducts from '../../CustomHooks/useProducts';
import SelectedItems from '../SelectedItems/SelectedItems';

const Orders = () => {
    const [products, setProducts] = useProducts([]);
    const [carts, setCarts] = useCarts(products);
    return (
        <div id='order'>
            <h1>{carts.length}</h1>
            <div className="cart bg-primary text-white cart" style={{ height: "700px" }}>
                <SelectedItems cart={carts}></SelectedItems>
            </div>
            
        </div>
    );
};

export default Orders;