import React from "react";
import Layout from "../layouts/Layout";
import style from "./about.module.css";

const About = () => {
  return (
    <Layout>
      <div className={style.container}>
        <h1>About Us</h1>
        <section>
          <h2>Our Story</h2>
          <p>
            Welcome to our coffee store! Established in 2021, we have been
            passionate about delivering the finest coffee experience to our
            community. Our journey started with a love for coffee and a dream to
            create a cozy space where coffee enthusiasts can come together and
            enjoy a perfect cup of coffee.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality coffee and a welcoming
            atmosphere for all our customers. We believe in sourcing the best
            beans from around the world and roasting them to perfection. Our
            team is dedicated to ensuring every cup of coffee we serve meets the
            highest standards.
          </p>
        </section>
        <section>
          <h2>Our Team</h2>
          <p>
            We have a team of passionate baristas and coffee experts who are
            always ready to serve you with a smile. Our team members are trained
            to prepare a variety of coffee drinks, from classic espresso to
            unique specialty drinks.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to know more about our
            coffee store, feel free to reach out to us. We are always here to
            help!
          </p>
          <ul>
            <li>Email: info@coffeestore.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Coffee Street, Coffee City, CO 12345</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default About;
