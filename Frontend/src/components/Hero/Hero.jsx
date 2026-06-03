// import React from "react";
// import Feature from "../components/Feature/Feature";
// import Contact from "../components/Contact/Contect";
// import { CustomerRoutes } from "../Routers/CustomerRouters";
// import {
//     Receipt,
//     ShoppingBag,
//     ChartBar,
//     Headset,
// } from "@phosphor-icons/react";

// const features = [
//     {
//         title: "Smart Billing",
//         icon: <Receipt size={22} />,
//     },
//     {
//         title: "Easy to Use",
//         icon: <ShoppingBag size={22} />,
//     },
//     {
//         title: "Secure & Reliable",
//         icon: <ChartBar size={22} />,
//     },
//     {
//         title: "24/7 Support",
//         icon: <Headset size={22} />,
//     },
// ];

// const Hero = () => {
//     return (
//         <div className="w-full min-h-screen bg-purple-200">
//             {/* Hero Section */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center justify-between gap-14">

//                 {/* Left Content */}
//                 <div className="flex-1 text-center lg:text-left w-full flex flex-col -mt-8">

//                     <h1 className="text-4xl sm:text-6xl md:text-4xl font-bold text-gray-800 leading-tight">
//                         Smart Clothing <br />

//                         <span className="text-purple-700">
//                             Billing Software
//                         </span>
//                     </h1>

//                     <p className="mt-2 text-sm sm:text-base text-gray-800 mx-auto lg:mx-0">
//                         All-in-one solution to manage billing, inventory <br className="hidden sm:block" />
//                         and customers and grow your clothing business.
//                     </p>

//                     {/* Features */}
//                     <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">

//                         {features.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-300 transition duration-200"
//                             >

//                                 {/* Icon */}
//                                 <div className="w-5 h-5 text-purple-700 flex items-center justify-center">
//                                     {item.icon}
//                                 </div>

//                                 {/* Text */}
//                                 <h1 className="text-gray-800 whitespace-nowrap text-sm sm:text-base">
//                                     {item.title}
//                                 </h1>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

//                         <button className="bg-purple-600 text-white px-7 py-3 rounded-xl hover:bg-purple-700 transition duration-300 shadow-md w-full sm:w-auto">
//                             Request Demo
//                         </button>

//                         <button className="border border-gray-300 px-7 py-3 rounded-xl hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
//                             Explore Features →
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="flex-1 w-full flex justify-center">
//                     <img
//                         src="https://th.bing.com/th/id/OIP.xNVbfiVHrNdYfBv9N9JkCgHaFD?w=232&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
//                         alt="Billing Software"
//                         className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto object-cover"
//                     />
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Hero;