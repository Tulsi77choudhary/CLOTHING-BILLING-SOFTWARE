import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Avatar, InputBase, Badge } from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  QrCodeScanner,
  Add as AddIcon,
  NotificationsNone,
  KeyboardArrowDown,
  Person as PersonIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import CartSection from './CartSection';
import CategoryBar from './CategoryBar';
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
    <Box
      sx={{ minHeight: '100vh', bgcolor: '#F3F4F6', color: '#111827' }}
    >
      {/* NAVBAR */}
      <AppBar
        position="sticky"
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
          minHeight: '64px',
          px: { xs: 2, md: 3 }
        }}>

          {/* Left Side: Menu & Title */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Typography
              variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem', whiteSpace: 'nowrap' }}
            >
              POS / Billing
            </Typography>
          </Box>

          {/* Middle: Search Bar */}
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            order: { xs: 3, md: 2 },
            width: { xs: '100%', md: 'auto' }
          }}>
            <SearchBox>
              <SearchIcon
                sx={{ color: '#9CA3AF', fontSize: 20, mr: 1 }}
              />
              <InputBase
                placeholder="Search by Product name, SKU or Barcode"
                sx={{ flexGrow: 1, fontSize: '0.85rem' }}
              />
              <IconButton
                size="small" sx={{ color: '#374151' }}
              >
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
            <IconButton
              sx={{ bgcolor: '#F9FAFB' }}
            >
              <Badge
                badgeContent={3}
                color="error"
                overlap="circular"
              >
                <NotificationsNone sx={{ color: '#374151' }} />
              </Badge>
            </IconButton>

            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', ml: 1 }}
            >
              <Avatar
                sx={{ width: 38, height: 38, bgcolor: '#DBEAFE', color: '#1E40AF' }}
              >
                <PersonIcon />
              </Avatar>
              <Box 
              sx={{ display: { xs: 'none', lg: 'block' } }}>
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
      </AppBar>

      {/* MAIN DASHBOARD CONTENT AREA */}
      {/* display: "flex" और flexDirection: { xs: "column", md: "row" } से ये डेस्कटॉप पर हमेशा साइड-बाय-साइड ही रहेगा */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          alignItems: "flex-start"
        }}
      >
        {/* बायाँ हिस्सा: Categories और Products */}
        <Box sx={{ flex: { xs: "1 1 100%", md: 8 }, width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
          <CategoryBar />
          <AllProducts />
        </Box>

        {/* दायाँ हिस्सा: Cart Section (यह अब हमेशा राइट में चिपका रहेगा) */}
        <Box sx={{
          flex: { xs: "1 1 100%", md: 4 },
          width: "100%",
          position: { md: "sticky" },
          top: { md: "88px" },
          bgcolor: "white",
          borderRadius: "18px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.04)"
        }}>
          <CartSection />
        </Box>
      </Box>

    </Box>
  );
}

export default Billing;