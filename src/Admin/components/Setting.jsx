import React, { useState } from 'react';

const Settings = () => {

  const [formData, setFormData] = useState({
    businessName: 'Fashion Store',
    phonePrimary: '9876543210',
    phoneSecondary: '',
    emailPrimary: 'info@fashionstore.com',
    emailSecondary: '',
    address: '123, MG Road, Indore, Madhya Pradesh - 452001',
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, logo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Business Settings:', formData);
    // Add API submission logic here
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-4xl">
        
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-8">Business Settings</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Business Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Business Name
            </label>
            <div className="col-span-3">
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Phone Fields */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Phone
            </label>
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phonePrimary"
                value={formData.phonePrimary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
              <input
                type="text"
                name="phoneSecondary"
                value={formData.phoneSecondary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Email Fields */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Email
            </label>
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <input
                type="email"
                name="emailPrimary"
                value={formData.emailPrimary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
              <input
                type="email"
                name="emailSecondary"
                value={formData.emailSecondary}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Address
            </label>
            <div className="col-span-3">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Logo File Upload */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Logo
            </label>
            <div className="col-span-3">
              <input
                type="file"
                name="logo"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 cursor-pointer file:cursor-pointer border border-gray-200 rounded-md py-1 px-2 shadow-sm"
              />
            </div>
          </div>

          {/* Submit Action Row */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-150"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Settings;