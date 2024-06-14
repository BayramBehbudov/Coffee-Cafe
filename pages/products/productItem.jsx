import React, { useEffect, useState } from "react";
import style from "./products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import SuccesAnimation from "../../components/SuccesAnimation";

const productItem = ({ product }) => {
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    if (order) {
      const timer = setTimeout(() => {
        setOrder(false);
      }, 1550);

      return () => clearTimeout(timer);
    }
  }, [order]);

  return (
    <div className={style.productCard}>
      <img src={product.img} alt="" />
      <div className={style.section}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      <div className={style.section}>
        <div className={style.btns}>
          <button
            onClick={() => {
              setTotal((total) => (total > 0 ? (total -= product.price) : 0));
            }}
          >
            <FontAwesomeIcon icon={faMinus} className={style.icon} />
          </button>
          <button
            onClick={() => {
              setTotal((total) => (total += product.price));
            }}
          >
            <FontAwesomeIcon icon={faPlus} className={style.icon} />
          </button>
          <button
            onClick={() => {
              total > 0 && setOrder(true);
            }}
          >
            Order
          </button>
        </div>
        <p>${total}</p>
      </div>
      {order && <SuccesAnimation text={"Your order has been received"} />}
    </div>
  );
};

export default productItem;
