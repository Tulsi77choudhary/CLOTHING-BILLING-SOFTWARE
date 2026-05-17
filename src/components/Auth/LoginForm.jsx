import React from 'react';
import { FaEnvelope, FaLock, FaStore, FaChevronRight, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {

 const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#1e293b] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl shadow-2xl p-8 border border-gray-700/50">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FaStore className="text-[#22c55e] text-3xl" />
            <h1 className="text-white text-3xl font-bold tracking-tight italic">SMMS</h1>
          </div>
          <p className="text-gray-400 text-sm">Welcome back! Please enter your details.</p>
        </div>

        {/* --- Form Section --- */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
              <FaEnvelope size={14} /> Email Address
            </label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-[#22c55e] text-sm font-semibold">
                <FaLock size={14} /> Password
              </label>
              <button type="button" className="text-xs text-gray-400 hover:text-[#22c55e] transition-colors">
                Forgot Password?
              </button>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-[#1e293b] border border-gray-500 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2">
            
            <button className='text-[#22c55e] font-bold hover:underline' >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-[#0fb39a] hover:bg-[#0d9488] text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-teal-900/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            Login <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1e293b] px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <button 
            type="button"
            className="w-full bg-transparent border border-gray-600 text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            <FaGoogle className="text-red-500" /> Google
          </button>
        </form>

        {/* --- Footer Section --- */}
        <p className="text-center mt-8 text-gray-400 text-sm">
          Don't have an account?{' '}
          <button className="text-[#22c55e] font-bold hover:underline"
          onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;