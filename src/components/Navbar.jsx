import React, { useState } from 'react'
import logo from '../assets/book/image_1.png'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold border-b-2 border-gray-900'
    : 'p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold'

const navLinks = [
  { to: '/', label: 'Нүүр' },
  { to: '/about', label: 'Бидний тухай' },
  { to: '/products', label: 'Бүтээгдэхүүн' },
  { to: '/technology', label: 'Технологи' },
  { to: '/pricing', label: 'Үнийн санал' },
  { to: '/contact', label: 'Холбоо барих' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-5 py-5 flex items-center justify-between">
        <div className="logo">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </NavLink>
        </div>

        {/* Desktop nav — зөвхөн laptop/tablet дээр */}
        <div className="hidden lg:flex items-center gap-1">
          <nav className="flex gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>
          <button className="p-2 underline text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-1">
            <i className="fa-solid fa-globe"></i>
            <span>MN</span>
          </button>
          <button className="p-2 no-underline text-gray-700 hover:text-gray-900 font-semibold">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>

        {/* Mobile nav — зөвхөн утас дээр: hamburger + цэс */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            className="p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Цэс нээх"
          >
            <i className={`fa-solid fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
          </button>
          <button className="p-2 text-gray-700 hover:text-gray-900">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>
      </div>

      {/* Mobile dropdown цэс */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white w-80">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <button className="p-2 text-left text-gray-700 hover:text-gray-900 font-semibold flex items-center gap-2 mt-2">
              <i className="fa-solid fa-globe"></i>
              <span>MN</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
