import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();

  useEffect(() => {
    if (product && !products.some((prod) => prod.sku === product.sku)) {
      setProducts([...products, product]);
    }
  }, [product]);
  console.log(products);
  return (
    <Context.Provider value={{ products, setProduct,setProducts }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
