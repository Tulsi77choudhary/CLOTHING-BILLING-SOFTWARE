import React from 'react';
import { Download, ChevronDown, Calendar, FileText, ShoppingBag, Box, TrendingUp, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  
  const chartData = [
    { name: '01 May', sales: 9000 },
    { name: '05 May', sales: 11000 },
    { name: '10 May', sales: 15000 },
    { name: '15 May', sales: 12000 },
    { name: '20 May', sales: 11000 },
    { name: '25 May', sales: 9500 },
    { name: '31 May', sales: 14000 },
  ];

  const sidebarItems = [
    { label: 'Sales Report', icon: TrendingUp, active: true },
    { label: 'Purchase Report', icon: ShoppingBag, active: false },
    { label: 'Stock Report', icon: Box, active: false },
    { label: 'Profit & Loss', icon: FileText, active: false },
    { label: 'Top Selling Products', icon: TrendingUp, active: false },
    { label: 'Customer Report', icon: Users, active: false },
  ];

  const kpis = [
    { label: 'Total Sales', value: '₹ 1,25,430', color: 'text-green-600' },
    { label: 'Total Purchases', value: '₹ 93,250', color: 'text-slate-800' },
    { label: 'Total Profit', value: '₹ 32,180', color: 'text-green-600' },
    { label: 'Total Orders', value: '320', color: 'text-slate-800' },
  ];

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar Navigation */}
      <div className="w-64 border-r border-slate-100 p-6 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-6 px-4">Reports</h2>
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              item.active ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-slate-50/30">
        {/* Filters Top Bar */}
        <div className="flex flex-wrap gap-4 items-center mb-8">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm cursor-pointer">
            This Month <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm">
            <Calendar size={16} className="text-slate-400" />
            01/05/2024 - 31/05/2024
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
            Generate
          </button>
          <button className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-slate-50">
            <Download size={16} /> Export
          </button>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{kpi.label}</p>
              <h3 className={`text-xl font-bold mt-2 ${kpi.color}`}>{kpi.value}</h3>
            </div>
          ))}
        </div>

        {/* Sales Chart Section */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wide">Sales Overview</h4>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;