import React from "react";
import About from "../components/About/About";
import Feature from "../components/Feature/Feature";
import Contact from "../components/Contact/Contect";
import Price from "../components/Price/Price";
import { CustomerRoutes } from "../Routers/CustomerRouters";

import {
    Receipt,
    ShoppingBag,
    ChartBar,
    Headset,
} from "@phosphor-icons/react";

const features = [
    {
        title: "Smart Billing",
        icon: <Receipt size={22} />,
    },
    {
        title: "Easy to Use",
        icon: <ShoppingBag size={22} />,
    },
    {
        title: "Secure & Reliable",
        icon: <ChartBar size={22} />,
    },
    {
        title: "24/7 Support",
        icon: <Headset size={22} />,
    },
];

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-purple-100">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center justify-between gap-14">

                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left w-full flex flex-col ">

                    <h1 className="text-5xl sm:text-7xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Smart Clothing <br />

                        <span className="text-purple-700">
                            Billing Software
                        </span>
                    </h1>

                    <p className="mt-2 text-sm sm:text-base text-gray-800 mx-auto lg:mx-0">
                        All-in-one solution to manage billing, inventory <br className="hidden sm:block" />
                        and customers and grow your clothing business.
                    </p>

                    {/* Features */}
                    <div className="mt-4 flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-2 w-full">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-300/50 transition duration-200 whitespace-nowrap min-w-max"
                            >
                                {/* Icon */}
                                <div className="w-5 h-5 text-purple-700 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>

                                {/* Text */}
                                <span className="text-gray-800 text-sm md:text-base font-medium">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <button
                            className="bg-purple-600 text-white px-7 py-3 rounded-xl hover:bg-purple-700 transition duration-300 shadow-md w-full sm:w-auto">
                            Request Demo
                        </button>

                        <button
                            className="border border-gray-500 px-7 py-3 rounded-xl hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                            Explore Features →
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div
                    className="flex-1 w-full flex justify-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9dK4kvKfmS3HYyM3VvT7YVswL5_uVbbpGQ&s"
                        alt="Billing Software"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto object-cover"
                    />
                </div>
            </section>

            <section id="about">
                <About />
            </section>

            <section id="features">
                <Feature />
            </section>
            <section id="pricing">
                <Price />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;