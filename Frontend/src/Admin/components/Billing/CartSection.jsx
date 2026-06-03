import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const cartItems = [
  {
    name: "Cotton T-Shirt",
    code: "TS100",
    size: "M",
    qty: 1,
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Denim Jeans",
    code: "JN002",
    size: "32",
    qty: 1,
    price: 1299,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    name: "Jacket",
    code: "JK001",
    size: "L",
    qty: 1,
    price: 1499,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
  },
  {
    name: "Cap",
    code: "CP001",
    size: "Free",
    qty: 1,
    price: 299,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },
];

function CartSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%", 
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#5B21B6",
          color: "white",
          px: { xs: 1.5, sm: 2 },
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Cart ({cartItems.length})
        </Typography>

        <Button
          size="small"
          startIcon={<CloseRoundedIcon sx={{ fontSize: 14 }} />}
          sx={{
            color: "white",
            textTransform: "none",
            fontSize: "0.75rem",
            opacity: 0.9,
            "&:hover": { opacity: 1 }
          }}
        >
          Clear Cart
        </Button>
      </Box>

      {/* Table Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2.5fr 1fr 1.2fr 1fr 1fr",
          px: { xs: 1, sm: 2 },
          py: 1,
          bgcolor: "#F9FAFB",
          color: "#6B7280",
          fontWeight: 700,
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontSize: "0.7rem" }}>Item</Typography>
        <Typography sx={{ fontSize: "0.7rem", textAlign: "center" }}>Size</Typography>
        <Typography sx={{ fontSize: "0.7rem", textAlign: "center" }}>Qty</Typography>
        <Typography sx={{ fontSize: "0.7rem", textAlign: "right" }}>Price</Typography>
        <Typography sx={{ fontSize: "0.7rem", textAlign: "right" }}>Total</Typography>
      </Box>

      <Divider />

      {/* Scrollable Cart Items Container */}
      {/* कार्ट में बहुत सारे आइटम्स होने पर केवल ये हिस्सा स्क्रॉल होगा, बटन्स नीचे ही रहेंगे */}
      <Box sx={{ 
        flexGrow: 1, 
        overflowY: "auto", 
        maxHeight: { xs: "280px", md: "calc(100vh - 460px)" },
        "&::-webkit-scrollbar": { width: "5px" },
        "&::-webkit-scrollbar-thumb": { bgcolor: "#E5E7EB", borderRadius: "4px" }
      }}>
        {cartItems.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2.5fr 1fr 1.2fr 1fr 1fr",
                alignItems: "center",
                px: { xs: 1, sm: 2 },
                py: 1.5,
                gap: 0.5,
              }}
            >
              {/* Product Info */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "center", minWidth: 0 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: { xs: 32, sm: 38 },
                    height: { xs: 32, sm: 38 },
                    objectFit: "cover",
                    borderRadius: "8px",
                    bgcolor: "#F3F4F6",
                    flexShrink: 0
                  }}
                />
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.72rem", sm: "0.78rem" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.62rem", color: "#9CA3AF" }}>
                    {item.code}
                  </Typography>
                </Box>
              </Box>

              {/* Size */}
              <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.78rem" }, textAlign: "center", color: "#374151" }}>
                {item.size}
              </Typography>

              {/* Qty Counter Buttons */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                  p: "2px",
                  maxWidth: "65px",
                  mx: "auto"
                }}
              >
                <IconButton size="small" sx={{ p: "2px", color: "#4B5563" }}>
                  <RemoveIcon sx={{ fontSize: 10 }} />
                </IconButton>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, px: 0.3 }}>
                  {item.qty}
                </Typography>
                <IconButton size="small" sx={{ p: "2px", color: "#7C3AED" }}>
                  <AddIcon sx={{ fontSize: 10 }} />
                </IconButton>
              </Box>

              {/* Price */}
              <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.78rem" }, textAlign: "right", color: "#4B5563" }}>
                ₹{item.price}
              </Typography>

              {/* Total */}
              <Typography sx={{ fontSize: { xs: "0.72rem", sm: "0.78rem" }, fontWeight: 700, textAlign: "right", color: "#111827" }}>
                ₹{item.price * item.qty}
              </Typography>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>

      {/* Footer Area (Sticky Summary & Action Buttons) */}
      <Box sx={{ bgcolor: "#FAFAFA", borderTop: "1px solid #E5E7EB", mt: "auto" }}>
        {/* Notes */}
        <Box sx={{ p: 1.5 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Add Order Notes..."
            inputProps={{ style: { fontSize: "0.75rem", padding: "8px 10px" } }}
            sx={{ bgcolor: "white", borderRadius: "8px" }}
          />
        </Box>

        {/* Pricing Summary */}
        <Box sx={{ px: 2, display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>Sub Total</Typography>
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#374151" }}>₹3,696.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>Discount</Typography>
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>- ₹200.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "#6B7280" }}>Tax (GST 5%)</Typography>
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#374151" }}>₹179.80</Typography>
          </Box>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#111827" }}>Grand Total</Typography>
            <Typography sx={{ fontWeight: 800, color: "#5B21B6", fontSize: { xs: "1.1rem", sm: "1.2rem" } }}>
              ₹3,775.80
            </Typography>
          </Box>
        </Box>

        {/* Payment Shortcut Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, px: 2, pb: 1.5 }}>
          {["Cash", "UPI", "Card", "Split"].map((item) => (
            <Button
              key={item}
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#4B5563",
                borderColor: "#D1D5DB",
                py: 0.5,
                "&:hover": { borderColor: "#5B21B6", bgcolor: "#F5F3FF" }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Final Actions */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, px: 2, pb: 1.5 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5B21B6",
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              py: 1,
              "&:hover": { bgcolor: "#4C1D95" }
            }}
          >
            Pay Now (F8)
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#5B21B6",
              borderColor: "#5B21B6",
              py: 1,
              "&:hover": { bgcolor: "#F5F3FF", borderColor: "#4C1D95" }
            }}
          >
            Save & Print
          </Button>
        </Box>

        {/* Footer Audit Metadata info */}
        <Box sx={{ px: 2, pb: 1.5, display: "flex", justifyContent: "space-between", opacity: 0.6 }}>
          <Typography sx={{ fontSize: "0.6rem", fontWeight: 500 }}>Last Bill : #101045</Typography>
          <Typography sx={{ fontSize: "0.6rem", fontWeight: 500 }}>Time : 11:45 AM</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CartSection;