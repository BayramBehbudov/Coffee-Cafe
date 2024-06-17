import { useContext } from "react";
import style from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Context } from "../../src/OrderContext.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(Context);
  return (
    <div className={style.headerContainer}>
      <div>
        <img
          src="../../img/headerIcon.svg"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        ></img>
      </div>
      <div>
        <Navbar />
      </div>
      <div className={style.iconsSection}>
        <div className={style.iconContainer}>
          <FontAwesomeIcon icon={faUser} className={style.icon} />
        </div>

        <div className={style.iconContainer}>
          <FontAwesomeIcon
            icon={faBagShopping}
            className={`${style.icon} ${style.shopCardIcon}`}
            onClick={() => navigate("/card")}
          />
          <span className={style.shopCardCount}>{products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
