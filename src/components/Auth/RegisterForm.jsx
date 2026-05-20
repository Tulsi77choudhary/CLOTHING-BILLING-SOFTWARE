import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaStore, FaMapMarkerAlt, FaUsers, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Aapka complete collected registration object ek hi click me:
    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
      shopName: data.get("shopName"),
      shopAddress: data.get("shopAddress"),
      referredBy: data.get("referredBy"),
    };

    console.log("Collected Registration Data:", userData);
    // Yahan aap apna dispatch(register(userData)) call kar sakte hain
  };

  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center p-4 font-sans mt-8">
      {/* Container Card */}
      <div className="w-full max-w-lg bg-[#1e293b] rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700/50 relative">

        {/* --- Close Button --- */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-gray-800/50 z-20"
          aria-label="Close registration window"
        >
          <FaTimes size={18} />
        </button>

        {/* --- Header --- */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <FaStore className="text-[#22c55e] text-2xl" />
            <h1 className="text-white text-2xl font-bold tracking-tight">Registration</h1>
          </div>
          <p className="text-gray-400 text-xs mt-1">Please fill in all details to set up your store</p>
        </div>

        {/* --- Single Form Element --- */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* --- SECTION 1: Personal Details --- */}
          <div className="space-y-4">
            <h2 className="text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-gray-700/40 pb-1.5">
              Personal Details
            </h2>
            
            <InputField icon={<FaUser />} label="Full Name" name="fullName" placeholder="Enter full name" type="text" required />
            <InputField icon={<FaEnvelope />} label="Email" name="email" placeholder="Enter email" type="email" required />
            <InputField icon={<FaPhone />} label="Phone" name="phone" placeholder="Enter phone number" type="tel" required />
            
            {/* Password Grid Column side-by-side on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField icon={<FaLock />} label="Password" name="password" placeholder="Set password" type="password" required />
              <InputField icon={<FaLock />} label="Confirm Password" name="confirmPassword" placeholder="Confirm password" type="password" required />
            </div>
          </div>

          {/* Separation line separator */}
          <hr className="border-gray-700/40 my-2" />

          {/* --- SECTION 2: Shop Details --- */}
          <div className="space-y-4">
            <h2 className="text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-gray-700/40 pb-1.5">
              Shop Details
            </h2>

            <InputField icon={<FaStore />} label="Shop Name" name="shopName" placeholder="Enter shop name" type="text" required />

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
                <FaMapMarkerAlt size={14} /> Shop Address
              </label>
              <textarea
                name="shopAddress"
                required
                rows="3"
                placeholder="Enter shop address"
                className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
                <FaUsers size={14} /> Referred By <span className="text-gray-500 font-normal ml-1 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                name="referredBy"
                placeholder="Enter referrer name or code (optional)"
                className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* --- Footer Action Row --- */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700/40">
            <button
              type="button"
              className="text-gray-400 text-sm hover:text-white hover:underline transition-colors font-medium"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </button>
            <button
              type="submit"
              className="bg-[#0fb39a] hover:bg-[#0d9488] text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 active:scale-95 text-sm"
            >
              Register Account
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// Reusable Custom Input Component Block
const InputField = ({ icon, label, placeholder, type, name, required }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
      {React.cloneElement(icon, { size: 14 })} {label}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
    />
  </div>
);

export default Register;