import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus, Save, X } from "lucide-react";

const AddCustomers = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerId: "CU" + Math.floor(1000 + Math.random() * 9000),
    name: "",
    phone: "",
    email: "",
    total: "",
    outstanding: "",
    group: "Regular",
    status: "Active"
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
    console.log("Saving New Customer Data:", formData);
    navigate("/admin/customers");
  };

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen p-6">

      {/* Top Header Card */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/customers")}
            className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <UserPlus size={20} className="text-[#9155FD]" /> Add New Customer
            </h1>
            <p className="text-xs text-gray-500">Create new client profiles for your retail dashboard ledger</p>
          </div>
        </div>
      </div>

      {/* Main Input Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-w-4xl">

        <div className="p-6 space-y-6">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-1 border-b border-gray-50">
            Account Profile Mapping
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Customer ID (Read Only) */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Customer ID</label>
              <input
                type="text"
                name="customerId"
                disabled
                value={formData.customerId}
                className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-500 font-medium select-none cursor-not-allowed"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Customer Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ravi Kumar"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Contact Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. ravi@gmail.com"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Customer Segment Group */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Customer Group</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-700 cursor-pointer"
              >
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            {/* Profile Status */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Profile Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-700 cursor-pointer"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* FIXED: Total Purchase */}
            <div>
              <label
                className="block text-xs font-semibold text-gray-600 mb-1.5"
              >Total Purchase (₹)
              </label>
              <input
                type="number"
                name="total"
                value={formData.total}
                onChange={handleChange}
                placeholder="e.g. 5000"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* FIXED: Outstanding */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Outstanding (₹)</label>
              <input
                type="number"
                name="outstanding"
                value={formData.outstanding}
                onChange={handleChange}
                placeholder="e.g. 1200"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

          </div>
        </div>

        {/* --- Action Buttons (Footer) --- */}
        <div className="bg-gray-50/70 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => navigate("/admin/customers")}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <X size={16} /> Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 text-sm font-medium text-white bg-[#9155FD] hover:bg-[#7e3ff2] rounded-lg shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Save size={16} /> Save Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomers;