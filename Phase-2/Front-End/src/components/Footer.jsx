import React from 'react';
import logo from "../assets/logo.png"
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              {/* <div className="w-8 h-8 bg-white rounded-full mr-2"></div> */}
              {/* <span className="text-2xl font-bold">Orinix</span> */}
              <img src={logo} alt="" className='w-[190px] mr-10' />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Landingpage</a></li>
                <li><a href="#" className="hover:text-gray-300">Features</a></li>
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-300">Referral Program</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-300">Design</a></li>
                <li><a href="#" className="hover:text-gray-300">Themes</a></li>
                <li><a href="#" className="hover:text-gray-300">Illustrations</a></li>
                <li><a href="#" className="hover:text-gray-300">UI Kit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-300">License</a></li>
                <li><a href="#" className="hover:text-gray-300">Changelog</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-sm">
          © 2024 Orinix Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer