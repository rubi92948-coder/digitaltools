import React from "react";

const AllProducts = ({
  products = [],
  selectedProduct = [],
  setSelectedProduct,
}) => {

  const handleAdd = (product) => {
    setSelectedProduct([...selectedProduct, product]);
  };

  return (
    <div>
      <h2>All Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <img src={product.img} alt="" width="50" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>

          <button onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;