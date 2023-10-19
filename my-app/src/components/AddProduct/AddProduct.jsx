import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show an alert with form data
    alert(JSON.stringify(productData, null, 2));

    // Log form data object to console
    console.log("Form Data:", productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
        /><br></br>
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={productData.description}
          onChange={handleChange}
        /><br></br>
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={productData.category}
          onChange={handleChange}
        /><br></br>
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={productData.quantity}
          onChange={handleChange}
        /><br></br>
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
        /><br></br>
      </label>
      <button type="submit">Submit</button>
      <button type="submit">Cancel</button>

    </form>
  );
};

export default AddProduct;
