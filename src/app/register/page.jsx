"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// local array te save korchi apatoto
// import { signUp, authClient } from "@/lib/auth-client"; 

import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { HiUser, HiMail, HiLockClosed, HiPhotograph } from 'react-icons/hi';

import { users } from "@/lib/userData"; //local array

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (password.length < 3) {
      toast.error("Password must be at least 3 characters long");
      setLoading(false);
      return;
    }

    /* 
    // {database er part apatoto comment kore rakhtechi}
    try {
      const { data, error } = await signUp.email({
        email,
        password,
        name,
        image: photoUrl,
        callbackURL: "/login",
      });
      
    } catch (err) { ... }
    */

   
    try {
      
      const localUsers = JSON.parse(localStorage.getItem("local_users") || "[]");

      const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        photo: photoUrl
      };

      const updatedLocalUsers = [...localUsers, newUser];
      localStorage.setItem("local_users", JSON.stringify(updatedLocalUsers));
      
      toast.success("Registration successful!");
      
      
      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    // bacend disabled
    toast.info("Google login is disabled in dummy mode.");
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 italic">Create Account</h2>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Name</label>
            <div className="relative">
              <HiUser className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Email</label>
            <div className="relative">
              <HiMail className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input name="email" type="email" placeholder="email@example.com" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Photo URL</label>
            <div className="relative">
              <HiPhotograph className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input name="photoUrl" type="url" placeholder="https://image-link.com" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">Password</label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-3.5 text-gray-400 size-5" />
              <input name="password" type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 bg-white/50 rounded-xl" required />
            </div>
          </div>

          <button disabled={loading} className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl mt-4 font-black">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider text-gray-400 my-6 italic">OR</div>

        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline border-gray-200 hover:bg-gray-50 w-full rounded-xl flex items-center gap-2 normal-case font-bold">
          <FcGoogle size={24} /> Register with Google
        </button>

        <p className="text-center mt-6 text-gray-600 font-medium">
          Already have an account? <Link href="/login" className="text-orange-600 font-black hover:underline italic">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;