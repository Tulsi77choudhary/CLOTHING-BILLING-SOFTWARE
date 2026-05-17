import React from 'react';
import { Search, Filter, Plus, Download, Eye, Edit, Trash2 } from 'lucide-react';

const CustomerTable = () => {
  const customers = [
    { id: 1, customerId: 'CU0001', name: 'Ravi Kumar', phone: '+91 9876543210', email: 'ravi@gmail.com', group: 'Regular', totalPurchase: '₹ 12,450', outstanding: '₹ 1,250', status: 'Active' },
    { id: 2, customerId: 'CU0002', name: 'Sunita Sharma', phone: '+91 8765432109', email: 'sunita@gmail.com', group: 'Premium', totalPurchase: '₹ 8,760', outstanding: '₹ 0', status: 'Active' },
    { id: 1, customerId: 'CU0001', name: 'Ravi Kumar', phone: '+91 9876543210', email: 'ravi@gmail.com', group: 'Regular', totalPurchase: '₹ 12,450', outstanding: '₹ 1,250', status: 'Active' },
    { id: 2, customerId: 'CU0002', name: 'Sunita Sharma', phone: '+91 8765432109', email: 'sunita@gmail.com', group: 'Premium', totalPurchase: '₹ 8,760', outstanding: '₹ 0', status: 'Active' },

  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mt-2">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search customer by name, phone, email..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Groups</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Status</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-800 transition-colors">
            <Plus size={18} /> Add Customer
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase ">
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Customer ID</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Group</th>
              <th className="px-4 py-3 font-semibold">Total Purchase</th>
              <th className="px-4 py-3 font-semibold">Outstanding</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-4 text-gray-600">{customer.id}</td>
                <td className="px-4 py-4 font-medium text-gray-900">{customer.customerId}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden" />
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600">{customer.phone}</td>
                <td className="px-4 py-4 text-gray-600">{customer.email}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    customer.group === 'Premium' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {customer.group}
                  </span>
                </td>
                <td className="px-4 py-4 font-medium">{customer.totalPurchase}</td>
                <td className={`px-4 py-4 font-medium ${customer.outstanding !== '₹ 0' ? 'text-red-500' : 'text-green-500'}`}>
                  {customer.outstanding}
                </td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold uppercase">
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-md border border-gray-100 shadow-sm"><Eye size={16} /></button>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md border border-gray-100 shadow-sm"><Edit size={16} /></button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md border border-gray-100 shadow-sm"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default CustomerTable;