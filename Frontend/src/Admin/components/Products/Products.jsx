import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Grid,
  Paper,
  Select,
  MenuItem,
  Button,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Checkbox,
  TableBody,
  Chip,
  Pagination,
  PaginationItem
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import InventoryIcon from "@mui/icons-material/Inventory";
import WarningIcon from "@mui/icons-material/Warning";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

import { Products, getTotalProductCount } from "../../../State/Product/Action";
import { useSelector, useDispatch } from "react-redux";


const statsData = [
  { label: "Total Products", value: "256", sub: "All Products", icon: <InventoryIcon />, color: "#7C3AED", bg: "#F5F3FF" },
  { label: "Low Stock", value: "18", sub: "Reorder Soon", icon: <WarningIcon />, color: "#EA580C", bg: "#FFF7ED" },
  { label: "Out of Stock", value: "6", sub: "Not Available", icon: <BlockIcon />, color: "#DC2626", bg: "#FEF2F2" },
  { label: "Active Products", value: "232", sub: "Available", icon: <CheckCircleIcon />, color: "#16A34A", bg: "#F0FDF4" },
];

const Product = () => {
  const dispatch = useDispatch();

  const auth = useSelector(store => store.auth);
  const { products, totalCount, loading, error } = useSelector((store) => store.product);

  console.log("products list-----", products);
  console.log("total product count++++", totalCount);

  useEffect(() => {
    dispatch(Products());
    dispatch(getTotalProductCount())
  }, [dispatch]);
  
  const activeProductsCount = products ? products.filter(p => p.status === "Active" || p.stock > 0).length : 0;

  const statsData = [
    { label: "Total Products", value: totalCount, sub: "All Products", icon: <InventoryIcon />, color: "#7C3AED", bg: "#F5F3FF" },
    { label: "Low Stock",  sub: "Reorder Soon", icon: <WarningIcon />, color: "#EA580C", bg: "#FFF7ED" },
    { label: "Out of Stock", sub: "Not Available", icon: <BlockIcon />, color: "#DC2626", bg: "#FEF2F2" },
    { label: "Active Products", value: activeProductsCount, sub: "Available", icon: <CheckCircleIcon />, color: "#16A34A", bg: "#F0FDF4" },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#F8F9FC", minHeight: "100vh" }}>
      {/* HEADER SECTION */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 1.5,
          bgcolor: "white",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        {/* Left Side: Title & Subtitle */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              Products
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              Manage your all clothing products
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Search, Notifications, Admin Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 3 } }}>
          {/* Search Bar */}
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                bgcolor: "#F3F4F6",
                "& fieldset": { border: "none" },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="disabled" />
                </InputAdornment>
              ),
            }}
          />

          {/* Notification Icon */}
          <IconButton sx={{ bgcolor: "#F3F4F6", borderRadius: "12px" }}>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          {/* Admin Profile Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
            <Avatar
              className="shadow-md border-2 border-indigo-100"
                sx={{
                  bgcolor: "#9155fd",
                  width: 36,
                  height: 36,
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}
            >
              {auth?.user?.fullName?.charAt(0).toUpperCase() || 'U'}
            </Avatar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>Admin</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: -0.5 }}>
                Administrator
              </Typography>
            </Box>
            <KeyboardArrowDownIcon fontSize="small" color="action" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100%', mt: 4, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Stats Cards */}
          {statsData.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}> {/* md={3} रखने से 4 कार्ड्स पूरी स्क्रीन पर बराबर फिट होंगे */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: item.bg,
                  color: item.color,
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  {item.label}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1, my: 0.5 }}>
                  {item.value}
                </Typography>
                <Typography variant="caption" sx={{ color: "#9CA3AF", fontSize: "0.7rem" }}>
                  {item.sub}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}

          {/* Add Product Button */}
          <Grid item xs={12} md={1.6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to="/admin/products/add"
              sx={{
                bgcolor: "#4F46E5",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                px: 2,
                py: 1.5,
                mt: 3,
                whiteSpace: "nowrap",
                boxShadow: "none",
                '&:hover': { bgcolor: "#4338CA", boxShadow: "none" }
              }}
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </Box>


      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: "16px",
          border: "1px solid #E5E7EB",
          mt: 3,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          gap: 2
        }}
      >
        {/* 1. Search Field */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '2' } }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search by product name, SKU or barcode..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: '#9CA3AF' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                fontSize: "0.85rem",
                bgcolor: "#fff"
              }
            }}
          />
        </Box>

        {/* 2. Category Dropdown */}
        <Box sx={{ flex: '1' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: 'block', color: '#374151' }}>
            Category
          </Typography>
          <Select
            fullWidth
            size="small"
            defaultValue="All"
            sx={{ borderRadius: "10px", fontSize: "0.85rem" }}
          >
            <MenuItem value="All">All Categories</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
          </Select>
        </Box>

        {/* 3. Brand Dropdown */}
        <Box sx={{ flex: '1' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: 'block', color: '#374151' }}>
            Brand
          </Typography>
          <Select
            fullWidth
            size="small"
            defaultValue="All"
            sx={{ borderRadius: "10px", fontSize: "0.85rem" }}
          >
            <MenuItem value="All">All Brands</MenuItem>
            <MenuItem value="Nike">Nike</MenuItem>
            <MenuItem value="Adidas">Adidas</MenuItem>
          </Select>
        </Box>

        {/* 4. Status Dropdown */}
        <Box sx={{ flex: '1' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, mb: 0.5, display: 'block', color: '#374151' }}>
            Status
          </Typography>
          <Select
            fullWidth
            size="small"
            defaultValue="All"
            sx={{ borderRadius: "10px", fontSize: "0.85rem" }}
          >
            <MenuItem value="All">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </Box>

        {/* 5. Filter Button */}
        <Button
          variant="contained"
          startIcon={<FilterAltOutlinedIcon />}
          sx={{
            bgcolor: "#6236FF",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            height: "40px",
            px: 3,
            boxShadow: "none",
            '&:hover': { bgcolor: "#5029D9", boxShadow: "none" }
          }}
        >
          Filter
        </Button>

        {/* 6. Reset Button */}
        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          sx={{
            color: "#374151",
            borderColor: "#E5E7EB",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            height: "40px",
            px: 3,
            '&:hover': { borderColor: "#9CA3AF", bgcolor: "#F9FAFB" }
          }}
        >
          Reset
        </Button>
      </Paper>

      <Paper elevation={0} sx={{ border: "1px solid #E5E7EB", overflow: "hidden", mt: 2, }}>
        {/* Table Header Actions */}
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Product List</Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}><FileUploadOutlinedIcon fontSize="small" /> Import</IconButton>
            <IconButton size="small" sx={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}><FileDownloadOutlinedIcon fontSize="small" /> Export</IconButton>
            <IconButton size="small" sx={{ border: "1px solid #E5E7EB", borderRadius: "8px" }}><SettingsOutlinedIcon fontSize="small" /></IconButton>
          </Stack>
        </Box>

        <TableContainer>
          <Table sx={{ minWidth: 1000 }}>
            <TableHead sx={{ bgcolor: "#F9FAFB" }}>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox size="small" /></TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Product Name</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>SKU</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Brand</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Size</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Color</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Price (₹)</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#6B7280" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((row) => (
                <TableRow key={row.id} hover>

                  <TableCell padding="checkbox">
                    <Checkbox size="small" />
                  </TableCell>

                  <TableCell>
                    <Avatar
                      variant="rounded"
                      src={row.imageUrl} // backend image
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "#F3F4F6",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.85rem" }}>
                      {row.name}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {row.barcode}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ fontSize: "0.85rem" }}>
                    {row.sku}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={row.category}
                      size="small"
                      sx={{
                        bgcolor: "#F5F3FF",
                        color: "#7C3AED",
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>

                  <TableCell sx={{ fontSize: "0.85rem" }}>
                    {row.brand}
                  </TableCell>

                  <TableCell sx={{ fontSize: "0.85rem" }}>
                    {row.size}
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={0.5}>
                      {row.color?.map((c, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: c,
                            border: "1px solid #E5E7EB",
                          }}
                        />
                      ))}
                    </Stack>
                  </TableCell>

                  <TableCell sx={{ fontWeight: 700 }}>
                    ₹{row.price}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: row.stock > 0 ? "#16A34A" : "red",
                    }}
                  >
                    {row.stock}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={row.status === "Active" ? "success" : "error"}
                      sx={{ borderRadius: "6px" }}
                    />
                  </TableCell>

                  <TableCell>
                    <Stack direction="row">
                      <IconButton size="small" color="primary">
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>

                      <IconButton size="small" color="error">
                        <DeleteOutlineOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          bgcolor: 'white',
          borderTop: '1px solid #F3F4F6',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px'
        }}
      >
        {/* Left Side: Entry Info from {FBCB7A1A-A55B-4A66-A4AC-D97EDF3DB355}.png */}
        <Typography
          variant="body2"
          sx={{ color: '#6B7280', fontWeight: 500 }}
        >
          Showing 1 to 7 of 256 products
        </Typography>

        {/* Right Side: Navigation */}
        <Pagination
          count={37}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: ArrowBackIosNewIcon,
                next: ArrowForwardIosIcon
              }}
              {...item}
              sx={{
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.85rem',
                // Active Page Styling
                '&.Mui-selected': {
                  bgcolor: '#6236FF',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#5029D9',
                  }
                },
                // Border for Prev/Next buttons
                '&.MuiPaginationItem-previousNext': {
                  border: '1px solid #E5E7EB',
                  mx: 1
                },
                // Arrow icons size
                '& .MuiPaginationItem-icon': {
                  fontSize: '0.75rem',
                }
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Product;