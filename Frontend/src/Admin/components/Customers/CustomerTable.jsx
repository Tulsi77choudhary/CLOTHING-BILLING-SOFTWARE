import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Stack,
  Avatar,
  Typography,
  Box,
  IconButton
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Search, Filter, Plus, Download, Eye, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerTable = () => {
  const [openExport, setOpenExport] = useState(false);

  const handleOpenExport = () => {
    setOpenExport(true);
  };

  const handleCloseExport = () => {
    setOpenExport(false);
  };

  const customers = [
    { id: 1, customerId: 'CU0001', name: 'Ravi Kumar', phone: '+91 9876543210', email: 'ravi@gmail.com', group: 'Regular', totalPurchase: '₹ 12,450', outstanding: '₹ 1,250', status: 'Active' },
    { id: 2, customerId: 'CU0002', name: 'Sunita Sharma', phone: '+91 8765432109', email: 'sunita@gmail.com', group: 'Premium', totalPurchase: '₹ 8,760', outstanding: '₹ 0', status: 'Active' },
    { id: 1, customerId: 'CU0001', name: 'Ravi Kumar', phone: '+91 9876543210', email: 'ravi@gmail.com', group: 'Regular', totalPurchase: '₹ 12,450', outstanding: '₹ 1,250', status: 'Active' },
    { id: 2, customerId: 'CU0002', name: 'Sunita Sharma', phone: '+91 8765432109', email: 'sunita@gmail.com', group: 'Premium', totalPurchase: '₹ 8,760', outstanding: '₹ 0', status: 'Active' },

  ];

  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 mt-2">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search customer by name, phone, email..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Groups</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Status</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/customers/add')}
            className="flex items-center gap-2 bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-800 transition-colors">
            <Plus size={18} /> Add Customer
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
            onClick={handleOpenExport}>
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <Dialog
        open={openExport}
        onClose={handleCloseExport}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "16px", p: 2 }
        }}
      >
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 2 }}>
            {/* क्लोज बटन */}
            <IconButton
              onClick={handleCloseExport}
              sx={{ position: 'absolute', top: 12, right: 12, color: '#9CA3AF' }}
            >
              {/* पिछले स्टेप में जो इम्पोर्ट किया था वही इस्तेमाल कर रहे हैं */}
              <CloseIcon />
            </IconButton>

            <Avatar sx={{ bgcolor: '#ECFDF5', color: '#10B981', width: 56, height: 56, mb: 1 }}>
              <FileDownloadOutlinedIcon sx={{ fontSize: 32 }} />
            </Avatar>

            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1F2937' }}>
              Export Products
            </Typography>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
              Choose your preferred format to download the complete product catalogue.
            </Typography>

            {/* Format Selection Cards */}
            <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 1 }}>
              {/* Excel Format Card */}
              <Box
                onClick={() => console.log('Excel format selected')}
                sx={{
                  flex: 1,
                  border: '2px solid #10B981', 
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: '#F0FDF4',
                  '&:hover': { bgcolor: '#DCFCE7' }
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#14532D' }}>
                  Excel Sheet
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Best for data review (.xlsx)
                </Typography>
              </Box>

              {/* CSV Format Card */}
              <Box
                onClick={() => console.log('CSV format selected')}
                sx={{
                  flex: 1,
                  border: '2px solid #E5E7EB',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#F9FAFB', borderColor: '#9CA3AF' }
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#374151' }}>
                  CSV File
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Best for integration (.csv)
                </Typography>
              </Box>
            </Stack>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2} sx={{ width: '100%', mt: 3 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleCloseExport}
                sx={{ borderRadius: '10px', textTransform: 'none', fontWeight: 600, borderColor: '#E5E7EB', color: '#374151' }}
              >
                Cancel
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  console.log("Downloading logic here...");
                  handleCloseExport();
                }}
                sx={{ borderRadius: '10px', textTransform: 'none', fontWeight: 600, bgcolor: '#10B981', '&:hover': { bgcolor: '#059669' } }}
              >
                Download Data
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase ">
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold">Customer ID</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Group</th>
              <th className="px-4 py-3 font-semibold">Total Purchase</th>
              <th className="px-4 py-3 font-semibold">Outstanding</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-4 py-4 text-gray-600">{customer.id}</td>
                <td className="px-4 py-4 font-medium text-gray-900">{customer.customerId}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden" />
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600">{customer.phone}</td>
                <td className="px-4 py-4 text-gray-600">{customer.email}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${customer.group === 'Premium' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                    {customer.group}
                  </span>
                </td>
                <td className="px-4 py-4 font-medium">{customer.totalPurchase}</td>
                <td className={`px-4 py-4 font-medium ${customer.outstanding !== '₹ 0' ? 'text-red-500' : 'text-green-500'}`}>
                  {customer.outstanding}
                </td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold uppercase">
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-md border border-gray-100 shadow-sm"><Eye size={16} /></button>
                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md border border-gray-100 shadow-sm"><Edit size={16} /></button>
                    <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-md border border-gray-100 shadow-sm"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CustomerTable;