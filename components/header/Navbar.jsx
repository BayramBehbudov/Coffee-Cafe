import style from "./header.module.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul className={style.navbar}>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          navigate("/about");
        }}
      >
        About Us
      </li>
      <li
        onClick={() => {
          navigate("/products");
        }}
      >
        Our Product
      </li>
      <li
        onClick={() => {
          navigate("/delivery");
        }}
      >
        Delivery
      </li>
    </ul>
  );
};

export default Navbar;
