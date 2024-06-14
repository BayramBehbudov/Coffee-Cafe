import React, { useContext } from "react";
import { Context } from "../../src/OrderContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import style from "./table.module.css";

const ProductTable = () => {
  const { products, setProducts } = useContext(Context);
  const updatedProducts = [...products];

  const getTotal = () => {
    return products.reduce(
      (acc, product) => acc + product.count * product.price,
      0
    );
  };

  function deleteProduct(index) {
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  }

  function decrement(index) {
    if (updatedProducts[index].count > 1) {
      updatedProducts[index].count -= 1;
      setProducts(updatedProducts);
    }
  }

  function increment(index) {
    updatedProducts[index].count += 1;
    setProducts(updatedProducts);
  }

  if (products.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product Sku</th>
            <th>Product Name</th>
            <th>Count</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.sku}>
              <td>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => {
                    deleteProduct(index);
                  }}
                  className={style.deleteProduct}
                />
              </td>
              <td>{product.sku}</td>
              <td>{product.title}</td>
              <td className={style.section}>
                <FontAwesomeIcon
                  icon={faMinus}
                  className={style.countSelector}
                  onClick={() => {
                    decrement(index);
                  }}
                />
                {product.count}
                <FontAwesomeIcon
                  icon={faPlus}
                  className={style.countSelector}
                  onClick={() => {
                    increment(index);
                  }}
                />
              </td>
              <td>{product.price} USD</td>
              <td>{product.count * product.price} USD</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">Total</td>
            <td>{getTotal()} USD</td>
          </tr>
        </tfoot>
      </table>
    );
  } else {
    return <div className={style.emptyContainer}>Your Card Empty</div>;
  }
};

export default ProductTable;
