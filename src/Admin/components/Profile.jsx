import React, { useState } from 'react';
import { Camera, ShieldCheck } from 'lucide-react';

const Profile = () => {
  
  const [profile, setProfile] = useState({
    username: 'admin_fashion',
    fullName: 'System Administrator',
    emailPrimary: 'admin@fashionstore.com',
    emailSecondary: '',
    phonePrimary: '9876543210',
    phoneSecondary: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    avatar: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, avatar: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile changes saved:', profile);
   
  };

  return (
    <div className=" bg-gray-50  flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-4xl">
        
        {/* Title */}
        <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-xl font-bold text-gray-800">Admin Profile</h2>
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-md font-medium">
            <ShieldCheck size={14} /> Super Admin
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Profile Picture Upload Row */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Profile Photo
            </label>
            <div className="col-span-3 flex items-center gap-5">
              <div className="relative group w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                {previewUrl ? (
                  <img src={previewUrl} alt="Avatar Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl font-bold text-gray-400">AD</span>
                )}
                <label className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera size={18} />
                  <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                </label>
              </div>
              <div className="text-xs text-gray-400">
                <p className="font-medium text-gray-500">Upload a profile picture</p>
                <p>JPG, PNG or GIF. Max size of 2MB</p>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Account Username */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Username
            </label>
            <div className="col-span-3">
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
                disabled
              />
              <span className="text-xs text-gray-400 mt-1 block">Usernames cannot be changed after registration.</span>
            </div>
          </div>

          {/* Full Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Full Name
            </label>
            <div className="col-span-3">
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Contact Emails */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Email Address
            </label>
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <input
                type="email"
                name="emailPrimary"
                value={profile.emailPrimary}
                onChange={handleChange}
                placeholder="Primary Email"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
              <input
                type="email"
                name="emailSecondary"
                value={profile.emailSecondary}
                onChange={handleChange}
                placeholder="Alternative Email (Optional)"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          {/* Contact Phone Numbers */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-sm font-medium text-gray-600 col-span-1">
              Phone Number
            </label>
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phonePrimary"
                value={profile.phonePrimary}
                onChange={handleChange}
                placeholder="Primary Phone"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
              <input
                type="text"
                name="phoneSecondary"
                value={profile.phoneSecondary}
                onChange={handleChange}
                placeholder="Alternative Phone (Optional)"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Password Updates */}
          {/* <div className="grid grid-cols-4 items-start gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600 block">
                Change Password
              </label>
              <span className="text-xs text-gray-400 block mt-0.5">Leave blank if you don't want to update it.</span>
            </div>
            <div className="col-span-3 space-y-3">
              <input
                type="password"
                name="currentPassword"
                value={profile.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  name="newPassword"
                  value={profile.newPassword}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={profile.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm New Password"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800"
                />
              </div>
            </div>
          </div> */}

          {/* Submit Row */}
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-150"
            >
              Save Profile Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Profile;