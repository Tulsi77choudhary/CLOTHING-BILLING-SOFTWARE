import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct } from '../../../State/Product/Action';
import { PackagePlus, UploadCloud, Info, X } from 'lucide-react';

const AddProducts = ({ onClose }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);

  const [product, setProduct] = useState({
    name: '',
    sku: '',
    category: '',
    brand: '',
    purchasePrice: '',
    sellingPrice: '', 
    status: '',
    stockQuantity: '', 
    size: '',
    image: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Product Information:', product);
    dispatch(createProduct(product));
  };

  return (
    <div className="w-full mx-auto p-6 bg-white relative rounded-xl max-w-4xl">

       <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-50 p-1 rounded-full hover:bg-gray-50"
        >
          <X size={24} />
        </button>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Section Heading Header */}
        <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
          <PackagePlus className="text-blue-600" size={22} />
          <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md flex items-center gap-2">
            <Info size={16} /> {error}
          </div>
        )}

        {/* Product Title Name */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1">
            Product Name *
          </label>
          <div className="col-span-3">
            <input
              type="text"
              name="name"
              required
              value={product.name}
              onChange={handleChange}
              placeholder="e.g., Slim Fit Denim Jacket"
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
            />
          </div>
        </div>

        {/* Identifier Settings Row: SKU & Brand */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1">
            Identifiers
          </label>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <input
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              placeholder="SKU"
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
            />
            <select
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
            >
              <option value="">Select Brand</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
              <option value="Levis">Levis</option>
              <option value="Zara">Zara</option>
              <option value="H&M">H&M</option>
            </select>
          </div>
        </div>

        {/* Placement Categories Setup */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1">
            Category *
          </label>
          <div className="col-span-3">
            <select
              name="category"
              required
              value={product.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
            >
              <option value="" disabled>Select Primary Category</option>
              <option value="apparel">Apparel & Clothing</option>
              <option value="footwear">Footwear</option>
              <option value="accessories">Accessories</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>

        <hr className="border-gray-100 my-2" />

        {/* Financial Architecture Grid Matrix: Pricing Elements */}
        <div className="grid grid-cols-4 items-start gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1 pt-2">
            Pricing Details *
          </label>
          <div className="col-span-3 grid grid-cols-3 gap-4">
            
            {/* Purchase Price */}
            <div className='flex flex-col gap-1'>
              <span className="text-xs text-gray-400 block mb-1">Purchase Price</span>
              <input
                type="number"
                name="purchasePrice"
                required
                min="0"
                step="0.01"
                value={product.purchasePrice}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>

            {/* Selling Price */}
            <div className='flex flex-col gap-1'>
              <span className="text-xs text-gray-400 block mb-1">Selling Price</span>
              <input
                type="number"
                name="sellingPrice" // कैमलकेस नाम किया
                required
                min="0"
                step="0.01"
                value={product.sellingPrice} // सही स्टेट वैल्यू से कनेक्ट किया
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>

            {/* Status */}
            <div className='flex flex-col gap-1'>
              <span className="text-xs text-gray-400 block mb-1">Status</span>
              <select
                name="status"
                value={product.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 bg-white"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Out Of Stock">Out Of Stock</option>
              </select>
            </div>

          </div>
        </div>

        {/* Operational Metrics Profile: Stock Allocations */}
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1">
            Stock Settings
          </label>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-gray-400 block mb-1">Initial Stock Quantity *</span>
              <input
                type="number"
                name="stockQuantity"
                required
                min="0"
                value={product.stockQuantity}
                onChange={handleChange}
                placeholder="e.g., 50"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
            <div>
              <span className="text-xs text-gray-400 block mb-1">Sizes</span>
              <select
                name="size"
                value={product.size}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 bg-white"
              >
                <option value="">Select Size</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Media File Upload Dropzone */}
        <div className="grid grid-cols-4 items-start gap-4">
          <label className="text-sm font-medium text-gray-600 col-span-1 pt-2">
            Product Image
          </label>
          <div className="col-span-3">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors relative cursor-pointer group min-h-[120px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {previewUrl ? (
                <div className="relative w-24 h-24 rounded border border-gray-100 overflow-hidden">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="text-center flex flex-col items-center">
                  <UploadCloud size={24} className="text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
                  <p className="text-xs font-medium text-gray-700">Click to upload image</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Supports PNG, JPG, WEBP</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Context Footer Action Area Row elements */}
        <div className="flex justify-between items-center pt-5 border-t border-gray-100 mt-4">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Info size={14} className="text-gray-300" /> Fields marked with an asterisk (*) are strictly required.
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm transition-colors duration-150`}
            >
              {loading ? 'Publishing...' : 'Publish Product'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default AddProducts;