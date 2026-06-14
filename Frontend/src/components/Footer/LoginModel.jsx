import React from 'react';
import { FaUserShield, FaTimes } from 'react-icons/fa';

const LoginModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            //style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')" }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            {/* Modal Box */}
            <div className="border rounded-xl shadow-lg max-w-md w-full p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={20} />
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4 flex items-center  gap-2">
                    <FaUserShield className="text-purple-600" /> Login 
                </h2>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-medium">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default LoginModel;