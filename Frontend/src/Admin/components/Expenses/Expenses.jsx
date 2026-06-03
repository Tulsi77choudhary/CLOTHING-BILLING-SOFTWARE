import React from 'react';
import { Plus, Download } from 'lucide-react';

const Expenses = () => {
  const expenses = [
    { date: '31/05/2024', category: 'Rent', description: 'Shop Rent', amount: '15,000', mode: 'Bank Transfer' },
    { date: '30/05/2024', category: 'Electricity', description: 'Electricity Bill', amount: '2,450', mode: 'Cash' },
    { date: '29/05/2024', category: 'Salary', description: 'Staff Salary', amount: '12,000', mode: 'Bank Transfer' },
    { date: '28/05/2024', category: 'Marketing', description: 'Banner Printing', amount: '1,500', mode: 'Cash' },
    { date: '27/05/2024', category: 'Transportation', description: 'Delivery Charges', amount: '850', mode: 'UPI' },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
      {/* Header Actions */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
          <Plus size={18} /> Add Expense
        </button>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <Download size={18} /> Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
              <th className="py-4 px-6 font-semibold">Expense Date</th>
              <th className="py-4 px-6 font-semibold">Category</th>
              <th className="py-4 px-6 font-semibold">Description</th>
              <th className="py-4 px-6 font-semibold">Amount (₹)</th>
              <th className="py-4 px-6 font-semibold">Payment Mode</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {expenses.map((expense, index) => (
              <tr key={index} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6">{expense.date}</td>
                <td className="py-4 px-6 font-medium">{expense.category}</td>
                <td className="py-4 px-6 text-slate-500">{expense.description}</td>
                <td className="py-4 px-6 font-bold">{expense.amount}</td>
                <td className="py-4 px-6">
                  <span className={`font-semibold ${expense.mode === 'Cash' ? 'text-orange-600' : 'text-blue-600'}`}>
                    {expense.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;