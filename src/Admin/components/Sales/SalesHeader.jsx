import React from 'react';
import { 
  Menu, 
  Search, 
  Plus, 
  Maximize, 
  Bell, 
  Grid, 
  ChevronDown 
} from 'lucide-react';

const SalesHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 md:px-6 py-3 bg-white border-b border-gray-100">
      
      {/* Left: Toggle & Title */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-gray-500 hover:bg-gray-50 p-1 rounded transition-colors lg:hidden">
          <Menu size={20} />
        </button>
        <div className="shrink-0">
          <h1 className="text-base md:text-lg font-bold text-gray-900 leading-tight">Sales</h1>
          <nav className="hidden xs:block text-[10px] text-gray-400">
            <span>Home</span> <span className="mx-1">{'>'}</span> <span className="text-gray-500">Sales</span>
          </nav>
        </div>
      </div>

      {/* Middle: Command Search - Hidden on small mobile, expands on tablet */}
      <div className="hidden md:relative md:flex md:flex-1 md:max-w-md md:mx-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-16 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
          placeholder="Search anything..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-gray-400 bg-white border border-gray-200 rounded">
            Ctrl K
          </kbd>
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile Search Icon - Only visible when the main search is hidden */}
        <button className="md:hidden p-2 text-gray-500">
          <Search size={20} />
        </button>

        {/* Action Button - Text hidden on small screens to save space */}
        <button className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white p-2 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-shadow shadow-sm">
          <Plus size={16} /> 
          <span className="hidden sm:inline whitespace-nowrap">New Invoice</span>
        </button>

        {/* Icon Utilities - Hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-1 border-x border-gray-100 px-2">
          <IconButton icon={<Maximize size={18} />} className="hidden lg:block" />
          <div className="relative">
            <IconButton icon={<Bell size={18} />} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
              3
            </span>
          </div>
          <IconButton icon={<Grid size={18} />} />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 md:gap-3 pl-2 cursor-pointer group">
          <img
            src="https://via.placeholder.com/40" 
            alt="Admin"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-gray-200"
          />
          <div className="hidden lg:block text-left">
            <p className="text-xs font-bold text-gray-900 leading-none">Admin</p>
            <p className="text-[10px] text-gray-500 mt-1">Administrator</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ icon, className = "" }) => (
  <button className={`p-2 text-gray-500 hover:bg-gray-50 hover:text-indigo-600 rounded-lg transition-all ${className}`}>
    {icon}
  </button>
);

export default SalesHeader;