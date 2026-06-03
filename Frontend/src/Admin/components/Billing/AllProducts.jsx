import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CustomerIcon from "@mui/icons-material/Person";
import DiscountIcon from "@mui/icons-material/Discount";
import RecentIcon from "@mui/icons-material/History";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import PaymentIcon from "@mui/icons-material/Payment";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const products = [
  {
    name: "Cotton T-Shirt",
    code: "TSH001 | M, L, XL",
    price: "₹ 599.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Printed T-Shirt",
    code: "TSH002 | M, L, XL",
    price: "₹ 699.00",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
  },
  {
    name: "Denim Shirt",
    code: "SH001 | M, L, XL",
    price: "₹ 699.00",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    name: "Formal Shirt",
    code: "SH002 | M, L, XL",
    price: "₹ 999.00",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
  },
  {
    name: "Jeans",
    code: "JN001 | 30, 32, 34",
    price: "₹ 1,299.00",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    name: "Denim Jeans",
    code: "JN002 | 30, 32, 34",
    price: "₹ 1,399.00",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    name: "Jacket",
    code: "JK001 | M, L, XL",
    price: "₹ 1,499.00",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
  },
  {
    name: "Hoodie",
    code: "HD001 | M, L, XL",
    price: "₹ 499.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
];

const actions = [
  { label: "Search", icon: <SearchIcon /> },
  { label: "Customer", icon: <CustomerIcon /> },
  { label: "Discount", icon: <DiscountIcon /> },
  { label: "Hold Bill", icon: <PaymentIcon /> },
  { label: "Recent Bills", icon: <RecentIcon /> },
  { label: "More", icon: <MoreIcon /> },
];

function AllProducts() {
  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2 },
        bgcolor: "#fff",
        borderRadius: "12px",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
          gap: 1
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            color: "#111827",
          }}
        >
          All Products
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>
            Sort By :
          </Typography>

          <Select
            size="small"
            defaultValue="new"
            sx={{
              minWidth: 110,
              height: 34,
              fontSize: "0.75rem",
              borderRadius: "8px"
            }}
          >
            <MenuItem value="new">Name A to Z</MenuItem>
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>

          <IconButton
            size="small"
            sx={{
              bgcolor: "#7C3AED",
              color: "#fff",
              borderRadius: "8px",
              "&:hover": { bgcolor: "#6D28D9" }
            }}
          >
            <GridViewRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
            }}
          >
            <ViewListRoundedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Product Grid - Fixed Column Breakdown for Dashboard layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 1.2, sm: 2 },
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "between",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                borderColor: "#7C3AED"
              },
            }}
          >
            {/* Round Add Button */}
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 22,
                height: 22,
                bgcolor: "#F3F4F6",
                color: "#7C3AED",
                zIndex: 2,
                "&:hover": { bgcolor: "#7C3AED", color: "#fff" }
              }}
            >
              <AddRoundedIcon sx={{ fontSize: 14 }} />
            </IconButton>

            {/* Product Image Wrapper */}
            <Box
              sx={{
                height: { xs: 100, sm: 120 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1.5,
                bgcolor: "#F9FAFB",
                borderRadius: "12px 12px 0 0"
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "6px"
                }}
              />
            </Box>

            {/* Content Details */}
            <CardContent
              sx={{ p: "12px !important", flexGrow: 1, display: "flex", flexDirection: "column", justifyBetween: "space-between" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: 1.3,
                    mb: 0.5
                  }}
                >
                  {product.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#9CA3AF",
                    mb: 1.5,
                  }}
                >
                  {product.code}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  fontWeight: 800,
                  color: "#4F46E5",
                  mt: "auto"
                }}
              >
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Quick Actions Footer (Responsive Wrap) */}
      <Box
        sx={{ mt: 3, borderTop: "1px solid #E5E7EB", pt: 2 }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: "0.85rem",
            color: "#374151"
          }}
        >
          Quick Action Keys
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              sm: "repeat(6, 1fr)"
            },
            gap: 1,
          }}
        >
          {actions.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                py: 1.2,
                px: 0.5,
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { bgcolor: "#F9FAFB", borderColor: "#9CA3AF" }
              }}
            >
              <Box
                sx={{
                  color: "#4B5563",
                  "& svg": {
                    fontSize: 20,
                  },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#374151",
                  mt: 0.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {item.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AllProducts;