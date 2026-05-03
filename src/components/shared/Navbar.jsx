"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client";
import { GiCow } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { toast } from 'react-toastify';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (err) {
      toast.error("Failed to logout");
    }
  };

  const isActive = (path) => 
    pathname === path 
      ? "bg-orange-50 text-orange-600 font-black" 
      : "text-gray-600 font-medium hover:text-orange-600 hover:bg-orange-50/50";

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full mt-6 px-4">
      <div className="max-w-7xl mx-auto navbar bg-orange-300/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg px-4 md:px-8">
        
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-orange-600">
              <HiMenuAlt3 size={28} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-64 gap-2 border border-orange-100">
              <NavLinks />
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 group ml-2 lg:ml-0">
            <div className="bg-orange-100 p-2 rounded-xl group-hover:bg-orange-200 transition-colors">
              <GiCow className="text-orange-600 text-2xl" /> 
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-800">
              Qurbanir<span className="text-orange-600">HaT</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-orange-600"></span>
          ) : user ? (
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/profile" className="flex items-center gap-3 group">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-bold text-gray-800 leading-none">{user.name}</p>
                </div>
                <div className="avatar border-2 border-orange-500 rounded-full p-0.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden">
                    <img alt={user.name} src={user.image || "https://i.ibb.co/mR79Y6B/user-placeholder.png"} />
                  </div>
                </div>
              </Link>

              <button 
                onClick={handleLogout}
                className="btn btn-xs md:btn-md bg-red-50 text-red-600 border-none hover:bg-red-600 hover:text-white rounded-xl font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-sm md:btn-md text-orange-600 font-bold bg-white/50 border-none rounded-xl px-4 md:px-6">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm md:btn-md text-orange-600 font-bold bg-white/50 border-none rounded-xl px-4 md:px-6">
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