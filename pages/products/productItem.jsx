import React, { useContext, useEffect, useState } from "react";
import style from "./products.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import SuccesAnimation from "../../components/SuccesAnimation";
import { Context } from "../../src/OrderContext.jsx";

const productItem = ({ product }) => {
  const [count, setcount] = useState(0);
  const [order, setOrder] = useState(false);
  const { setProduct } = useContext(Context);

  function productOrdered() {
    count > 0 && ((product.count = count), setProduct(product));
  }

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
              setcount((count) => (count > 0 ? (count -= 1) : 0));
            }}
          >
            <FontAwesomeIcon icon={faMinus} className={style.icon} />
          </button>
          <button
            onClick={() => {
              setcount((count) => (count += 1));
            }}
          >
            <FontAwesomeIcon icon={faPlus} className={style.icon} />
          </button>
          <button
            onClick={() => {
              productOrdered();
              count > 0 && setOrder(true);
            }}
          >
            Add to Card
          </button>
        </div>
        <p>${count * product.price}</p>
      </div>
      {order && (
        <SuccesAnimation text={"Your order has been added to your card"} />
      )}
    </div>
  );
};

export default productItem;
