"use client";
import React from "react";
import Link from "next/link";
import { GiCow } from "react-icons/gi";
import { HiArrowLeft } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4">
      {/* Glassmorphism Card */}
      <div className="max-w-md w-full bg-white/30 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center space-y-6">
        
        {/* Animated Cow Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <GiCow size={100} className="text-orange-600 animate-bounce" />
            <div className="absolute -bottom-2 w-full h-4 bg-gray-900/10 rounded-[100%] blur-sm"></div>
          </div>
        </div>

        {/* Error Text */}
        <div className="space-y-2">
          <h1 className="text-7xl font-black text-orange-600 tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold text-gray-800">পশুটি খুঁজে পাওয়া যায়নি!</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো আমাদের হাট থেকে অন্য কোথাও চলে গেছে। 
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-xl px-8 w-full shadow-lg shadow-orange-200 group transition-all"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* Brand Subtle Tag */}
        <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
          QurbanirHaT • Livestock Booking
        </p>
      </div>
    </div>
  );
};

export default NotFound;