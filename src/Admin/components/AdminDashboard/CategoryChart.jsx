import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { 
  Box, 
  Paper, 
  Typography, 
  MenuItem, 
  Select, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Data based on {16C510EA-A2BE-41FF-81BC-4399D6386834}.png
const data = [
  { name: 'Shirts', value: 40, color: '#6236FF' },
  { name: 'T-Shirts', value: 25, color: '#1A91FF' },
  { name: 'Jeans', value: 20, color: '#E93D82' },
  { name: 'Jackets', value: 15, color: '#FDB022' },
];

const CategoryChart = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mt: 3,
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
        height: '100%', // Dashboard layout mein barabar dikhne ke liye
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem' }}>
          Top Selling Categories
        </Typography>
        <Select
          size="small"
          defaultValue="This Month"
          sx={{ borderRadius: '10px', fontSize: '0.75rem', minWidth: 110 }}
        >
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="Today">Today</MenuItem>
        </Select>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Donut Chart */}
        <Box sx={{ width: '50%', height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55} // Donut shape ke liye
                outerRadius={80}
                paddingAngle={2} // Slices ke beech ka halka gap
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        {/* Legend List from {16C510EA-A2BE-41FF-81BC-4399D6386834}.png */}
        <Box sx={{ width: '45%' }}>
          <List dense disablePadding>
            {data.map((item) => (
              <ListItem 
                key={item.name} 
                disableGutters 
                sx={{ py: 0.5, display: 'flex', justifyContent: 'space-between' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FiberManualRecordIcon sx={{ color: item.color, fontSize: 12 }} />
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151' }}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700 }}>
                  {item.value}%
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default CategoryChart;