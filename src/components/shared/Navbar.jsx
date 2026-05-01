"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GiCow } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  // user checking
  useEffect(() => {
    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [pathname]); // 

  // logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    toast.success("Logged out successfully!");
    router.push("/login");
  };

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

        {/* User / Auth Section */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Avatar - Left side of the group */}
              <Link 
                href="/profile" 
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <div className="hidden md:block text-right">
                  <p className="text-sm font-bold text-gray-800 leading-none">{user.name}</p>
                  <p className="text-xs text-orange-600 font-medium">View Profile</p>
                </div>
                
                <div className="avatar border-2 border-orange-500 rounded-full p-0.5 shadow-sm">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      alt="User Avatar" 
                      src={user.photo || "https://i.ibb.co/mR79Y6B/user-placeholder.png"} 
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>

              {/* Logout Button - Right side of the group */}
              <button 
                onClick={handleLogout}
                className="btn btn-sm md:btn-md bg-red-50 text-red-600 border-red-100 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-xl px-5 font-bold transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            // যদি লগইন করা না থাকে
            <div className="flex gap-2">
              <Link 
                href="/login" 
                className="btn btn-ghost text-orange-600 font-bold hover:bg-orange-50 rounded-xl px-6 border-none"
              >
                Login
              </Link>
              
              <Link 
                href="/register" 
                className="btn bg-orange-600 text-white font-bold hover:bg-orange-700 rounded-xl px-6 border-none shadow-md shadow-orange-200"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;