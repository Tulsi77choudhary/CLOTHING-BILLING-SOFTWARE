import React from 'react';
import { Search, Filter, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const OffersTable = () => {
  const offers = [
    { id: 1, name: 'Summer Sale', type: 'Percentage', value: '15%', start: '01/05/2024', end: '31/05/2024', status: 'Active' },
    { id: 2, name: 'Flat 500 Off', type: 'Fixed Amount', value: '₹ 500', start: '01/05/2024', end: '12/05/2024', status: 'Expired' },
    { id: 3, name: 'Buy 2 Get 1', type: 'Buy X Get Y', value: 'Buy 2 Get 1', start: '10/05/2024', end: '25/05/2024', status: 'Active' },
    { id: 4, name: 'New User 10%', type: 'Percentage', value: '10%', start: '01/05/2024', end: '31/05/2024', status: 'Active' },
    { id: 6, name: 'Festival Special', type: 'Fixed Amount', value: '₹ 750', start: '01/06/2024', end: '15/06/2024', status: 'Scheduled' },
    { id: 7, name: 'Weekend Offer', type: 'Percentage', value: '5%', start: '18/05/2024', end: '19/05/2024', status: 'Expired' },
  ];

  // Helper to determine type badge colors
  const getTypeStyles = (type) => {
    switch (type) {
      case 'Percentage': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'Fixed Amount': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Buy X Get Y': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  // Helper to determine status badge colors
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Expired': return 'bg-red-100 text-red-700';
      case 'Scheduled': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">All Offers & Discounts</h2>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search offers..." 
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 outline-none">
          <option>All Types</option>
        </select>
        <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 outline-none">
          <option>All Status</option>
        </select>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
              <th className="py-4 px-4 font-semibold">#</th>
              <th className="py-4 px-4 font-semibold">Offer Name</th>
              <th className="py-4 px-4 font-semibold">Type</th>
              <th className="py-4 px-4 font-semibold">Value</th>
              <th className="py-4 px-4 font-semibold">Start Date</th>
              <th className="py-4 px-4 font-semibold">End Date</th>
              <th className="py-4 px-4 font-semibold text-center">Status</th>
              <th className="py-4 px-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {offers.map((offer, idx) => (
              <tr key={offer.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-4 text-slate-400">{idx + 1}</td>
                <td className="py-4 px-4 font-bold text-slate-800">{offer.name}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-md text-[10px] font-bold border ${getTypeStyles(offer.type)}`}>
                    {offer.type}
                  </span>
                </td>
                <td className="py-4 px-4 font-medium text-slate-700">{offer.value}</td>
                <td className="py-4 px-4 text-slate-600">{offer.start}</td>
                <td className="py-4 px-4 text-slate-600">{offer.end}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${getStatusStyles(offer.status)}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center gap-3">
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"><Eye size={16}/></button>
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"><Pencil size={16}/></button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={16}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center text-xs text-slate-400">
        <p>Showing 1 to 8 of 12 entries</p>
        <div className="flex items-center gap-1">
          <button className="p-2 border border-slate-200 rounded hover:bg-slate-50"><ChevronLeft size={14}/></button>
          <button className="px-3 py-1.5 bg-indigo-600 text-white rounded font-bold">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded hover:bg-slate-50">2</button>
          <button className="p-2 border border-slate-200 rounded hover:bg-slate-50"><ChevronRight size={14}/></button>
        </div>
      </div>
    </div>
  );
};

export default OffersTable;