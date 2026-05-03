import React from 'react';
import Link from 'next/link';
import { GiCow } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto bg-orange-200/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* 1. Left: Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <GiCow size={32} className="text-orange-600" />
              <span className="text-2xl font-black text-orange-600 tracking-tighter">
                Qurbanir<span className="text-gray-800">HaT</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
              Your trusted platform to find the best livestock for Qurbani. Healthy and quality animals at your doorstep.
            </p>
          </div>

          {/* 2. Middle: Contact Info (Always Centered) */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 text-sm font-medium">
              <li className="hover:text-orange-600 transition-colors">Dhaka, Bangladesh</li>
              <li><a href="tel:+8801234567890" className="hover:text-orange-600 transition-colors">+880 1234 567890</a></li>
              <li><a href="mailto:support@qurbanirhat.com" className="hover:text-orange-600 transition-colors">support@qurbanirhat.com</a></li>
            </ul>
          </div>

          {/* 3. Right: Social Links */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">Social Links</h3>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" className="p-2.5 bg-white/50 hover:bg-orange-600 hover:text-white text-gray-600 rounded-full transition-all duration-300 shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/40 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          <p className="opacity-70">© 2026 QurbanirHaT. All Rights Reserved.</p>
          <p>
            Built by <span className="text-orange-600">SADIA.A</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;