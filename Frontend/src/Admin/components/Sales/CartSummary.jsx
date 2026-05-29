import React from 'react';
import { CheckCircle, Pause, XCircle } from 'lucide-react';

const CartSummary = () => {
  const summaryData = {
    subTotal: "5,560.00",
    discount: "328.00",
    taxableAmount: "5,232.00",
    cgst: "155.80",
    sgst: "155.80",
    grandTotal: "6,543.60",
    receivedAmount: "6,543.60",
    change: "0.00"
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h2 className="text-sm font-bold text-gray-800 mb-6">Cart Summary (4 Items)</h2>

      {/* Pricing Breakdown */}
      <div className="space-y-3 pb-6 border-b border-dashed border-gray-200 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Sub Total</span>
          <span className="font-bold text-gray-800">{summaryData.subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Discount</span>
          <span className="font-bold text-green-500">{summaryData.discount}</span>
        </div>
        <div className="flex justify-between pt-1">
          <span className="text-gray-500">Taxable Amount</span>
          <span className="font-bold text-gray-800">{summaryData.taxableAmount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">CGST (2.5%)</span>
          <span className="font-bold text-gray-800">{summaryData.cgst}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">SGST (2.5%)</span>
          <span className="font-bold text-gray-800">{summaryData.sgst}</span>
        </div>
      </div>

      {/* Totals Section */}
      <div className="py-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-gray-800">Grand Total</span>
          <span className="text-xl font-black text-indigo-700">₹ {summaryData.grandTotal}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">Received Amount</span>
          <input 
            type="text" 
            value={summaryData.receivedAmount} 
            className="w-32 text-right p-2 border border-gray-200 rounded-lg text-sm font-bold focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">Change</span>
          <span className="text-sm font-bold text-green-600">₹ {summaryData.change}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-100">
          <CheckCircle size={18} /> Complete Sale
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors">
            <Pause size={14} /> Hold Sale
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors border border-gray-100">
            <XCircle size={14} /> Cancel Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;