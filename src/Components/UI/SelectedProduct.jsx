import React from "react";

const SelectedProducts = ({
  selectedProduct = [],
  setSelectedProduct,
}) => {

  const totalPrice = selectedProduct.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleRemove = (id) => {
    const newCart = selectedProduct.filter((item) => item.id !== id);
    setSelectedProduct(newCart);
  };

  if (selectedProduct.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {selectedProduct.map((item) => (
        <div key={item.id} style={{ border: "1px solid red", margin: 10 }}>
          <h4>{item.title}</h4>
          <p>${item.price}</p>

          <button onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default SelectedProducts;