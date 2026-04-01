import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import bannerImg from '../../../assets/products/banner.png'
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div>
      <div className='w-10/12 mx-auto mt-20 flex flex-col gap-10 md:flex-row justify-between items-center md:gap-0'>
        {/* left */}
        <div className='space-y-4'>
          <div className='flex  items-center gap-1 font-medium bg-gradient-to-r from-[#9d50fb20] to-[#bd61fa3e] p-1 rounded-2xl w-70 text-center'>
            <FaRegDotCircle className='bg-[#aa1cf688] rounded-full text-[#7b41a2] border-2 border-[#d79ffa] text-xl' />
            <p className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
          </div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-medium'>
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className='text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed'>
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          <div className='flex gap-5'>
            <button className=' bg-gradient-to-r from-[#770cf9] to-[#bd61fa] py-2 px-3 rounded-2xl text-white whitespace-nowrap font-bold'>Explore Products</button>
            <button className='py-2 px-3 rounded-2xl whitespace-nowrap bg-gradient-to-r from-[#770cf9] to-[#bd61fa] bg-clip-text text-transparent border border-[#770cf9] flex items-center gap-1 font-bold'><CiPlay1 className='text-[#8b00fc] ' /> Watch Demo</button>
          </div>
        </div>

        {/* right */}
        <div>
          <img className='w-full h-110' src={bannerImg} alt="" />
        </div>
      </div>
      
      {/* 2nd part */}
      <div className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>

        <div className='w-10/12 mx-auto mt-20  flex  justify-center items-center my-10 gap-10 space-x-0 md:space-x-30 py-10'>

          <div className=''>
            <h1 className="font-extrabold text-xl sm:text-3xl md:text-4xl text-white">50K+</h1>
            <p className='text-gray-300 font-medium'>Active Users</p>
          </div>
          <h1 className='text-white text-3xl'>|</h1>
          <div>
            <h1 className="font-extrabold text-xl sm:text-3xl md:text-4xl text-white">200+</h1>
            <p className='text-gray-300 font-medium'>Premium Tools</p>
          </div>
          <h1 className='text-white text-3xl'>|</h1>
          <div>
            <h1 className="font-extrabold text-xl sm:text-3xl md:text-4xl text-white">4.9</h1>
            <p className='text-gray-300 font-medium'>Rating</p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Banner;