"use client";
import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiMail, HiLockClosed } from 'react-icons/hi';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // mongodb pore add korbo
    console.log("Login logic will be here");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to QurbanirHaT</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Email</label>
            <div className="relative">
              <HiMail className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Password</label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl mt-4">
            Login
          </button>
        </form>

        <div className="divider text-gray-400 my-6">OR</div>

        <button className="btn btn-outline border-gray-200 hover:bg-gray-50 w-full rounded-xl flex items-center gap-2 normal-case">
          <FcGoogle size={24} /> Login with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          New to the platform? <Link href="/register" className="text-orange-600 font-bold hover:underline">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;