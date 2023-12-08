// import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import "../styles/productdetails.css";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = ProductData[id - 1];
  return (
    <div className="product-details-card-container">
      <div className="back">
        {/*  navigate back to the product page */}
        <Link to="/">
          <button className="back-btn">Back to Products</button>
        </Link>
      </div>
      <div className="product-details-img-card">
        <img src={product.img} alt={product.Title} />
      </div>
      <div className="product-details">
        <h3 className="product-detail-title">{product.Title}</h3>
        <p className="product-details-price">${product.price}</p>

        <div className="desc">
          <h2>Description</h2>
          <p>{product.description}</p>
          <Link to={`/edit/${product.id}`}>
            <button className="edit-btn">Edit</button>
          </Link>
        </div>
        <div className="features">
          <h3>Features</h3>
          <p>{product.features}</p>
          <Link to={`/edit/${product.id}`}>
            <button className="edit-btn">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
