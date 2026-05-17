import React from 'react';
import SalesChart from './SalesChart';
import CategoryChart from './CategoryChart';
import {
  Box, Grid, Paper, Typography, Button, IconButton, Avatar, Badge,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  InputBase, Divider, alpha, Chip, useTheme, useMediaQuery
} from '@mui/material';
import {
  Search, Notifications, Refresh, CalendarToday,
  TrendingUp, ShoppingBag, Group, BarChart, Inventory,
  ChevronRight, LocalPhone, Language, FiberManualRecord, Menu
} from '@mui/icons-material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// --- Colors ---
const PRIMARY_PURPLE = "#6236FF";
const SUCCESS_GREEN = "#10B981";
const WARNING_RED = "#EF4444";

// (Data same as previous response)
const lineData = [{ name: '01 May', value: 10000 }, { name: '06 May', value: 15000 }, { name: '11 May', value: 12000 }, { name: '16 May', value: 25000 }, { name: '21 May', value: 20000 }, { name: '26 May', value: 32000 }, { name: '31 May', value: 45000 }];
const categoryData = [{ name: 'Shirts', value: 40, color: '#6236FF' }, { name: 'T-Shirts', value: 25, color: '#3B82F6' }, { name: 'Jeans', value: 20, color: '#F43F5E' }, { name: 'Jackets', value: 15, color: '#F59E0B' }];
const paymentSummary = [{ name: 'Cash', value: 45230, color: '#10B981' }, { name: 'UPI', value: 35620, color: '#3B82F6' }, { name: 'Card', value: 25400, color: '#A855F7' }, { name: 'Net Banking', value: 19180, color: '#F59E0B' }];
const stats = [{ title: "Total Sales", value: "₹ 1,25,430", trend: "12.5%", icon: <TrendingUp />, color: "#A855F7" }, { title: "Total Orders", value: "320", trend: "8.3%", icon: <ShoppingBag />, color: "#8B5CF6" }, { title: "Total Customer", value: "560", trend: "15.2%", icon: <Group />, color: "#3B82F6" }, { title: "Total Profit", value: "₹ 35,430", trend: "10.1%", icon: <BarChart />, color: "#EC4899" }, { title: "Total Products", value: "1,245", sub: "Products in store", icon: <Inventory />, color: "#6366F1" }];

const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F8F9FA', minHeight: '100vh' }}>

      {/* --- Responsive Navbar --- */}
      <Paper elevation={0} sx={{ p: 1.5, display: 'flex', alignItems: 'center', bgcolor: 'white', borderBottom: '1px solid #E5E7EB' }}>
        <IconButton sx={{ mr: 1 }}><Menu /></IconButton>

        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F3F4F6', borderRadius: '10px', px: 2, width: isTablet ? 250 : 350 }}>
            <Search sx={{ color: 'grey.500', fontSize: 20 }} />
            <InputBase placeholder="Search anything..." sx={{ ml: 1, fontSize: '0.85rem', width: '100%' }} />
          </Box>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <IconButton><Badge badgeContent={5} color="error" overlap="circular"><Notifications /></Badge></IconButton>

        <Box sx={{ ml: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src="https://i.pravatar.cc/150?u=admin" sx={{ width: 32, height: 32 }} />
          {!isMobile && (
            <Box>
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700 }}>Admin</Typography>
              <Typography sx={{ fontSize: '0.65rem', color: 'grey.500' }}>Super Admin</Typography>
            </Box>
          )}
        </Box>
      </Paper>

      <Box sx={{ p: isMobile ? 2 : 4 }}>

        {/* --- Header & Action Row (Stack on Mobile) --- */}
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', mb: 4, gap: 2 }}>
          <Box>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: 800 }}>Dashboard</Typography>
            <Typography variant="caption" color="text.secondary">Software Activity Overview</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" size="small" startIcon={<CalendarToday />} sx={{ borderRadius: '8px', textTransform: 'none', bgcolor: 'white' }}>
              31 May, 2024
            </Button>
            <Button variant="contained" size="small" startIcon={<Refresh />} sx={{ borderRadius: '8px', textTransform: 'none', bgcolor: PRIMARY_PURPLE }}>
              Refresh
            </Button>
          </Box>
        </Box>

        {/* --- Stats Row (Horizontal Scroll on Mobile) --- */}
        <Grid container spacing={2} sx={{ mb: 4, flexWrap: isMobile ? 'nowrap' : 'wrap', overflowX: isMobile ? 'auto' : 'visible', pb: isMobile ? 2 : 0 }}>
          {stats.map((s, i) => (
            <Grid item key={i} xs={10} sm={6} md={2.4} sx={{ flexShrink: 0 }}>
              <Paper sx={{ p: 2, borderRadius: '16px', display: 'flex', alignItems: 'center', gap: 1.5, border: '1px solid #F3F4F6' }}>
                <Avatar sx={{ bgcolor: s.color, width: 40, height: 40 }}>{s.icon}</Avatar>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>{s.title}</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{s.value}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>

          {/* Sales Overview Chart - image {9BA40025-71E3-4814-B1C7-685742957A20}.png */}
          <Grid item xs={12} md={8}>
            <Box sx={{
              boxShadow: '0px 10px 15px -3px rgba(156, 163, 175, 0.3)', // shadow-lg shadow-gray-400 equivalent
              borderRadius: '16px'
            }}>
              <SalesChart />
            </Box>
          </Grid>

          {/* Top Selling Categories - image {16C510EA-A2BE-41FF-81BC-4399D6386834}.png */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              boxShadow: '0px 10px 15px -3px rgba(156, 163, 175, 0.3)',
              borderRadius: '16px',
              height: '100%'
            }}>
              <CategoryChart />
            </Box>
          </Grid>

        </Grid>

        {/* --- Footer --- */}
        <Box sx={{ mt: 5, textAlign: isMobile ? 'center' : 'left', borderTop: '1px solid #EEE', pt: 2 }}>
          <Typography variant="caption" color="text.secondary">© 2024 TSAR IT PVT LTD</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;