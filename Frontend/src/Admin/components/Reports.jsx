import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Stack,
  Avatar,
  Box,
  Typography,
  IconButton,
  Drawer
} from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Download,
  ChevronDown,
  Calendar,
  FileText,
  ShoppingBag,
  Box as BoxIcon,
  TrendingUp,
  Users,
  Menu
} from 'lucide-react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [openExport, setOpenExport] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState("excel");

  const handleOpenExport = () => setOpenExport(true);
  const handleCloseExport = () => setOpenExport(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const chartData = [
    { name: '01 May', sales: 9000 },
    { name: '05 May', sales: 11000 },
    { name: '10 May', sales: 15000 },
    { name: '15 May', sales: 12000 },
    { name: '20 May', sales: 11000 },
    { name: '25 May', sales: 9500 },
    { name: '31 May', sales: 14000 },
  ];

  const sidebarItems = [
    { label: 'Sales Report', icon: TrendingUp, active: true },
    { label: 'Purchase Report', icon: ShoppingBag, active: false },
    { label: 'Stock Report', icon: BoxIcon, active: false }, // Fixed Box to BoxIcon
    { label: 'Profit & Loss', icon: FileText, active: false },
    { label: 'Top Selling Products', icon: TrendingUp, active: false },
    { label: 'Customer Report', icon: Users, active: false },
  ];

  const kpis = [
    { label: 'Total Sales', value: '₹ 1,25,430', color: 'text-green-600' },
    { label: 'Total Purchases', value: '₹ 93,250', color: 'text-slate-800' },
    { label: 'Total Profit', value: '₹ 32,180', color: 'text-green-600' },
    { label: 'Total Orders', value: '320', color: 'text-slate-800' },
  ];

  // Sidebar Content Component (Reused for Desktop and Mobile Drawer)
  const SidebarContent = () => (
    <div className="w-64 border-r border-slate-100 p-6 flex flex-col gap-2 h-full bg-white">
      <h2 className="text-xl font-bold mb-6 px-4">Reports</h2>
      {sidebarItems.map((item, index) => (
        <button
          key={index}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
            item.active ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <item.icon size={18} />
          {item.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      
      {/* --- DESKTOP SIDEBAR --- */}
      <div className="hidden lg:block">
        <SidebarContent />
      </div>

      {/* --- MOBILE DRAWER SIDEBAR --- */}
      <Drawer open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <div onClick={toggleMobileMenu} className="h-full">
          <SidebarContent />
        </div>
      </Drawer>

      {/* === EXPORT POPUP DIALOG === */}
      <Dialog
        open={openExport}
        onClose={handleCloseExport}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "16px", p: { xs: 1, sm: 2 } }
        }}
      >
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 1 }}>

            <IconButton
              onClick={handleCloseExport}
              sx={{ position: 'absolute', top: 12, right: 12, color: '#9CA3AF' }}
            >
              <CloseIcon />
            </IconButton>

            <Avatar sx={{ bgcolor: '#ECFDF5', color: '#10B981', width: 56, height: 56, mb: 1 }}>
              <FileDownloadOutlinedIcon sx={{ fontSize: 32 }} />
            </Avatar>

            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1F2937', textAlign: 'center' }}>
              Export Products
            </Typography>

            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
              Choose your preferred format to download the complete product catalogue.
            </Typography>

            {/* Format Selection Cards (Responsive Layout) */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, width: '100%', mb: 1 }}>
              {/* Excel Format Card */}
              <Box
                onClick={() => setExportFormat("excel")}
                sx={{
                  flex: 1,
                  border: exportFormat === 'excel' ? '2px solid #10B981' : '2px solid #E5E7EB',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: exportFormat === 'excel' ? '#F0FDF4' : 'transparent',
                  '&:hover': { bgcolor: '#F0FDF4' }
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
                onClick={() => setExportFormat("csv")}
                sx={{
                  flex: 1,
                  border: exportFormat === 'csv' ? '2px solid #10B981' : '2px solid #E5E7EB',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  bgcolor: exportFormat === 'csv' ? '#F0FDF4' : 'transparent',
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
            </Box>

            {/* Action Buttons (Responsive Layout) */}
            <Stack direction={{ xs: 'column-reverse', sm: 'row' }} spacing={2} sx={{ width: '100%', mt: 3 }}>
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
                  console.log(`Downloading ${exportFormat} logic here...`);
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

      {/* === MAIN CONTENT AREA === */}
      <div className="flex-1 p-4 md:p-8 bg-slate-50/30 w-full overflow-hidden">
        
        {/* Mobile Header Bar */}
        <div className="flex lg:hidden justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-xl font-bold text-slate-800">Reports</h2>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Filters Top Bar */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center mb-8">
          <div className="flex items-center justify-between sm:justify-start gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm cursor-pointer">
            <span className="flex items-center gap-1">This Month</span> <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm justify-center sm:justify-start">
            <Calendar size={16} className="text-slate-400" />
            01/05/2024 - 31/05/2024
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 w-full sm:w-auto">
            Generate
          </button>
          <button 
            className="flex items-center justify-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-lg text-sm hover:bg-slate-50 w-full sm:w-auto"
            onClick={handleOpenExport}
          >
            <Download size={16} /> Export
          </button>
        </div>

        {/* KPI Grid (1 Column on Mobile, 2 on Tablet, 4 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{kpi.label}</p>
              <h3 className={`text-lg md:text-xl font-bold mt-2 ${kpi.color}`}>{kpi.value}</h3>
            </div>
          ))}
        </div>

        {/* Sales Chart Section */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-100 shadow-sm">
          <h4 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wide">Sales Overview</h4>
          <div className="h-64 sm:h-72 w-full overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%" minWidth={400}>
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar
                  dataKey="sales"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={25}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;