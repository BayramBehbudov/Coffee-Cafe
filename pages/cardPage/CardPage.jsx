import React from "react";
import Layout from "../layouts/Layout";
import Table from "../../components/table/Table.jsx";
import Button from "../../components/btn/Button.jsx";

const CardPage = () => {
  const btnsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <Layout>
      <Table />
      <div style={btnsStyle}>
        <Button text="Continue Shopping" path="/products" />
        <Button text="Complete Shopping" />
      </div>
    </Layout>
  );
};

export default CardPage;
