import React from 'react';
import Link from 'next/link';
import { GiCow } from 'react-icons/gi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-10 pb-6 rounded-2xl">
      <div className="max-w-[88rem] mx-auto md:px-8 bg-orange-200 bg-opacity-30 px-28 py-10 rounded-4xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GiCow size={35} className="text-orange-600" />
              <span className="text-2xl font-bold text-orange-600 tracking-tight">
                QurbanirHaT
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted platform to find the best livestock for Qurbani. We are committed to delivering healthy and quality animals right to your doorstep.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-800">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Address: Dhaka, Bangladesh</li>
              <li>Phone: +880 1234 567890</li>
              <li>Email: support@qurbanirhat.com</li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-lg font-bold text-gray-800">Social Links</h3>
            <div className="flex justify-center md:justify-end gap-4 text-gray-600">
              <a href="#" className="hover:text-orange-600 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-orange-600 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        <div className="divider before:bg-gray-100 after:bg-gray-100 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© 2026 QurbanirHaT. All Rights Reserved.</p>
          <p className="tracking-widest uppercase">Built by SADIA.A</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;