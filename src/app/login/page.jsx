"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { users } from "@/lib/userData"; // local data source
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { HiMail, HiLockClosed } from 'react-icons/hi';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    /* 
    ============================================================
    FUTURE MONGODB / API LOGIC (COMMENTED OUT)
    ============================================================
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Login Successful!");
        router.push("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
    ============================================================
    */

    // CURRENT LOCAL ARRAY LOGIC
    try {
      // user finding
      const localUsers = JSON.parse(localStorage.getItem("local_users") || "[]");
      
      const allUsers = [...users, ...localUsers];

      const emailExists = allUsers.find(u => u.email === email);

      if (!emailExists) {
        
        toast.error("No account found! Please register first.");
        setLoading(false);
        return; 
      }

      
      if (emailExists.password !== password) {
        toast.error("Invalid password! Please try again.");
        setLoading(false);
        return;
      }

      
      toast.success(`Welcome back, ${emailExists.name}!`);
      localStorage.setItem("currentUser", JSON.stringify(emailExists));

        // 
        setTimeout(() => {
          router.push("/");
        }, 1000);
      
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 italic">Login to QurbanirHaT</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Email</label>
            <div className="relative">
              <HiMail className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input 
                name="email" 
                type="email" 
                placeholder="email@example.com" 
                className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" 
                required 
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Password</label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" 
                required 
              />
            </div>
          </div>

          <button 
            disabled={loading} 
            className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl mt-4 font-black"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider text-gray-400 my-6 italic">OR</div>

        <button 
          type="button"
          onClick={() => toast.info("Google login is currently disabled.")}
          className="btn btn-outline border-gray-200 hover:bg-gray-50 w-full rounded-xl flex items-center gap-2 normal-case font-bold"
        >
          <FcGoogle size={24} /> Login with Google
        </button>

        <p className="text-center mt-6 text-gray-600 font-medium">
          New to the platform? <Link href="/register" className="text-orange-600 font-black hover:underline italic">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;