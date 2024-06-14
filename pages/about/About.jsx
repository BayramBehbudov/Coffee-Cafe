import React from "react";
import Layout from "../layouts/Layout";
import style from "./about.module.css";
import Feedback from "../../components/Feedback";
const About = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.textSection}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nullam ac nisi non mauris faucibus consectetur. Sed
              elementum risus eget nisl aliquam, et cursus mi interdum. Duis
              tincidunt purus nec leo vehicula, ac suscipit mauris consectetur.
              Proin gravida, urna et facilisis tempor, eros odio rhoncus odio,
              vel aliquet sapien augue vel risus. Fusce consequat turpis nec
              dolor tincidunt, ut feugiat ex dapibus. Donec euismod fermentum
              dolor, sit amet suscipit nisi. Donec pharetra enim ac odio varius,
              at viverra mi suscipit. Suspendisse potenti. Morbi consequat elit
              vel nisl suscipit, nec ultricies justo mollis.
            </p>
          </div>
          <div className={style.imageSection}>
            <img src="https://via.placeholder.com/400" alt="About Us" />
          </div>
        </div>
        <div className={style.feedbackSection}>
          <Feedback />
        </div>
      </div>
    </Layout>
  );
};

export default About;
