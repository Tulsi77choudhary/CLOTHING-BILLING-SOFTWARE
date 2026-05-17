import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full py-16 bg-purple-200">
            <div className="w-full mx-auto mt-10">

                {/* CTA Box */}
                <div className="w-full relative overflow-hidden bg-purple-700 px-6 py-10 flex flex-col items-center justify-between gap-6 rounded-lg">

                    {/* Left Content */}
                    <div className="text-center lg:text-left z-10">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">
                            Ready to Grow Your Clothing Business?
                        </h1>

                        <p className="mt-3 text-gray-200 max-w-2xl text-sm sm:text-base">
                            Join thousands of businesses already using our
                            software to simplify their operations.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 z-10">
                        <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                            Request Demo
                        </button>

                        {/* Contact Us Button - Ab ye modal open karega */}
                        <button 
                            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-700 transition duration-300"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Decorative Dots */}
                    <div className="absolute right-4 bottom-4 opacity-20">
                        <div className="grid grid-cols-5 gap-2">
                            {[...Array(35)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Component Yahan Call Hoga */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};

export default Contact;