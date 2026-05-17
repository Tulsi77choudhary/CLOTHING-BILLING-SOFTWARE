import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const NavItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Features", to: "features" },
  { name: "Pricing", to: "pricing" },
  { name: "Contact", to: "contact" },
];

export const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-purple-100 fixed top-0 left-0 w-full z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                TS
              </div>

              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                TSIR IT PVT LTD
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center gap-10">
                {NavItems.map((item, index) => (
                  <li key={index} className="relative group pb-1">
                    
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      spy={true}
                      className="cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition duration-300"
                    >
                      {item.name}
                    </Link>

                    {/* Underline */}
                    <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <button 
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-500 transition duration-200"
              onClick={() => navigate("/login")}>
                Login
              </button>
            </div>

            {/* Mobile Button */}
            <DisclosureButton className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
              {open ? (
                <XMarkIcon className="block h-7 w-7" />
              ) : (
                <Bars3Icon className="block h-7 w-7" />
              )}
            </DisclosureButton>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden bg-purple-200 border-t border-gray-200">
            <div className="space-y-4 px-6 py-5">
              
              {NavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                Register Now
              </button>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;