import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box, ListItemText, ListItemButton, ListItem, List, ListItemIcon,
  Toolbar, CssBaseline, Drawer, AppBar, IconButton, Typography
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import CategoryIcon from '@mui/icons-material/Category';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReportIcon from '@mui/icons-material/Report';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";

import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Billing from "./components/Billing/Billing";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Sales from "./components/Sales/Sales";
import Purchases from "./components/Purchases";
import Inventory from "./components/Inventory";
import Reports from "./components/Reports";
import Offers from "./components/Offers";
import Expenses from "./components/Expenses";

const menu = [
  { name: "Dashboard", path: "/admin", Icon: <HomeIcon /> },
  { name: "POS/Billing", path: "/admin/billing", Icon: <AddCardIcon /> },
  { name: "Products", path: "/admin/products", Icon: <CategoryIcon /> },
  { name: "Customers", path: "/admin/customers", Icon: <SupportAgentIcon /> },
  { name: "Sales", path: "/admin/sales", Icon: <RealEstateAgentIcon /> },
  { name: "Purchases", path: "/admin/purchases", Icon: <ShoppingCartIcon /> },
  { name: "Inventory", path: "/admin/inventory", Icon: <InventoryIcon /> },
  { name: "Reports", path: "/admin/reports", Icon: <ReportIcon /> },
  { name: "Offers & Discounts", path: "/admin/offers", Icon: <LocalOfferIcon /> },
  { name: "Expenses", path: "/admin/expenses", Icon: <HomeIcon /> },
  { name: "Users / Staff", path: "/admin/users", Icon: <PeopleIcon /> },
  { name: "Settings", path: "/admin/settings", Icon: <SettingsIcon /> },
];

const drawerWidth = 240;

function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    if (!isLargeScreen) setMobileOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        bgcolor: "background.paper",
      }}
    >
      <Box>
        <div className="p-5 flex justify-center border-b border-gray-100">
          <h1 className="text-xl font-bold text-[#9155FD]">TSAR IT PVT LTD</h1>
        </div>
        <List sx={{ pt: 2 }}>
          {menu.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  mx: 1,
                  borderRadius: "8px",
                  mb: 0.5,
                  "&.Mui-selected": {
                    bgcolor: "#9155FD15",
                    color: "#9155FD",
                    "&:hover": { bgcolor: "#9155FD25" },
                    "& .MuiListItemIcon-root": { color: "#9155FD" }
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 45 }}>{item.Icon}</ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <List sx={{ borderTop: "1px solid #f3f4f6", mb: 2 }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ mx: 1, borderRadius: "8px" }}>
            <ListItemIcon sx={{ minWidth: 45 }}><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Admin Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* 1. AppBar for Mobile only */}
      {!isLargeScreen && (
        <AppBar position="fixed" sx={{ bgcolor: "white", color: "black", boxShadow: 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 800, color: "#9155FD" }}>
              TSAR IT PVT LTD
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* 2. Responsive Drawer */}
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      >
        {/* Mobile Drawer (Temporary) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer (Permanent) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, borderRight: "1px solid #e5e7eb" },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* 3. Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
          mt: { xs: 8, lg: 0 },
          bgcolor: "#fafbfd",
          overflowX: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="billing" element={<Billing />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="sales" element={<Sales />} />
          <Route path="purchases" element={<Purchases/>}/>
          <Route path="inventory" element={<Inventory/>} />
          <Route path="reports" element={< Reports/>}/>
          <Route path="offers" element={<Offers/>}></Route>
          <Route path="expenses" element={<Expenses/>}/>
        </Routes>
      </Box>
    </Box>
  );
}

export default Admin;