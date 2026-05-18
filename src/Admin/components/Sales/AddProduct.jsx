import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PackagePlus, Info, Save, X } from "lucide-react";

const AddProduct = () => {
  const navigate = useNavigate();

  // Cart array structure ke properties ke hisab se exact initial state set ki hai
  const [formData, setFormData] = useState({
    name: "",
    sku: "SKU" + Math.floor(1000 + Math.random() * 9000), // Unique Auto SKU style
    size: "M",
    color: "",
    price: "",
    qty: 1,
    disc: 0, // Discount Percentage
    tax: 5,   // Tax Percentage Default (5%)
    img: "/placeholder.png", // Fallback local dynamic path
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Numbers wale fields ko string se number me convert karne ke liye parser
    const parsedValue = ["price", "qty", "disc", "tax"].includes(name) 
      ? Number(value) 
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product Structured Payload:", formData);
    // Yahan aap apna data array merge/context actions backend push handle kar sakte hain
    navigate("/admin/products"); // Submitting response hooks ke baad direct table screen redirection
  };

  return (
    <div className="w-full bg-[#FAFBFD] min-h-screen p-6">
      
      {/* Top Header Card Routing Action Panel */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <PackagePlus size={20} className="text-[#9155FD]" /> Add New Product
            </h1>
            <p className="text-xs text-gray-500">Configure catalog properties, pricing indices, and variants matrix matching</p>
          </div>
        </div>
      </div>

      {/* Main Structural Sheet Grid Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-w-5xl">
        
        <div className="p-6 space-y-6">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider pb-1 border-b border-gray-50">
            Cart Specification Mapping
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Product Item Title / Name */}
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Product Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Premium Cotton Polo Shirt"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Unique Code Mapping - SKU */}
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

            {/* Variant Type: Size */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Size Variant *</label>
              <input
                type="text"
                name="size"
                required
                value={formData.size}
                onChange={handleChange}
                placeholder="e.g. M, L, XL, 32, 34"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Variant Type: Color */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Color Variant *</label>
              <input
                type="text"
                name="color"
                required
                value={formData.color}
                onChange={handleChange}
                placeholder="e.g. Dark Blue, Crimson Red"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Base Retail Matrix Unit Price */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Unit Price (₹) *</label>
              <input
                type="number"
                name="price"
                required
                min="1"
                value={formData.price || ""}
                onChange={handleChange}
                placeholder="e.g. 799"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Initial Dynamic Quantity Inventory */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Stock Quantity (qty) *</label>
              <input
                type="number"
                name="qty"
                required
                min="1"
                value={formData.qty}
                onChange={handleChange}
                placeholder="1"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Item Allocation Discount Array */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Discount Default (%)</label>
              <input
                type="number"
                name="disc"
                min="0"
                max="100"
                value={formData.disc}
                onChange={handleChange}
                placeholder="0"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Financial Invoice Operational Tax */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tax Component Percentage (%)</label>
              <input
                type="number"
                name="tax"
                min="0"
                value={formData.tax}
                onChange={handleChange}
                placeholder="5"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 transition-shadow"
              />
            </div>

            {/* Asset Node / Image Asset Local String Routing */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Product Image Mock Path</label>
              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                placeholder="e.g. /images/shirt.png"
                className="w-full px-3 py-2 text-sm bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9155FD]/10 focus:border-[#9155FD] text-gray-800 text-left font-mono"
              />
            </div>

          </div>
        </div>

        {/* Global Control Footer Bar */}
        <div className="bg-gray-50/70 p-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Info size={14} className="text-gray-300 shrink-0" /> Asterisk (*) mark wale inputs filling arrays mandatory hain.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors shadow-sm"
            >
              <X size={16} /> Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-[#9155FD] hover:bg-[#8046e6] rounded-lg transition-colors shadow-sm"
            >
              <Save size={16} /> Save Product
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default AddProduct;