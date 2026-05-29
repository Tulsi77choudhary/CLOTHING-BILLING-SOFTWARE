import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Avatar, InputBase, Badge, Grid } from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  QrCodeScanner,
  Add as AddIcon,
  NotificationsNone,
  KeyboardArrowDown,
  Person as PersonIcon
} from '@mui/icons-material';
import CartSection from './CartSection';
import CategoryBar from './CategoryBar';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import AllProducts from './AllProducts';

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '2px 12px',
  border: '1px solid #E5E7EB',
  width: '100%',
  maxWidth: '450px',
  height: '40px',
}));

const Billing = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #E5E7EB',
        color: '#111827',
        width: '100%'
      }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        py: { xs: 1, md: 0 },
        minHeight: '64px'
      }}>

        {/* Left Side: Menu & Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton edge="start" sx={{ color: '#374151' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
            POS / Billing
          </Typography>
        </Box>

        {/* Middle: Search Bar (Responsive) */}
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 3, md: 2 },
          width: { xs: '100%', md: 'auto' }
        }}>
          <SearchBox>
            <SearchIcon sx={{ color: '#9CA3AF', fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search by Product name, SKU or Barcode"
              sx={{ flexGrow: 1, fontSize: '0.85rem' }}
            />
            <IconButton size="small" sx={{ color: '#374151' }}>
              <QrCodeScanner sx={{ fontSize: 20 }} />
            </IconButton>
          </SearchBox>
        </Box>

        {/* Right Side: Actions & Profile */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          order: { xs: 2, md: 3 }
        }}>

          {/* New Transaction Button */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: '#4F46E5',
              textTransform: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 3,
              height: '40px',
              whiteSpace: 'nowrap',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#4338CA', boxShadow: 'none' }
            }}
          >
            New Transaction
          </Button>

          {/* Notification */}
          <IconButton sx={{ bgcolor: '#F9FAFB' }}>
            <Badge badgeContent={3} color="error" overlap="circular">
              <NotificationsNone sx={{ color: '#374151' }} />
            </Badge>
          </IconButton>

          {/* User Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', ml: 1 }}>
            <Avatar
              sx={{ width: 38, height: 38, bgcolor: '#DBEAFE', color: '#1E40AF' }}
            >
              <PersonIcon />
            </Avatar>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1.2 }}>
                Cashier
              </Typography>
              <Typography sx={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 500 }}>
                Store 1
              </Typography>
            </Box>
            <KeyboardArrowDown sx={{ fontSize: 18, color: '#9CA3AF' }} />
          </Box>

        </Box>
      </Toolbar>

      <div className='p-8'>
        <Grid container spacing={3}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={4}>
            <div className='shadow-lg shadow-gray-400'>
              <CategoryBar />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-400'>
              <AllProducts />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-400'>
              <CartSection />
            </div>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
}

export default Billing;