import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaStore, FaChevronLeft, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(1); // Step 1 or 2 handle karne ke liye
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl p-8 border border-gray-700/50">
        
        {/* --- Header & Progress Bar --- */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-8">
            <FaStore className="text-[#22c55e] text-2xl" />
            <h1 className="text-white text-2xl font-bold tracking-tight">SMMS Registration</h1>
          </div>

          <div className="relative w-full flex items-center justify-between px-2">
            {/* Step 1 Icon */}
            <div className={`z-10 p-2.5 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-[#22c55e] text-white' : 'bg-gray-600 text-gray-400'}`}>
              <FaUser size={16} />
            </div>
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-700 -translate-y-1/2"></div>
            <div className={`absolute top-1/2 left-0 h-[2px] bg-[#22c55e] -translate-y-1/2 transition-all duration-500 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
            {/* Step 2 Icon */}
            <div className={`z-10 p-2.5 rounded-full transition-all duration-300 ${step === 2 ? 'bg-[#22c55e] text-white' : 'bg-[#d1d5db] text-gray-600'}`}>
              <FaStore size={16} />
            </div>
          </div>
        </div>

        {/* --- Form Sections --- */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {step === 1 ? (
            /* STEP 1: Personal Details */
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <InputField icon={<FaUser />} label="Full Name" placeholder="Enter full name" type="text" />
              <InputField icon={<FaEnvelope />} label="Email" placeholder="Enter email" type="email" />
              <InputField icon={<FaPhone />} label="Phone" placeholder="Enter phone number" type="tel" />
              <InputField icon={<FaLock />} label="Password" placeholder="Set an account password" type="password" />
              <InputField icon={<FaLock />} label="Confirm Password" placeholder="Confirm your password" type="password" />
              
              <div className="flex items-center justify-between pt-4">
                <button 
                type="button" 
                className="text-gray-300 text-sm hover:underline"
                onClick={() => navigate('/login')}
                >
                  Back to Login
                </button>
                <button 
                  onClick={() => setStep(2)}
                  className="bg-[#0fb39a] hover:bg-[#0d9488] text-white px-10 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2"
                >
                  Next <FaChevronLeft className="rotate-180" size={12} />
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: Shop Details (As per your second image) */
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              <InputField icon={<FaStore />} label="Shop Name" placeholder="Enter shop name" type="text" />
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
                  <FaMapMarkerAlt size={14} /> Shop Address
                </label>
                <textarea 
                  rows="4"
                  placeholder="Enter shop address"
                  className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none transition-all placeholder:text-gray-500"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
                  <FaUsers size={14} /> Referred By <span className="text-gray-500 font-normal ml-1">(Optional)</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter referrer name or code (optional)"
                  className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 focus:ring-2 focus:ring-[#22c55e] outline-none transition-all placeholder:text-gray-500"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button 
                  onClick={() => setStep(1)}
                  className="bg-[#e2e8f0] text-[#1e293b] px-8 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all flex items-center gap-2"
                >
                  <FaChevronLeft size={12} /> Back
                </button>
                <button 
                  type="submit"
                  className="bg-[#0fb39a] hover:bg-[#0d9488] text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 active:scale-95"
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Reusable Input Component
const InputField = ({ icon, label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
      {React.cloneElement(icon, { size: 14 })} {label}
    </label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
    />
  </div>
);

export default Register;