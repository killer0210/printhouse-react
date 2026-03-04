import React, { useState } from 'react'
import logo from '../assets/book/image_1.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [isActive, setIsActive] = useState(false)
    // const handleActive = (isActive) => {
    //     setIsActive(isActive)
    // }
  return (
    <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex items-center justify-between">
        <div className="logo">
            <NavLink to="/">
                <img src={logo} alt="logo" className="w-full h-full object-cover" />
            </NavLink>
        </div>
        <nav className="flex gap-1">
            <NavLink to="/" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Нүүр</NavLink>
            <NavLink to="/about" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Бидний тухай</NavLink>
            <NavLink to="/products" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Бүтээгдэхүүн</NavLink>
            <NavLink to="/technology" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Технологи</NavLink>
            <NavLink to="/pricing" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Үнийн санал</NavLink>
            <NavLink to="/contact" className={({ isActive}) => isActive ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2' : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'}>Холбоо барих</NavLink>
            <button className="p-2 underline text-gray-700 hover:text-gray-900 font-semibold">MN</button>
            <button className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold "><i className="fa-solid fa-search"></i></button>
      </nav>
    </div>
  </header>
);
};

export default Navbar;