import React from "react";
import Layout from "../layouts/Layout";
import Allproducts from "../../allProducts.js";
import ProductItem from "./productItem.jsx";
import style from "./products.module.css"

const Products = () => {
  return (
    <Layout>
      <div className={style.products}>
        {Allproducts.map((prod) => (
          <ProductItem product={prod} key={prod.sku} />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
