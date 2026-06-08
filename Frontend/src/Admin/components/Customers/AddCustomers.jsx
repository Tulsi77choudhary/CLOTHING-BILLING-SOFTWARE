import React, { useState, useEffect } from "react";
import { UserPlus, Save, X } from "lucide-react";
import { useSelector } from "react-redux";

const AddCustomerModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    customerId: "",
    name: "",
    phone: "",
    email: "",
    total: "",
    outstanding: "",
    group: "Regular",
    status: "Active"
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        customerId: "CU" + Math.floor(1000 + Math.random() * 9000),
        name: "",
        phone: "",
        email: "",
        total: "",
        outstanding: "",
        group: "Regular",
        status: "Active"
      }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    if (onSave) onSave(formData);
    onClose();
  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

      {/* Modal Container */}
      <div className="bg-white w-full max-w-2xl rounded-xl border border-gray-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#9155FD]/10 rounded-lg">
              <UserPlus size={20} className="text-[#9155FD]" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">Add New Customer</h1>
              <p className="text-xs text-gray-500">Create new client profile for your retail ledger</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Input Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

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

              {/* Total Purchase */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Total Purchase (₹)</label>
                <input
                  type="number"
                  name="total"
                  value={formData.total}
                  onChange={handleChange}
                  placeholder="e.g. 5000"
                  className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
                />
              </div>

              {/* Outstanding */}
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

          {/* Modal Footer Actions */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Cancel
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
    </div>
  );
};

export default AddCustomerModal;