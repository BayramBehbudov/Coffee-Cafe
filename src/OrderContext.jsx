import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
console.log(products);
  useEffect(() => {
    if (product && !products.some((prod) => prod.sku === product.sku)) {
      setProducts([...products, product]);
    }
  }, [product]);
  return (
    <Context.Provider value={{ products, setProduct,setProducts }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
