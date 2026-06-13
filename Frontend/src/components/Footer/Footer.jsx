
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  EnvelopeSimple,
  Globe,
  Phone,
  MapPin,
  TwitterLogoIcon,
} from "@phosphor-icons/react";

import { FaUserShield } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00001a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="w-10 h-10 rounded-lg bg-white text-[#0B0B45] flex items-center justify-center font-bold text-lg">
                TS
              </div>

              <h1 className="text-xl font-semibold">
                TSAR IT PVT LTD
              </h1>
            </div>

            <p className="mt-4 text-gray-300 text-sm leading-6">
              Smart solutions for your business growth and billing management.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">

              <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B0B45] transition">
                <FacebookLogo size={18} />
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B0B45] transition">
                <TwitterLogoIcon size={18} />
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B0B45] transition">
                <LinkedinLogo size={18} />
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#0B0B45] transition">
                <YoutubeLogo size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Contact Us
            </h2>

            <div className="space-y-4 text-gray-300 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <p> +91 7013375074 </p>
              </div>

              <div className="flex items-center gap-3">
                <EnvelopeSimple size={18} />
                <p>info@tsarit.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} />
                <p>www.tsaritservices.com</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Super Admin Login
            </h2>

            <p className="text-gray-300 text-sm mb-4">
              Sign in as an administrator to manage inventory, billing, sales reports, and customer records.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition whitespace-nowrap">
                <FaUserShield />
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
          © 2026 TSAR IT PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

