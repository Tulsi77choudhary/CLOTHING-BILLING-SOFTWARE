import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../State/Product/Action";
import { FaTimes } from 'react-icons/fa';

import { API_BASE_URL } from '../../../config/apiConfig';

const UpdateProductForm = ({ selectedProduct, handleClose }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.product);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    status: "",
    size: "",
    imageUrl: ""
  });

  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name || "",
        sku: selectedProduct.sku || "",
        category: selectedProduct.category || "",
        brand: selectedProduct.brand || "",
        price: selectedProduct.price || "",
        stock: selectedProduct.stock || "",
        status: selectedProduct.status || "Active",
        size: selectedProduct.size || "",
        imageUrl: selectedProduct.imageUrl || ""
      });

      if (selectedProduct.imageUrl) {
        const fullUrl = selectedProduct.imageUrl.startsWith("http")
          ? selectedProduct.imageUrl
          : selectedProduct.imageUrl.startsWith("/")
            ? `${API_BASE_URL}${selectedProduct.imageUrl}`
            : `${API_BASE_URL}/${selectedProduct.imageUrl}`;
        setPreviewUrl(fullUrl);
      } else {
        setPreviewUrl("");
      }
    }
  }, [selectedProduct]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    formDataObj.append("name", formData.name);
    formDataObj.append("sku", formData.sku);
    formDataObj.append("category", formData.category);
    formDataObj.append("brand", formData.brand);
    formDataObj.append("price", formData.price);
    formDataObj.append("stock", formData.stock);
    formDataObj.append("status", formData.status);
    formDataObj.append("size", formData.size);

    if (imageFile) {
      formDataObj.append("image", imageFile);
    }

    dispatch(updateProduct(selectedProduct.id, formDataObj));

    handleClose();
  };

  return (
    // 💡 max-h aur overflow ko remove kiya taaki form fixed size me fit ho jaye
    <div className="w-full max-w-3xl mx-auto bg-white p-5 rounded-xl shadow-md relative text-gray-800">

      {/* Close button */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
      >
        <FaTimes size={16} />
      </button>

      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Update Product Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">

          {/* Product Name */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">SKU</label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
              disabled // SKU generally editable nahi hona chahiye
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Size</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Price (₹)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Stock Qty</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              required
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
              required
            >
              <option value="Active">Active</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* 💡 Image Section ko upar set kiya grid ke andar hi compact look me */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Product Image</label>
            <div className="border border-dashed border-gray-300 hover:border-indigo-500 rounded-md p-2 flex items-center gap-3 relative cursor-pointer bg-gray-50 h-[38px] overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              <span className="text-xs text-gray-500 truncate">
                {formData.imageUrl ? "Image selected" : "Click to upload / change image"}
              </span>

              {previewUrl && (
                <div className="ml-auto w-7 h-7 rounded border border-gray-200 overflow-hidden shrink-0">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-3 border-t mt-4">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-1.5 border border-gray-300 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-md text-xs font-medium shadow-sm transition"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default UpdateProductForm;