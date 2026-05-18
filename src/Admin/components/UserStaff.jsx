import React, { useState } from 'react';
import { Pencil, Trash2, Plus } from 'lucide-react';

const UsersStaff = () => {
    
  const [users, setUsers] = useState([
    { id: 'USR001', name: 'Admin', role: 'Administrator', phone: '9876543210', status: 'Active' },
    { id: 'USR002', name: 'Rajesh Kumar', role: 'Cashier', phone: '8823456789', status: 'Active' },
    { id: 'USR003', name: 'Pooja Sharma', role: 'Salesman', phone: '9988776655', status: 'Active' },
    { id: 'USR004', name: 'Amit Joshi', role: 'Store Manager', phone: '8776554433', status: 'Active' },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Users / Staff</h2>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Plus size={16} />
            Add User
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-4">User ID</th>
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Role</th>
                <th className="py-4 px-4">Phone</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-600">{user.id}</td>
                  <td className="py-4 px-4 font-semibold text-gray-800">{user.name}</td>
                  <td className="py-4 px-4 text-gray-500">{user.role}</td>
                  <td className="py-4 px-4 text-gray-600">{user.phone}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-100">
                      ● {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-3">
                      <button 
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        title="Edit User"
                      >
                        <Pencil size={16} />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete User"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default UsersStaff;