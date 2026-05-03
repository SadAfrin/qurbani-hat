import React from 'react';
import Link from 'next/link';
import { GiCow } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-10 pb-6 rounded-2xl">
      <div className="max-w-[88rem] mx-auto md:px-8 bg-orange-200 bg-opacity-30 px-6 md:px-28 py-10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo & About Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GiCow size={35} className="text-orange-600" />
              <span className="text-2xl font-black text-orange-600 tracking-tighter">
                Qurbanir<span className="text-gray-800">HaT</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Your trusted platform to find the best livestock for Qurbani. We are committed to delivering healthy and quality animals right to your doorstep.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 text-sm font-medium">
              <li>Address: Dhaka, Bangladesh</li>
              <li>Phone: +880 1234 567890</li>
              <li>Email: support@qurbanirhat.com</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Social Links</h3>
            <div className="flex justify-center md:justify-end gap-5 text-gray-600">
              <a href="#" className="hover:text-orange-600 transition-all hover:scale-110"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-all hover:scale-110"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-all hover:scale-110"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-all hover:scale-110"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        <div className="divider before:bg-gray-100 after:bg-gray-100 my-8 opacity-50"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 font-bold">
          <p>© 2026 QurbanirHaT. All Rights Reserved.</p>
          <p className="tracking-widest uppercase text-gray-400">Built by <span className="text-orange-600">SADIA.A</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;