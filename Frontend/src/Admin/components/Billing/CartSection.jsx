import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  TextField,
  Dialog,
  DialogContent,
} from "@mui/material";

import { paymentMethods } from "./paymentMethods";
import UpiPayment from "./UPIPayment";

import CashPayment from "./CashPayment";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CallSplitIcon from "@mui/icons-material/CallSplit";

// import CashPayment from './CashPayment';

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

  const grandTotal = 3775.80;
  const [activeModal, setActiveModal] = useState(null);

  const paymentMethods = [
    { label: 'Cash', id: 'CASH', iconUrl: 'data:image/jpeg;base64,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' },
    { label: 'UPI', id: 'UPI', iconUrl: 'data:image/png;base64,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' },
    { label: 'Card', id: 'CARD', iconUrl: 'https://cdn-icons-png.flaticon.com/128/6963/6963703.png' },
    // Aap chaho to koi 4th option bhi daal sakte ho, grid balance rahega (repeat(4, 1fr))
  ];

  const handleFinalPaymentSave = (paymentData) => {
    console.log("Payment data received:", paymentData);
    setActiveModal(null);
  };

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
          {paymentMethods.map((item) => (
            <Button
              key={item.label}
              variant="outlined"
              size="small"
              onClick={() => setActiveModal(item.id)}
              startIcon={
                <img
                  src={item.iconUrl}
                  alt={item.label}
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
              }
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#4B5563",
                borderColor: "#D1D5DB",
                py: 0.5,
                px: 0.5,
                "&:hover": { borderColor: "#5B21B6", bgcolor: "#F5F3FF" },
                "& .MuiButton-startIcon": {
                  marginRight: "4px",
                  marginLeft: "0px"
                }
              }}
            >
              {item.label}
            </Button>

          ))}

        </Box>

        {/* Cash Payment Modal */}
        <Dialog
          open={Boolean(activeModal)}
          onClose={() => setActiveModal(null)}
          maxWidth="sm"
          fullWidth
        >
          <DialogContent sx={{ p: 0 }}>

            <IconButton
              onClick={() => setActiveModal(null)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>

            {activeModal === "CASH" && (
              <CashPayment
                onSave={handleFinalPaymentSave}
              />
            )}

            {activeModal === "UPI" && (
              <UpiPayment
                totalBill={grandTotal}
                onPaymentComplete={handleFinalPaymentSave}
              />
            )}

          </DialogContent>
        </Dialog>

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