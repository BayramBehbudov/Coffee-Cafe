import React from "react";
import style from "./home.module.css";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={style.homeContainer}>
        <div className={style.leftSection}>
          <div>
            Enjoy Your <span>Cofee</span> before your activity
          </div>
          <div>
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/products");
              }}
            >
              Order Now
            </button>
            <button>Feedback</button>
          </div>
        </div>
        <div className={style.rightSection}>
          <img src="../../img/bodyIcon.svg" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
