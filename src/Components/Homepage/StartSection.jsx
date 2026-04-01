import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';

const StartSection = () => {
  return (
    <div className='bg-gray-100 py-20'>

      <div className='w-10/12 mx-auto space-y-5'>
        <div className='text-center'>
          <h1 className='font-bold text-xl md:text-4xl '>Get Started in 3 Steps</h1>
          <p className='text-gray-600'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
          <div className='relative text-center flex flex-col items-center space-y-3 bg-white p-5 rounded-2xl py-10 hover:scale-105 transition'>

            <p className='absolute top-3 right-3 bg-[#921afc] text-white p-2 rounded-full'>
              01
            </p>

            <FiUser className='text-6xl text-[#9439f6] bg-[#ba39f63d] p-1 rounded-full' />

            <h2 className='text-xl font-semibold'>Create Account</h2>

            <p className='text-gray-500'>
              Sign up for free in seconds. No credit card required to get started.
            </p>

          </div>

          <div className='relative text-center flex flex-col items-center space-y-3 bg-white p-5 rounded-2xl py-10 hover:scale-105 transition'>

            <p className='absolute top-3 right-3 bg-[#921afc] text-white p-2 rounded-full'>
              02
            </p>

            <LuRocket className='text-6xl text-[#9439f6] bg-[#ba39f63d] rounded-full'  />

            <h2 className='text-xl font-semibold'>Choose Products</h2>

            <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs  </p>

          </div>

          <div className='relative text-center flex flex-col items-center space-y-3 bg-white p-5 rounded-2xl py-10 hover:scale-105 transition'>

            <p className='absolute top-3 right-3 bg-[#921afc] text-white p-2 rounded-full'>
              03
            </p>

            <BsBoxSeam className='text-6xl text-[#9439f6] bg-[#ba39f63d] p-1 rounded-full' />

            <h2 className='text-xl font-semibold'>Start Creating</h2>

            <p className='text-gray-500'>Download and start using your premium tools immediately. </p>

          </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default StartSection;