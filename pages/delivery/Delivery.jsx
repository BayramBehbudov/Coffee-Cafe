import React from "react";
import Layout from "../layouts/Layout";
import style from "./delivery.module.css";

const Delivery = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h1>Delivery Information</h1>
        <div className={style.content}>
          <div className={style.textSection}>
            <h2>How We Deliver</h2>
            <p>
              Our delivery service ensures that your orders reach you in the fastest
              and most efficient way possible. We partner with reliable courier
              services to ensure your package is handled with care and delivered on time.
            </p>
            <h2>Delivery Time</h2>
            <p>
              Orders are typically processed within 1-2 business days. Delivery times vary
              based on your location:
            </p>
            <ul>
              <li>Local: 1-3 business days</li>
              <li>National: 3-7 business days</li>
              <li>International: 7-14 business days</li>
            </ul>
            <h2>Shipping Costs</h2>
            <p>
              Shipping costs are calculated at checkout and depend on the weight and
              dimensions of your order as well as the delivery location. Free shipping is
              available for orders over a certain amount.
            </p>
            <h2>Tracking Your Order</h2>
            <p>
              Once your order has been shipped, you will receive a tracking number via
              email. You can use this number to track your order on our courier partner's
              website.
            </p>
          </div>
          <div className={style.imageSection}>
            <img src="https://via.placeholder.com/400" alt="Delivery" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Delivery;
