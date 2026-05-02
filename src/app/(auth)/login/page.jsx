"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client"; 
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import 'animate.css';

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Email login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/", 
      });

      if (error) {
        toast.error(`Login Failed: ${error.message || "Invalid credentials"}`);
      } else {
        toast.success("Welcome back! Login Successful.");
        router.push("/"); 
      }
    } catch (err) {
      toast.error("Database connection error");
    } finally {
      setLoading(false);
    }
  };

  // Google login handler using social provider
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
      });
    } catch (err) {
      toast.error("Google Authentication Failed");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-orange-100 p-8 rounded-3xl shadow-2xl border border-orange-50 animate__animated animate__fadeInDown">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-800">Login Now</h2>
          <p className="text-gray-500 text-sm mt-2 font-medium">Access your QurbanirHaT account</p>
        </div>
        
        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="form-control">
            <label className="label font-bold text-gray-700 text-xs">Email Address</label>
            <div className="relative">
              <HiMail className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input 
                name="email" 
                type="email" 
                placeholder="email@example.com" 
                className="input input-bordered w-full pl-10 border-gray-200 focus:border-orange-500 rounded-xl" 
                required 
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-bold text-gray-700 text-xs">Password</label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full pl-10 border-gray-200 focus:border-orange-500 rounded-xl" 
                required 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading} 
            className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl mt-4 font-black shadow-lg shadow-orange-100 transition-all"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>

        <div className="divider text-gray-400 my-6 text-[10px] font-bold uppercase tracking-widest">Or Continue With</div>

        {/* Social Authentication Provider */}
        <button 
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-outline border-gray-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 w-full rounded-xl flex items-center justify-center gap-3 normal-case font-bold transition-all"
        >
          <FcGoogle size={24} /> Google
        </button>

        {/* Navigation Link */}
        <p className="text-center mt-8 text-gray-600 text-sm">
          New to the platform? <Link href="/register" className="text-orange-600 font-bold hover:underline">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;