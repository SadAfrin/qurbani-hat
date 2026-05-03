
import React from 'react';
import Link from 'next/link';
import { GiCow } from 'react-icons/gi';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase border border-orange-100">
              <GiCow size={18} /> Premium Livestock Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Better Quality <br /> 
              <span className="text-orange-600">Sacrificial</span> <br />
              Animals.
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Choose from the healthiest and best-bred cattle for your sacred traditions. Fast delivery and secure transactions guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Link href="/animals" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none px-12 h-16 rounded-2xl shadow-xl shadow-orange-200 text-lg font-black transition-all hover:scale-105 active:scale-95">
                Explore Market
              </Link>
              <Link href="/register" className="btn btn-outline border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-200 text-gray-700 px-10 h-16 rounded-2xl text-lg font-bold">
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 w-full max-w-xl bg-orange-200/30">
            <div className="relative aspect-square bg-white/40 backdrop-blur-xl border border-white/60 rounded-[50px] shadow-2xl flex items-center justify-center p-12 group overflow-hidden">
              
              {/* Opacity increased from 10 to 40 for better visibility */}
              <GiCow className="text-[250px] md:text-[350px] text-orange-600/40 group-hover:scale-110 transition-transform duration-700 ease-out" />
              
              <div className="absolute top-12 left-8 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50">
                <p className="text-orange-600 text-3xl font-black">100%</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Healthy Verified</p>
              </div>

              <div className="absolute bottom-12 right-8 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50">
                <p className="text-gray-800 text-2xl font-black">10+</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Stock Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;