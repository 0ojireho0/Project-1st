import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    id: 1,
    title: 'TaskGiver',
    path: '/',
  },
  {
    id: 2,
    title: 'E-commerce',
    path: '/ecommerce',
  },
  {
    id: 3,
    title: 'Add to cart',
    path: '/addcart'
  }
];

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => {
    setMobile(!mobile);
  };

  const [popup, setPopup] = useState(false)
  const exitPopup = () =>{
    setPopup(!popup)
  }

  return (
    <>
      <div className=' md:relative'>
        <ul className='flex relative md:mt-0 bg-gray-600 md:h-16 md:w-full'>
          <div className={`md:bg-gray-600 md:w-full md:h-16 md:flex md:items-center flex space-x-4 md:justify-center absolute z-[100] ${mobile ? 'absolute h-screen w-full md:text-base md:font-normal text-xl font-semibold items-center justify-center bg-gray-600' : 'hidden h-0 w-0'} md:space-x-4` }>
            {navItems.map((item) => (
              <li key={item.id} className=''>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'text-white' : '')}
                  
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </div>
          <li className='md:hidden mr-5 absolute left-[95%] z-[100]' onClick={toggleMenu}>
            {mobile ? (
              <FontAwesomeIcon icon={faTimes} className='absolute mt-5' />
            ) : (
              <FontAwesomeIcon icon={faBars} className='absolute mt-5' />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
