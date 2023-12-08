import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductData from "./ProductData";
import "../styles/editproduct.css";

function EditProduct({ onEditComplete }) {
  const { id } = useParams();
  const productIndex = id - 1;
  const product = ProductData[productIndex];

  const [editedProduct, setEditedProduct] = useState({
    description: product.description,
    features: product.features,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update the product data in the array
    ProductData[productIndex] = {
      ...ProductData[productIndex],
      ...editedProduct,
    };
    // Invoke the callback function to handle navigation
    onEditComplete();
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="features">Features:</label>
          <textarea
            id="features"
            name="features"
            value={editedProduct.features}
            onChange={handleInputChange}
          ></textarea>
        </div>
        {/* Link to ProductDetails page */}
        <Link to={`/ProductDetails/${id}`}>
          <button type="submit">Save Changes</button>
        </Link>
      </form>
    </div>
  );
}

export default EditProduct;
