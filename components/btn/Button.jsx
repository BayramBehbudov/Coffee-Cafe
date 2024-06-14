import React, { useContext } from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../src/OrderContext";

const Button = ({ text, path }) => {

  const { setProducts } = useContext(Context);

  const navigate = useNavigate();

  return (

    <button
      className="btn-17"
      onClick={() => {
        navigate(path ? path : setProducts([]));
      }}
    >
      <span className="text-container">
        <span className="text">{text}</span>
      </span>
    </button>

  );
};

export default Button;
