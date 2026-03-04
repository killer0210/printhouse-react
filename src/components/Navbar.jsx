import React from 'react'
import logo from '../assets/book/image_1.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex items-center justify-between">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" className="w-full h-full object-cover" />
            </Link>
        </div>
        <nav className="flex gap-1">
            <Link to="/" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2">Нүүр</Link>
            <Link to="/about" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">Бидний тухай</Link>
            <Link to="/products" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">Бүтээгдэхүүн</Link>
            <Link to="/technology" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">Технологи</Link>
            <Link to="/pricing" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">Үнийн санал</Link>
            <Link to="/contact" className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">Холбоо барих</Link>
            <button className="p-2 underline text-gray-700 hover:text-gray-900 font-semibold">MN</button>
            <button className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold "><i className="fa-solid fa-search"></i></button>
      </nav>
    </div>
  </header>
);
};

export default Navbar;