import React from "react";
import style from "./layout.module.css";
import Header from "../../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.layoutContainer}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.body}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
