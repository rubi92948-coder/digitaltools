import { GiShoppingCart } from 'react-icons/gi';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-white'>
      <div className='flex justify-between items-center w-10/12 mx-auto py-5 relative'>

        {/* logo hidden*/}
        <a className="text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hidden md:block">
          DigiTools
        </a>

        {/* lefft*/}
        <div className='flex items-center md:hidden gap-3'>
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className='text-3xl font-bold'>☰</span>
          </button>
          {/* phn a login btn */}
          <button className='font-medium bg-amber-200 px-3 py-0.5 rounded-2xl'>Login</button>
        </div>

        {/* Menu Links */}
        <ul className={`md:flex md:flex-row flex-col md:static absolute top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:gap-5 gap-4 p-5 md:p-0 transition-all ${menuOpen ? 'flex' : 'hidden'} z-50`}>
          {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(item => (
            <li key={item}>
              <a className='block md:inline px-4 py-2 md:py-0 rounded hover:bg-blue-100 transition-colors' href="/">{item}</a>
            </li>
          ))}
        </ul>

        {/* cart*/}
        <div className='flex justify-center items-center gap-4'>
          <div className='relative'>
            <GiShoppingCart className='text-2xl text-[#770cf9]' />
            <span className='absolute -top-2 -right-2 bg-[#fe5500f1] p-1 rounded-full text-xs text-white'>2</span>
          </div>
          {/* phn a login btn*/}
          <button className='font-medium hidden md:block'>Login</button>
          <button className='font-medium bg-gradient-to-r from-[#770cf9] to-[#bd61fa] py-2 px-3 rounded-xl text-white whitespace-nowrap'>Get Started</button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider m-0 p-0"></div>
    </div>
  );
};

export default NavBar;