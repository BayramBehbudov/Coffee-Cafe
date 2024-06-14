import React, { useContext } from "react";
import { Context } from "../../src/OrderContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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

  if (products.length > 0) {
    return (
      <table>
        <thead>
          <tr>
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
              <td>{product.sku}</td>
              <td>{product.title}</td>
              <td className={style.counter}>
                <FontAwesomeIcon
                  icon={faMinus}
                  className={style.countSelector}
                  onClick={() => {
                    if (updatedProducts[index].count > 0) {
                      updatedProducts[index].count -= 1;
                      setProducts(updatedProducts);
                    }
                  }}
                />
                {product.count}
                <FontAwesomeIcon
                  icon={faPlus}
                  className={style.countSelector}
                  onClick={() => {
                    updatedProducts[index].count += 1;
                    setProducts(updatedProducts);
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
            <td colSpan="4">Total</td>
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
