import React from 'react'

import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className='w-[80vw] md:w-[30vw] md:max-w-none max-w-[80%] py-4 md:py-0 xs:py-0 xl:w-[14vw]' src='https://www.codeswear.com/logo.png' alt='Logo'/>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
      <Link to="/"  className="mr-5 hover:text-gray-900 cursor-pointer">Tshirts</Link>
      <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Hoodies</Link>
      <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Stickers</Link>
      <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Mugs</Link>
    </nav>
  <Link to="/Auth"><BiUserCircle className='text-2xl'/>  </Link>
   <Link to="/" className='text-2xl mx-3'><AiOutlineShoppingCart/></Link>
    
  </div>
</header>
  )
}

export default Navbar
