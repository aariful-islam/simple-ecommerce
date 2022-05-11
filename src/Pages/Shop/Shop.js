import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import SelectedItems from "../SelectedItems/SelectedItems";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handle = (products) => {
    const newCart = [...carts, products];
    setCarts(newCart);
  };
  return (
    <div>
      
      <div className="shop">
        <div className="products mt-3">
          {products.map((product) => (
            <Products
              product={product}
              key={product.id}
              handle={handle}
            ></Products>
          ))}
        </div>
        <div className="bg-primary text-white cart" style={{height:"700px"}}>
          <h1 className="text-center">Order Summery</h1>
          
            <SelectedItems 
            key={carts.key} 
            cart={carts}
            ></SelectedItems>
         
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
