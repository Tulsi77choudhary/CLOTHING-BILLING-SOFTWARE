import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Plus, Tag, Save, X } from "lucide-react";

const AddOffer = ({ open, handleClose }) => {
  const initialFormState = {
    name: "",
    type: "Percentage",
    value: "",
    startDate: "",
    endDate: "",
    status: "Active",
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (open) {
      setFormData(initialFormState);
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Form Ledger:", formData);
    setFormData(initialFormState);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{

        '& .MuiDialog-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(226, 226, 226, 0.06)',
          backdropFilter: '',
        }
      }}
      PaperProps={{
        sx: {
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          overflow: "hidden",
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
          transform: 'none',
          backfaceVisibility: 'hidden',
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <div className="w-full bg-white text-gray-800 antialiased">

          {/* --- Header (Matches Image Layout Exactly) --- */}
          <div className="flex items-start justify-between p-5 border-b border-gray-100 bg-white">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-[#4F26B5]/10 rounded-xl mt-0.5">
                <Tag size={20} className="text-[#4F26B5]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-950 tracking-tight leading-tight">
                  Create New Offer
                </h2>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  Create promotional offers and discount campaigns for your retail dashboard ledger
                </p>
              </div>
            </div>
            <IconButton
              onClick={handleClose}
              size="small"
              sx={{ color: '#9CA3AF', '&:hover': { bgcolor: '#F3F4F6' }, mt: -0.5 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>

          {/* --- Form Body Layout --- */}
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-5">

              {/* Category Capitalized Heading */}
              <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Campaign & Discount Mapping
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                {/* Offer Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    Offer Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Summer Festive Sale"
                    className="w-full h-11 px-3.5 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-900 transition-colors placeholder:text-gray-300"
                  />
                </div>

                {/* Offer Type */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    Offer Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full h-11 px-3 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-800 cursor-pointer transition-colors"
                  >
                    <option value="Percentage">Percentage (%)</option>
                    <option value="Flat">Flat Amount (₹)</option>
                  </select>
                </div>

                {/* Discount Value */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    Discount Value *
                  </label>
                  <input
                    type="number"
                    name="value"
                    required
                    min="0"
                    max={formData.type === "Percentage" ? "100" : undefined}
                    value={formData.value}
                    onChange={handleChange}
                    placeholder={formData.type === "Percentage" ? "e.g. 20" : "e.g. 500"}
                    className="w-full h-11 px-3.5 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-900 transition-colors placeholder:text-gray-300"
                  />
                </div>

                {/* Profile Status */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    Profile Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full h-11 px-3 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-800 cursor-pointer transition-colors"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                {/* Start Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-700 cursor-pointer transition-colors"
                  />
                </div>

                {/* End Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-600">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    required
                    min={formData.startDate}
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 text-sm bg-[#FAFBFD] border border-gray-200 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#4F26B5]/10 focus:border-[#4F26B5] text-gray-700 cursor-pointer transition-colors"
                  />
                </div>

              </div>
            </div>

            {/* --- Footer (Exact Layout & Colors From Image) --- */}
            <div className="px-6 py-4 flex items-center justify-end gap-4 border-t border-gray-100 bg-white">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-md transition-colors flex items-center gap-1.5"
              >
                <X size={16} /> Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#4F26B5] hover:bg-[#3D1D93] rounded-md shadow-sm transition-all active:scale-[0.98] flex items-center gap-1.5"
              >
                <Save size={16} /> Save Offer
              </button>
            </div>
          </form>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddOffer;