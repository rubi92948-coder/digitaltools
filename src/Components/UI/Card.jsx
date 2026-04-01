import React from "react";
import AllProducts from "./AllProducts";
import SelectedProducts from "./SelectedProduct";

const Card = ({
  products = [],
  selectedProduct = [],
  setSelectedProduct,
}) => {
  return (
    <div className="flex gap-5">
      <AllProducts
        products={products}
        setSelectedProduct={setSelectedProduct}
      />

      <SelectedProducts selectedProduct={selectedProduct} />
    </div>
  );
};

export default Card;