import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='bg-[#0B1120]'>
      <div className='w-10/12 mx-auto text-white pt-30 pb-10'>

        {/* top div */}
        <div className='flex flex-col items-center md:items-start md:flex-row gap-10 justify-between'>
        <div>
            <h1 className='text-4xl font-bold mb-3 text-center sm:text-left'>DigiTools</h1>
            <p className='text-gray-400'>Premium digital tools for creators,<br /> and businesses. Work smarter<br />  with our suite of powerful tools.</p>
        </div>

        <div>
            <h2 className='font-semibold text-xl mb-3 text-center sm:text-left'>Product</h2>
            <div className='text-gray-400 flex flex-row gap-5 sm:gap-0 sm:flex-col'>
              <p>Features</p>
              <p>Pricing</p>
              <p>Templates</p>
              <p>Integrations</p>
            </div>
        </div>
        <div>
            <h2 className='font-semibold text-xl mb-3 text-center sm:text-left'>Company</h2>
            <div className='text-gray-400 flex flex-row gap-5 sm:gap-0 sm:flex-col'>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
        </div>
        <div>
            <h2 className='font-semibold text-xl mb-3 text-center sm:text-left'>Resources</h2>
            <div className='text-gray-400 flex flex-row gap-3 sm:gap-0 sm:flex-col'>
              <p>Documentation</p>
              <p>Help Center</p>
              <p>Community</p>
              <p>Contact</p>
            </div>
        </div>
        
        <div>
            <h2 className='font-semibold text-xl '>Social Links</h2>
            <div className='flex gap-4 mt-5'>
              <BsInstagram className='text-xl'/>
              <IoLogoFacebook className='text-xl' />
              <FaXTwitter className='text-xl' />
            </div>
        </div>

        </div>
        {/* divider */}
        <div class="divider before:bg-gray-700 after:bg-gray-700 mt-10 "></div>

        {/* bottom div */}
        <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 text-gray-500'>
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;