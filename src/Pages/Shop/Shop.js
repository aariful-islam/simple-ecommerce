import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import SelectedItems from '../SelectedItems/SelectedItems';
import './Shop.css'

const Shop = () => {
    const [products ,setProducts]= useState([])
    const [carts,setCarts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handle=(products)=>{
        const newCart=[...carts,products]
        setCarts(newCart);
        
    }
    return (
        <div className='mt-4'>
             <h1 className='text-center '>All products</h1>
            <div className='shop'>
               
                <div className='products mt-3'>
                {
                    products.map(product => <Products
                    product={product}
                    key={product.id}
                    handle={handle}
                    
                    ></Products>)
                }

                </div>
                <div className='bg-primary text-white'>
                    <h1 className='text-center'>Order Summery</h1>
                     {
                         carts.map(cart=> <SelectedItems 
                         key={cart.key}
                         cart={cart}
                        
                         

                         ></SelectedItems>)
                     }
                     <h5 className='p-3'>total item : {carts.length}</h5>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;