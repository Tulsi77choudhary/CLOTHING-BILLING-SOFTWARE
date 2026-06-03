import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Layers, Info, Save, X } from "lucide-react";

const AddStock = () => {
  const navigate = useNavigate();

  // Inventory array ke mapping aur fields ke hisab se state initialize ki hai
  const [formData, setFormData] = useState({
    name: "",
    variant: "", // e.g., 'M / Black'
    sku: "SKU-" + Math.floor(100 + Math.random() * 900) + "-XYZ", // Auto SKU generator pattern
    qty: "",
    reorder: "",
    cost: "",
    status: "In Stock"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Numbers wale fields ko string se number me convert karne ke liye parser
    const parsedValue = ["qty", "reorder", "cost"].includes(name) 
      ? Number(value) 
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  // Status auto-calculate karne ka dynamic function based on rules
  const handleStatusAndSubmit = (e) => {
    e.preventDefault();
    
    let calculatedStatus = "In Stock";
    if (formData.qty === 0) {
      calculatedStatus = "Out of Stock";
    } else if (formData.qty <= formData.reorder) {
      calculatedStatus = "Low Stock";
    }

    const finalPayload = {
      ...formData,
      status: calculatedStatus,
      value: formData.qty * formData.cost // Total value calculation automatic (qty * cost)
    };

    console.log("Saving Stock/Inventory Record:", finalPayload);
    // Backend API trigger ya context array update yahan karein
    navigate("/admin/inventory"); // Wapas inventory dashboard list par bhejne ke liye
  };

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen p-6">
      
      {/* Top Header Panel */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/inventory")}
            className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Layers size={20} className="text-[#9155FD]" /> Add New Stock Item
            </h1>
            <p className="text-xs text-gray-500">Insert new retail assets, set reorder points and trace unit manufacturing cost</p>
          </div>
        </div>
      </div>

      {/* Main Grid Form Body */}
      <form onSubmit={handleStatusAndSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-w-4xl">
        
        <div className="p-6 space-y-6">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-1 border-b border-gray-50">
            Inventory Core Mapping
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Product Title Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Product Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Cotton T-Shirt"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Product Variant Combination */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Variant Specifier *</label>
              <input
                type="text"
                name="variant"
                required
                value={formData.variant}
                onChange={handleChange}
                placeholder="e.g. M / Black or L / Sky Blue"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Warehouse Mapping Code - SKU */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">SKU Code (Auto-Generated)</label>
              <input
                type="text"
                name="sku"
                required
                value={formData.sku}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-600 font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD]"
              />
            </div>

            {/* Item Cost Unit */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Unit Cost (₹) *</label>
              <input
                type="number"
                name="cost"
                required
                min="0"
                value={formData.cost}
                onChange={handleChange}
                placeholder="e.g. 299"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Opening Initial Quantities */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Stock Quantity (Opening) *</label>
              <input
                type="number"
                name="qty"
                required
                min="0"
                value={formData.qty}
                onChange={handleChange}
                placeholder="e.g. 45"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Reorder Safety Level Threshold */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Reorder Level Threshold *</label>
              <input
                type="number"
                name="reorder"
                required
                min="1"
                value={formData.reorder}
                onChange={handleChange}
                placeholder="e.g. 10 (Alert status when stock drops here)"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

          </div>
        </div>

        {/* Action Panel Footer Row */}
        <div className="bg-gray-50/70 p-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Info size={14} className="text-gray-300 shrink-0" /> Note: Status aur inventory values aapke fields ke adhar par auto-calculate honge.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/inventory")}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors shadow-sm"
            >
              <X size={16} /> Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#9155FD] hover:bg-[#8046e6] rounded-lg transition-colors shadow-sm"
            >
              <Save size={16} /> Save Item
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default AddStock;