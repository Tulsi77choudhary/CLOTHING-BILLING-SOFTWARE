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
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const cartItems = [
  {
    name: "Cotton T-Shirt",
    code: "TS100",
    size: "M",
    qty: 1,
    price: 599,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Denim Jeans",
    code: "JN002",
    size: "32",
    qty: 1,
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    name: "Jacket",
    code: "JK001",
    size: "L",
    qty: 1,
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
  },
  {
    name: "Cap",
    code: "CP001",
    size: "Free",
    qty: 1,
    price: 299,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },
];

function CartSection() {
  return (
    <Box
  sx={{
    width: "100%",
    maxWidth: 400,
    bgcolor: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
  }}
>
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#5B21B6",
          color: "white",
          px: 2,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>
          Cart (4)
        </Typography>

        <Button
          size="small"
          startIcon={<CloseRoundedIcon />}
          sx={{
            color: "white",
            textTransform: "none",
            fontSize: "0.75rem",
          }}
        >
          Clear Cart
        </Button>
      </Box>

      {/* Table Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto",
          px: 2,
          py: 1,
          fontSize: "0.75rem",
          color: "#6B7280",
          fontWeight: 600,
        }}
      >
        <Typography variant="caption">Item</Typography>
        <Typography variant="caption">Size</Typography>
        <Typography variant="caption">Qty</Typography>
        <Typography variant="caption">Price</Typography>
        <Typography variant="caption">Total</Typography>
      </Box>

      <Divider />

      {/* Cart Items */}
      {cartItems.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto",
              alignItems: "center",
              px: 2,
              py: 1.5,
              gap: 1,
            }}
          >
            {/* Product */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 42,
                  height: 42,
                  objectFit: "cover",
                  borderRadius: "10px",
                  bgcolor: "#F3F4F6",
                }}
              />

              <Box>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    color: "#9CA3AF",
                  }}
                >
                  {item.code}
                </Typography>
              </Box>
            </Box>

            {/* Size */}
            <Typography sx={{ fontSize: "0.8rem" }}>
              {item.size}
            </Typography>

            {/* Qty */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                px: 0.5,
              }}
            >
              <IconButton size="small">
                <RemoveIcon sx={{ fontSize: 14 }} />
              </IconButton>

              <Typography sx={{ fontSize: "0.8rem" }}>
                {item.qty}
              </Typography>

              <IconButton size="small">
                <AddIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>

            {/* Price */}
            <Typography sx={{ fontSize: "0.8rem" }}>
              ₹ {item.price}
            </Typography>

            {/* Total */}
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              ₹ {item.price * item.qty}
            </Typography>

          </Box>

          <Divider />
        </Box>
      ))}

      {/* Notes */}
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add Order Notes"
        />
      </Box>

      {/* Summary */}
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="body2">Sub Total</Typography>
          <Typography variant="body2">₹ 3,696.00</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="body2">Discount</Typography>
          <Typography variant="body2">₹ 200.00</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="body2">
            Tax (GST 5%)
          </Typography>

          <Typography variant="body2">
            ₹ 179.80
          </Typography>
        </Box>

        <Divider sx={{ my: 1.5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Grand Total
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#5B21B6",
              fontSize: "1.2rem",
            }}
          >
            ₹ 3,775.80
          </Typography>
        </Box>
      </Box>

      {/* Payment Buttons */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 1,
          px: 2,
          pb: 2,
        }}
      >
        {["Cash", "UPI", "Card", "Split"].map((item) => (
          <Button
            key={item}
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "10px",
              fontSize: "0.75rem",
            }}
          >
            {item}
          </Button>
        ))}
      </Box>

      {/* Footer Buttons */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          px: 2,
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#5B21B6",
            borderRadius: "12px",
            textTransform: "none",
            py: 1.2,
          }}
        >
          Pay Now (F8)
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            py: 1.2,
          }}
        >
          Save & Print (F10)
        </Button>
      </Box>

      {/* Bottom Info */}
      <Box
        sx={{
          px: 2,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="caption">
          Last Bill : #101045
        </Typography>

        <Typography variant="caption">
          Time : 11:45 AM
        </Typography>
      </Box>

      {/* Floating Arrow */}
      <Box
        sx={{
          position: "fixed",
          right: 20,
          bottom: 40,
          width: 58,
          height: 58,
          borderRadius: "50%",
          bgcolor: "#4B5563",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            color: "white",
          }}
        />
      </Box>
    </Box>
  );
}

export default CartSection;