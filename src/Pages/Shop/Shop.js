import React, { useEffect, useState } from "react";
import useProducts from "../../CustomHooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Products from "../Products/Products";
import SelectedItems from "../SelectedItems/SelectedItems";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts([]);
  const [carts, setCarts] = useState([]);
  
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);
  const handleAddtoCart = (products) => {
      let newCart=[];
    const exists = carts.find(prod => prod.id === products)
    if (!exists)
    {
        products.quantity=1;
        newCart = [...carts, products];
    }
    else{
        const rest =carts.filter(prod => prod.id !== products.id)
        exists.quantity= exists.quantity+1;
        newCart=[...rest,exists]
;    }
    
    
    setCarts(newCart);
    addToDb(products.id);
  };

  return (
    <div>
      <div className="shop">
        <div className="products mt-3">
          {products.map((product) => (
            <Products
              product={product}
              key={product.id}
              handleAddtoCart={handleAddtoCart}
            ></Products>
          ))}
        </div>
        <div className="bg-primary text-white cart" style={{ height: "700px" }}>
          <h1 className="text-center">Order Summery</h1>

          <SelectedItems key={carts.key} cart={carts}></SelectedItems>
        </div>
      </div>
    </div>
  );
};

export default Shop;
