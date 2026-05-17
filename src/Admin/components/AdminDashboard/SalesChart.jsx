import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Box, Paper, Typography, MenuItem, Select } from '@mui/material';

// Image {9BA40025-71E3-4814-B1C7-685742957A20}.png ke mutabiq dummy data
const data = [
  { day: '01 May', sales: 5000 },
  { day: '05 May', sales: 15000 },
  { day: '06 May', sales: 12000 },
  { day: '11 May', sales: 25000 },
  { day: '13 May', sales: 18000 },
  { day: '16 May', sales: 32000 },
  { day: '19 May', sales: 24000 },
  { day: '21 May', sales: 38000 },
  { day: '26 May', sales: 28000 },
  { day: '29 May', sales: 40000 },
  { day: '31 May', sales: 48000 },
];

const SalesChart = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
        width: '100%',
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1rem' }}>
          Sales Overview
        </Typography>
        <Select
          size="small"
          defaultValue="This Month"
          sx={{
            borderRadius: '10px',
            fontSize: '0.75rem',
            bgcolor: '#fff',
            minWidth: 120,
          }}
        >
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="Last Month">Last Month</MenuItem>
        </Select>
      </Box>

      {/* Chart Section */}
      <Box sx={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              {/* Purple Gradient for Area Background */}
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6236FF" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#6236FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#6B7280' }}
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#6236FF" // Purple Line
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorSales)"
              dot={{ r: 4, fill: '#fff', stroke: '#6236FF', strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default SalesChart;