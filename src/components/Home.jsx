// import React from "react";
import "../styles/navbar.css";
import Product from "./Product";

function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <h2>
          <a href="https://www.wayfair.com/">
            Way<span>Fair</span>
          </a>
        </h2>
      </div>
      <Product />
    </div>
  );
}

export default Home;
