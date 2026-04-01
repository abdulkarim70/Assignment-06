import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-300 px-6 md:px-20 py-16">
      
      <div className="grid md:grid-cols-5 gap-10">
        
      
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 mb-6">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;