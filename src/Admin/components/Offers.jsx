import React from 'react';
import { Plus, Bell, User, Ticket, Tag, Percent, Gift } from 'lucide-react';
import OfferTable from './OfferTable';

const Offers = () => {
  const metrics = [
    {
      label: 'Total Offers',
      value: '12',
      subText: 'Active Offers: 8',
      subColor: 'text-purple-600',
      icon: Ticket,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      label: 'Active Offers',
      value: '8',
      subText: 'Expired Offers: 4',
      subColor: 'text-red-500',
      icon: Percent,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      label: 'Total Discounts Given',
      value: '₹ 45,230.00',
      subText: 'This Month',
      subColor: 'text-blue-500',
      icon: Tag,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      label: 'Total Savings to Customers',
      value: '₹ 1,32,560.00',
      subText: 'This Month',
      subColor: 'text-orange-500',
      icon: Gift,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="p-8 bg-slate-50/50 min-h-screen font-sans">
      {/* Header with Breadcrumbs */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Offers & Discounts</h1>
          <nav className="flex text-xs text-slate-400 mt-1">
            <span className="hover:text-slate-600 cursor-pointer">Home</span>
            <span className="mx-2">{'>'}</span>
            <span className="text-slate-600">Offers & Discounts</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-indigo-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-indigo-800 transition-all shadow-sm">
            <Plus size={18} /> Add Offer
          </button>

          <div className="relative p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
            <Bell size={20} className="text-slate-500" />
            <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
              4
            </span>
          </div>

          <div className="p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
            <User size={20} className="text-slate-500" />
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className={`${metric.iconBg} p-3 rounded-xl`}>
                <metric.icon className={metric.iconColor} size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-tight">
                  {metric.label}
                </p>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {metric.value}
                </h3>
              </div>
            </div>
            <div className={`text-[11px] font-bold ${metric.subColor} mt-2`}>
              {metric.subText}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-6'>
        <OfferTable />
      </div>

    </div>
  );
};

export default Offers;