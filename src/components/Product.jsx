// import React from "react";
import ProductData from "./ProductData";
import "../styles/product.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="product-heading">
        <h1>Swivel Chairs</h1>
      </div>
      <div>
        <ul className="container">
          {ProductData.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductItem({ product }) {
  return (
    <div className="product-card-container">
      <div className="card-container">
        <img src={product.img} alt={product.Title} className="card-img" />
        <h3 className="card-title">{product.Title}</h3>
        <p className="card-price">${product.price}</p>
        <Link to={`/ProductDetails/${product.id}`}>
          <button className="card-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
