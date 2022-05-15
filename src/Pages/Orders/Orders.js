import React from 'react';
import useCarts from '../../CustomHooks/useCarts';
import useProducts from '../../CustomHooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts([]);
    const [carts, setCarts] = useCarts(products);
    return (
        <div id='order'>
            <h1>{carts.length}</h1>
            
        </div>
    );
};

export default Orders;