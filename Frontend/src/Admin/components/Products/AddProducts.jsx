import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PackagePlus, UploadCloud, Info } from 'lucide-react';
import { createProduct } from '../../../State/Product/Action';


const AddProduct = () => {

  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);
  
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    category: '',
    brand: '',
    price: '',
    stock: '',
    status: '',
    size: '',
    
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
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-4xl">

        {/* Section Heading Header */}
        <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
          <PackagePlus className="text-blue-600" size={22} />
          <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

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
                placeholder="SKU "
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
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Pricing Details *
            </label>
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-gray-400 block mb-1">Purchase Price</span>
                <input
                  type="number"
                  name="purchasePrice"
                  required
                  value={product.purchasePrice}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
                />
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-1">Status</span>
                <select
                  name="status"
                  value={product.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
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
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
                >
                  <option value="">Select Size</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
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
    </div>
  );
};

export default AddProduct;