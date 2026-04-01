import React, { use, useState } from 'react';
import AllProducts from './AllProducts';
import SelectedProducts from './SelectedProducts'
const Card = ({ productPromise}) => {

  const product = use(productPromise)
  const [selectedType, setSelectedType] = useState('product')
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <div className=' w-10/12 mx-auto py-5 my-10 space-y-7'>

      <div className='text-center'>
        <h1 className='font-bold text-4xl'>Premium Digital Tools</h1>
        <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

      </div>
      <div className='flex justify-center'>
        {/* btn trogoole */}
        <div className='w-50 bg-gray-200 text-center border rounded-full shadow'>
          <button onClick={() => setSelectedType("product")} className={` rounded-l-full py-2 px-5 ${selectedType === "product" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white" : ""}`}>Products</button>

          <button onClick={() => setSelectedType("cart")} className={` rounded-r-full py-2 px-5 ${selectedType === "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white" : ""}`}>Cart  ({selectedProduct.length})</button>
        </div>
      </div>
      {
        selectedType === "product" ?
          <AllProducts selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} product={product} />
          :
          <SelectedProducts selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} product={product} />
      }

    </div>
  );
};

export default Card;