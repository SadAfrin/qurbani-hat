"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 
import { FaUserCircle } from "react-icons/fa"; 
import { GiCow } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; 

  const navLinks = (
    <>
      <li><Link href="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
      <li><Link href="/animals" className="hover:text-orange-600 transition-colors">All Animals</Link></li>
    </>
  );

  return (
    // mx-auto দিয়ে নেভবারটিকে মাঝখানে অটো করা হয়েছে এবং রেসপনসিভ উইথ সেট করা হয়েছে
    <div className="sticky top-0 z-50 w-full mt-6 px-4">
      <div className="max-w-7xl mx-auto navbar bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-4 md:px-8">
        
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost lg:hidden p-1 mr-2 text-gray-800"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
            
            {isOpen && (
              <ul className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl w-64 text-gray-800 border border-white/40 flex flex-col gap-2">
                {navLinks}
                <div className="divider my-1"></div>
                {isLoggedIn ? (
                  <li><button className="btn btn-error btn-sm text-white w-full">Logout</button></li>
                ) : (
                  <div className="flex flex-col gap-2 p-2">
                    <Link href="/login" onClick={() => setIsOpen(false)} className="btn btn-outline border-orange-600 text-orange-600 btn-sm w-full font-bold">Login</Link>
                    <Link href="/register" onClick={() => setIsOpen(false)} className="btn bg-orange-600 border-none text-white btn-sm w-full font-bold">Register</Link>
                  </div>
                )}
              </ul>
            )}
          </div>
          
          {/* Logo with QurbanirHaT name and Icon without extra bg */}
          <Link href="/" className="flex items-center gap-2">
            <GiCow size={35} className="text-orange-600" />
            <span className="text-xl md:text-2xl font-bold text-orange-600 tracking-tight">
              QurbanirHaT
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-semibold text-gray-700">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End: Desktop Profile/Auth */}
        <div className="navbar-end gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/my-profile" className="hover:scale-110 transition-transform">
                  <FaUserCircle size={35} className="text-gray-600 cursor-pointer" />
                </Link>
                <button className="btn bg-red-500 hover:bg-red-600 text-white border-none btn-sm rounded-lg px-6">
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link href="/login" className="btn btn-ghost text-orange-600 hover:bg-orange-50 btn-sm font-bold">Login</Link>
                <Link href="/register" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none btn-sm rounded-lg px-6 shadow-md shadow-orange-100">
                  Register
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Login Icon */}
          {!isLoggedIn && (
            <Link href="/login" className="sm:hidden btn btn-ghost btn-circle text-orange-600">
              <FaUserCircle size={26} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;