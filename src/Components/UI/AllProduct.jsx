import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { toast } from 'react-toastify';

const AllProducts = ({ product, selectedProduct, setSelectedProduct }) => {
  console.log(product);
  // condition color
  const badgeTextColors = {
    "Best Seller": "text-red-500",
    "Popular": "text-blue-500",
    "New": "text-green-500",
  };
  return (
    <div className='grid md:grid-cols-3 gap-5'>
      {
        product.map(p=>{
          return(
            <div className='w-10/12 mx-auto'>
              <div className='bg-gray-100 p-5 rounded-2xl space-y-2 hover:scale-105 transition'>
                <p className={`text-right font-semibold ${badgeTextColors[p.badge]}  px-2 py-1 rounded`}>
                  {p.badge}
                </p>
                <img src={p.img} alt="" />
                <p className='text-xl font-semibold'>{p.title}</p>
                <p className='my-4 text-gray-500'>{p.description}</p>
                <p className='font-bold text-xl'>${p.price}<span className='text-gray-500 font-medium'>/{p.priceType}</span> </p>
                {
                  p.features.map(f=>{
                    return(
                      <ul className='flex items-center gap-1'>
                        <FcCheckmark />
                        <li className='text-gray-600'> {f}</li>
                      </ul>
                    )
                  })
                }
                {/* 1 ta id 2 bar seleted a thakbe na */}
                <button onClick={() => {
                  const exists = selectedProduct.find(item => item.id === p.id);
                  if (!exists) {
                    setSelectedProduct([...selectedProduct, p]);
                    toast(`${p.title} buy`)
                  }
                  else{
                    toast.warn('Already added')
                  }
                }}
                 className=' w-full   rounded-md py-2 px-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white'>{p.buttonText}
                </button>           
             </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default AllProducts;