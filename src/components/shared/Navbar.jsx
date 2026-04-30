"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCow } from 'react-icons/gi'; // গরুর আইকনটি ইমপোর্ট করা হলো

const Navbar = () => {
  const pathname = usePathname();

  // Active link helper - now with background color
  const isActive = (path) => 
    pathname === path 
      ? "bg-orange-50 text-orange-600 font-black" 
      : "text-gray-600 font-medium hover:text-orange-600 hover:bg-orange-50/50";

  return (
    <div className="sticky top-0 z-50 w-full mt-6 px-4">
      <div className="max-w-7xl mx-auto navbar bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-4 md:px-8">
        
        {/* Logo Section */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-orange-100 p-2 rounded-xl group-hover:bg-orange-200 transition-colors">
              <GiCow className="text-orange-600 text-2xl" /> 
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-800">
              Qurbanir<span className="text-orange-600">HaT</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/" className={`${isActive('/')} px-6 py-2 rounded-xl transition-all`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/animals" className={`${isActive('/animals')} px-6 py-2 rounded-xl transition-all`}>
                All Animals
              </Link>
            </li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="navbar-end gap-2">
          <Link 
            href="/login" 
            className="btn btn-ghost text-orange-600 font-bold hover:bg-orange-50 rounded-xl px-6 border-none"
          >
            Login
          </Link>
          
          <Link 
            href="/register" 
            className="btn btn-ghost text-orange-600 font-bold hover:bg-orange-50 rounded-xl px-6 border-none"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;