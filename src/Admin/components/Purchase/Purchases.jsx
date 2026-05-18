import React from 'react';
import { Pencil, Trash2, Plus, Download } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const PurchaseTable = () => {
  const purchases = [
    { id: 'PUR0007', date: '31/05/2024', supplier: 'Classic Fashions', amount: '₹ 25,000', payment: 'Credit', status: 'Received' },
    { id: 'PUR0006', date: '30/05/2024', supplier: 'Trendy Wear Pvt. Ltd.', amount: '₹ 18,500', payment: 'Cash', status: 'Received' },
    { id: 'PUR0005', date: '28/05/2024', supplier: 'Style Zone', amount: '₹ 12,000', payment: 'Credit', status: 'Received' },
    { id: 'PUR0004', date: '26/05/2024', supplier: 'Fashion Hub', amount: '₹ 22,000', payment: 'Cash', status: 'Received' },
    { id: 'PUR0003', date: '27/05/2024', supplier: 'Modern Clothing Co.', amount: '₹ 15,750', payment: 'Credit', status: 'Received' },
  ];

  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Purchases</h1>
        <div className="flex gap-3">
          <button 
          onClick={() => navigate('/admin/purchases/add')}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            <Plus size={18} /> New Purchase
          </button>
          <button className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-md hover:bg-gray-50 transition">
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-4 px-6 font-semibold">Purchase No</th>
              <th className="py-4 px-6 font-semibold">Date</th>
              <th className="py-4 px-6 font-semibold">Supplier</th>
              <th className="py-4 px-6 font-semibold">Amount</th>
              <th className="py-4 px-6 font-semibold">Payment</th>
              <th className="py-4 px-6 font-semibold">Status</th>
              <th className="py-4 px-6 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {purchases.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="py-4 px-6 font-bold text-blue-700">{item.id}</td>
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.supplier}</td>
                <td className="py-4 px-6 font-medium">{item.amount}</td>
                <td className="py-4 px-6">{item.payment}</td>
                <td className="py-4 px-6">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center gap-4">
                    <button className="text-gray-500 hover:text-blue-600 transition">
                      <Pencil size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Section */}
        <div className="p-4 flex justify-between items-center text-sm text-gray-500 border-t border-gray-100">
          <p>Showing 1 to 5 of 35 entries</p>
          <div className="flex gap-1">
            {[1, 2, 3, '...', 7].map((page, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${
                  page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTable;