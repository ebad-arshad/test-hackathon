"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-4 md:px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FF9F0D]">
          <Link href="/">Food<span className="text-white">tuck</span></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-[#FF9F0D]">Menu</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-[#FF9F0D]">Blog</Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-[#FF9F0D]">Pages</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#FF9F0D]">About</Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[#FF9F0D]">Shop</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#FF9F0D]">Contact</Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-white focus:outline-none"
            />
            <FaSearch className="text-[#FF9F0D] ml-2" />
          </div>
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-[#FF9F0D]" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#FF9F0D]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center space-y-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <li>
          <Link href="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link href="/menu" onClick={toggleMenu}>Menu</Link>
        </li>
        <li>
          <Link href="/blog" onClick={toggleMenu}>Blog</Link>
        </li>
        <li>
          <Link href="/pages" onClick={toggleMenu}>Pages</Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link href="/shop" onClick={toggleMenu}>Shop</Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
