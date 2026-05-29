import React, { useState } from 'react';

import { Plus, Download, Pencil, Trash2, Tag, Calendar } from 'lucide-react';

const AddOffer = () => {
 

  return (
    <div className="p-6 bg-[#FAFBFD] min-h-screen">
      
      {/* Upper Action Header Bar */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Tag size={22} className="text-[#9155FD]" /> Promotional Offers & Coupons
          </h1>
          <p className="text-xs text-gray-500">Manage campaign discounts, coupon parameters and validity matrix</p>
        </div>
        <div className="flex gap-3">
          <button 
            
            className="flex items-center gap-2 bg-[#9155FD] hover:bg-[#8046e6] text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm"
          >
            <Plus size={18} /> Create Offer
          </button>
          <button className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition shadow-sm">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Main Data Table Container */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Exactly mapping your requested structure */}
            <thead className="bg-slate-50 border-b border-slate-100">
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

            {/* Table Dynamic Content Rows */}
            <tbody className="text-gray-700 text-sm divide-y divide-gray-50">
              {offers.map((offer, index) => (
                <tr key={offer.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-4 text-gray-400 font-medium">{index + 1}</td>
                  <td className="py-4 px-4 font-semibold text-gray-800">{offer.name}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      offer.type === 'Percentage' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>
                      {offer.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-900">{offer.value}</td>
                  <td className="py-4 px-4 text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-300" /> {offer.startDate}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-300" /> {offer.endDate}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${
                      offer.status === 'Active' 
                        ? 'bg-green-50 text-green-600 border border-green-100' 
                        : 'bg-red-50 text-red-600 border border-red-100'
                    }`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button className="p-1 text-gray-400 hover:text-[#9155FD] transition-colors rounded-md hover:bg-gray-100">
                        <Pencil size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors rounded-md hover:bg-gray-100">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Dynamic Pagination Matrix */}
        <div className="p-4 flex justify-between items-center text-xs font-medium text-gray-500 border-t border-gray-100 bg-gray-50/50">
          <p>Showing 1 to {offers.length} of {offers.length} recorded promotions</p>
          <div className="flex gap-1">
            <button className="px-2.5 py-1 rounded border bg-white border-gray-200 text-gray-700 shadow-sm cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 rounded border bg-[#9155FD] text-white border-[#9155FD] shadow-sm">1</button>
            <button className="px-2.5 py-1 rounded border bg-white border-gray-200 text-gray-700 shadow-sm cursor-not-allowed">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddOffer;