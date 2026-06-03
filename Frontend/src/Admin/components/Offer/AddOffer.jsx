import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Plus, Tag } from "lucide-react";

const AddOffer = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "Percentage",
    value: "",
    startDate: "",
    endDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offer Data:", formData);
    
    // Form submit hone ke baad values clear karne ke liye
    setFormData({
      name: "",
      type: "Percentage",
      value: "",
      startDate: "",
      endDate: "",
      status: "Active",
    });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <div className="bg-white">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Tag size={22} className="text-indigo-600" />
                Create New Offer
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Create promotional offers and discount campaigns
              </p>
            </div>

            <IconButton
              onClick={handleClose}
              sx={{
                bgcolor: "#F3F4F6",
                color: "#6B7280",
                "&:hover": {
                  bgcolor: "#E5E7EB",
                },
              }}
            >
              <CloseIcon size={20} />
            </IconButton>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Offer Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Offer Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Summer Sale"
                  required
                  className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition placeholder-gray-300"
                />
              </div>

              {/* Offer Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Offer Type
                </label>
                <div className="relative">
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition appearance-none cursor-pointer"
                  >
                    <option value="Percentage">Percentage (%)</option>
                    <option value="Flat">Flat Amount (₹)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Discount Value */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Discount Value
                </label>
                <input
                  type="number"
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  placeholder={formData.type === "Percentage" ? "e.g. 20" : "e.g. 500"}
                  required
                  min="0"
                  className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition placeholder-gray-300"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>
                <div className="relative">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition appearance-none cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition cursor-pointer"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  min={formData.startDate} // End date hamesha start date ke baad ki hogi
                  className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition cursor-pointer"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-gray-100">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 bg-indigo-700 text-white rounded-xl font-medium hover:bg-indigo-800 transition shadow-sm"
              >
                <Plus size={18} />
                Save Offer
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddOffer;