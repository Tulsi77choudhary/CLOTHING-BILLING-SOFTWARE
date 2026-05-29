import React from 'react';
import { Plus, Download, Upload, Pencil, Trash2, Search, Filter, Bell } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const InventoryDashboard = () => {

  const navigate = useNavigate();
  
  const inventory = [
    { id: 1, name: 'Cotton T-Shirt', variant: 'M / Black', sku: 'TSH001-BLK-M', qty: 45, reorder: 10, cost: 299, value: 13455, status: 'In Stock' },
    { id: 2, name: 'Formal Shirt', variant: 'L / Sky Blue', sku: 'FSH002-SKY-L', qty: 32, reorder: 8, cost: 599, value: 19168, status: 'In Stock' },
    { id: 4, name: 'Bomber Jacket', variant: 'L / Black', sku: 'JKT001-BLK-L', qty: 6, reorder: 10, cost: 1499, value: 8994, status: 'Low Stock' },
    { id: 6, name: 'Track Pants', variant: 'M / Black', sku: 'TRP001-BLK-M', qty: 0, reorder: 8, cost: 499, value: 0, status: 'Out of Stock' },
  ];

  const stats = [
    { label: 'Total Items', value: 236, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'In Stock', value: 198, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Low Stock', value: 28, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Out of Stock', value: 10, color: 'text-red-600', bg: 'bg-red-100' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Stock / Inventory</h1>
          <p className="text-slate-500 text-sm">Manage your stock and inventory details</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="text-slate-400 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">4</span>
          </div>
          <button 
          onClick={() => navigate('/admin/inventory/add')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-indigo-700">
            <Plus size={18} /> Add Stock
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search by Product Name, SKU or Barcode..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <select className="border border-slate-200 rounded-lg px-4 py-2 text-slate-600 focus:outline-none">
          <option>All Categories</option>
        </select>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium">Apply</button>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Product Name</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase">SKU</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase text-center">Stock Qty</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Unit Cost</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-slate-800">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.variant}</div>
                </td>
                <td className="p-4 text-sm text-slate-600">{item.sku}</td>
                <td className="p-4 text-center font-bold">
                  <span className={item.qty < item.reorder ? 'text-orange-500' : 'text-green-600'}>
                    {item.qty}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    item.status === 'In Stock' ? 'bg-green-100 text-green-700' : 
                    item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-medium">₹ {item.cost.toLocaleString()}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                      <Trash2 size={16} />
                    </button>
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

export default InventoryDashboard;