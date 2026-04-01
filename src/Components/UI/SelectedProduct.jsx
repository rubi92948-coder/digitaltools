import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { PiEmptyBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

const SelectedProducts = ({ selectedProduct, setSelectedProduct}) => {
  console.log(selectedProduct);
  // total price
  const totalPrice = selectedProduct.reduce((sum, product) => sum + product.price, 0)
  // remove btn functionality
  const handleRemove=(id)=>{
    const newCart =selectedProduct.filter(product=>product.id !==id);
    setSelectedProduct(newCart);
  }
  // jodi cart length 0 hoy?
  if (selectedProduct.length === 0) {
    return (
      <div className='border p-8 rounded-2xl text-center text-gray-500 '>
        <div className='flex justify-center items-center text-4xl text-gray-500 my-5'>
          <LuShoppingCart/>
        </div>
        <p>Your cart is empty</p>
        <h1>You can buy the card from products</h1>
      </div>
    )
  }

  // checkout empty btn
   const emptyCart=()=>{
    setSelectedProduct([]);
   }
  return (
    <div>
      <div className='border p-8 rounded-2xl '>
        <h1 className='font-bold text-xl my-5'>Your Cards</h1>
        {
          selectedProduct.map((product, index) => {
            return <div key={index} className=''>
              <div className='mx-auto flex justify-between items-center bg-gray-200 p-5 rounded-2xl mb-5 '>
                <div className='flex gap-5 justify-center items-center'>
                  <img className='w-8 h-8' src={product.img} alt="" />
                  <div>
                    <h2 className='font-semibold'>{product.title}</h2>
                    <p className='text-gray-500 font-semibold'>${product.price}</p>
                  </div>
                </div>
                <h2 className='text-red-600' onClick={() => {
                  handleRemove(product.id);
                  toast.error(`${product.title} has removed` )
                }}>Remove</h2>
              </div>
            </div>
          })
        }
        <div className='flex justify-between items-center px-3  py-2 rounded-xl'>
          <h1 className='text-xl'>Total</h1>
          <h2 className='font-semibold text-xl'>${totalPrice}</h2>
        </div>
        <div onClick={() => {emptyCart();toast .error('All card removed');}}
        
         className=' px-3  py-2 rounded-full  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-5'>
          <h1 className='text-xl text-center text-white'>Proceed to Checkout</h1>
          
        </div>
      </div>
      
    </div>
  );
};

export default SelectedProducts;