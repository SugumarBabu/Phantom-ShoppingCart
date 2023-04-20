import React from "react";
import { CartState } from "../context/Context";
import "./styles.css";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} id={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
