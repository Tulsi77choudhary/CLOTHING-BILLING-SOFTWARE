import React from 'react';
import { 
  Paper, Typography, Box, List, ListItemButton, ListItemIcon, ListItemText 
} from '@mui/material';
import { ReceiptLong, PersonAddAlt, ShoppingCart, LibraryAdd, ChevronRight 
} from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const QuickActions = () => {
  // Image ke according custom data structure lagaya hai
  const actions = [
    { text: 'Add New Product', icon: "", color: '#6236FF', bgColor: '#EEF2FF' },
    { text: 'Create New Bill', icon: <ReceiptLong fontSize="small" />, color: '#3B82F6', bgColor: '#EFF6FF' },
    { text: 'Add Customer', icon: <PersonAddAlt fontSize="small" />, color: '#10B981', bgColor: '#ECFDF5' },
    { text: 'Purchase Order', icon: <ShoppingCart fontSize="small" />, color: '#F59E0B', bgColor: '#FEF3C7' },
    { text: 'Stock Adjustment', icon: <LibraryAdd fontSize="small" />, color: '#EF4444', bgColor: '#FEF2F2' },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
        height: '100%',
        bgcolor: 'white'
      }}
    >
      {/* Title */}
      <Typography 
        variant="h6" 
        sx={{ fontWeight: 800, fontSize: '1rem', mb: 2, color: '#111827' }}
      >
        Quick Actions
      </Typography>

      {/* Actions List */}
      <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {actions.map((action, index) => (
          <ListItemButton
            key={index}
            sx={{
              p: 1.5,
              borderRadius: '12px',
              border: '1px solid #F3F4F6',
              bgcolor: 'white',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: '#F9FAFB',
                borderColor: '#E5E7EB',
                transform: 'translateY(-1px)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }
            }}
          >
            {/* Left Colorful Icon Box */}
            <ListItemIcon sx={{ minWidth: 'auto', mr: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: action.color, // Pure solid color background as per image
                  color: 'white', // Icon color white
                }}
              >
                {action.icon}
              </Box>
            </ListItemIcon>

            {/* Middle Action Text */}
            <ListItemText
              primary={action.text}
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#374151',
              }}
            />

            {/* Right Arrow */}
            <ChevronRight 
              sx={{ color: '#9CA3AF', fontSize: 18 }} 
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default QuickActions;