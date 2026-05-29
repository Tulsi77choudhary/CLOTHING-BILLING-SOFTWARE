import React from 'react';
import { FileText } from 'lucide-react';

const RecentSales = () => {
  const salesData = [
    { id: 'INV-000123', date: '31/05/2024', amount: '4,250.00' },
    { id: 'INV-000122', date: '31/05/2024', amount: '2,800.00' },
    { id: 'INV-000121', date: '30/05/2024', amount: '1,650.00' },
    { id: 'INV-000120', date: '30/05/2024', amount: '3,450.00' },
    { id: 'INV-000119', date: '30/05/2024', amount: '2,100.00' },
  ];

  return (
    <div className="w-full max-w-sm bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-bold text-gray-800">Recent Sales</h2>
        <button className="text-xs font-semibold text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      {/* Sales List */}
      <div className="space-y-4">
        {salesData.map((sale) => (
          <div key={sale.id} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              {/* Icon Container */}
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                <FileText size={16} />
              </div>
              
              {/* Invoice Info */}
              <div>
                <p className="text-xs font-bold text-gray-900 leading-none">{sale.id}</p>
                <p className="text-[10px] text-gray-400 mt-1">{sale.date}</p>
              </div>
            </div>

            {/* Amount */}
            <div className="text-right">
              <p className="text-xs font-black text-gray-800">₹ {sale.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSales;