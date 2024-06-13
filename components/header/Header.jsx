import style from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={style.headerContainer}>
      <div>
        <img
          src="../img/headerIcon.svg"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div className={style.iconsSection}>
        <FontAwesomeIcon icon={faUser} className={style.icon} />
        <FontAwesomeIcon icon={faBagShopping} className={style.icon} />
      </div>
    </div>
  );
};

export default Header;
