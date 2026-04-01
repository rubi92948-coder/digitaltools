import React, { useState } from "react";
import Card from "./components/UI/Card";

const App = () => {
  const [products] = useState([
    { id: 1, title: "Product 1", price: 100, img: "https://via.placeholder.com/50" },
    { id: 2, title: "Product 2", price: 200, img: "https://via.placeholder.com/50" },
  ]);

  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <div>
      <Card
        products={products}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default App;