import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Info, Save, X } from "lucide-react";

const AddPurchase = () => {
  const navigate = useNavigate();

  // Aj ki date nikalne ke liye dynamic string generator
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  // Purchase table array structure ke exact match me initial state banayi hai
  const [formData, setFormData] = useState({
    id: "PUR" + Math.floor(1000 + Math.random() * 9000), // Auto-generated Purchase No style
    date: getTodayDate(),
    supplier: "",
    amount: "",
    payment: "Credit",
    status: "Received"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Amount formatting standard setup (adding ₹ symbol before tracking payload)
    const formattedPayload = {
      ...formData,
      amount: formData.amount.startsWith("₹") ? formData.amount : `₹ ${Number(formData.amount).toLocaleString('en-IN')}`
    };

    console.log("Saving New Purchase Document:", formattedPayload);
    // Yahan aap apna API dispatch hit kar sakte hain
    navigate("/admin/purchases"); // Redirecting back to purchases board matrix
  };

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen p-6">
      
      {/* Top Navigation Control Header Card */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/purchases")}
            className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#9155FD]" /> Record New Purchase
            </h1>
            <p className="text-xs text-gray-500">Log incoming inventory inventory invoice documents from suppliers</p>
          </div>
        </div>
      </div>

      {/* Main Structural Input Sheet Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-w-4xl">
        
        <div className="p-6 space-y-6">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-1 border-b border-gray-50">
            Invoice Property Mapping
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Purchase No Code */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Purchase Order No (Automatic)</label>
              <input
                type="text"
                name="id"
                disabled
                value={formData.id}
                className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-500 font-mono select-none cursor-not-allowed"
              />
            </div>

            {/* Document Creation Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Purchase Invoice Date *</label>
              <input
                type="text"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Registered Supplier Entity */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Supplier Name *</label>
              <input
                type="text"
                name="supplier"
                required
                value={formData.supplier}
                onChange={handleChange}
                placeholder="e.g. Classic Fashions, Style Zone"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Net Billable Amount */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Total Amount (₹) *</label>
              <input
                type="number"
                name="amount"
                required
                min="1"
                value={formData.amount}
                onChange={handleChange}
                placeholder="e.g. 25000"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Payment Method / Mode Terms */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Payment Terms Type</label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-700 cursor-pointer"
              >
                <option value="Credit">Credit Ledger Account</option>
                <option value="Cash">Cash Transaction</option>
                <option value="UPI/Bank">Digital UPI / NetBanking</option>
              </select>
            </div>

            {/* Document Fulfillment Status */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Fulfillment Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-700 cursor-pointer"
              >
                <option value="Received">Received (In Stock Warehouse)</option>
                <option value="Pending">Pending Delivery</option>
                <option value="Ordered">Ordered (Awaiting Dispatch)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Global Operational Action Footer Panel */}
        <div className="bg-gray-50/70 p-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Info size={14} className="text-gray-300 shrink-0" /> Fields marked with an asterisk (*) must be completed.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/purchases")}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors shadow-sm"
            >
              <X size={16} /> Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#9155FD] hover:bg-[#8046e6] rounded-lg transition-colors shadow-sm"
            >
              <Save size={16} /> Save Purchase
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default AddPurchase;