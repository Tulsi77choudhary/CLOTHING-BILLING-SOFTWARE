import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const CashPayment = ({ totalBill = 3775.8, onPaymentComplete }) => {
  const [amountReceived, setAmountReceived] = useState("");

  const received = Number(amountReceived) || 0;
  const balanceToReturn = Math.max(received - totalBill, 0);
  const isValid = received >= totalBill;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) {
      alert("Received amount should be greater than or equal to Total Bill.");
      return;
    }

    onPaymentComplete?.({
      type: "CASH",
      received,
      change: balanceToReturn,
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #E5E7EB",
        bgcolor: "#fff",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <PaidIcon sx={{ color: "#16A34A" }} />
        <Typography
          variant="h6"
          fontWeight={700}
          color="#111827"
        >
          Cash Payment
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        mb={3}
      >
        Enter the amount received from the customer to complete the transaction.
      </Typography>

      {/* Bill Summary */}
      <Box
        sx={{
          bgcolor: "#F9FAFB",
          p: 2,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Total Bill Amount
        </Typography>

        <Typography
          variant="h5"
          fontWeight={700}
          color="#5B21B6"
        >
          ₹{totalBill.toFixed(2)}
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        {/* Amount Received */}
        <TextField
          fullWidth
          label="Amount Received (₹)"
          type="number"
          value={amountReceived}
          onChange={(e) => setAmountReceived(e.target.value)}
          placeholder="Enter received amount"
          sx={{ mb: 3 }}
        />

        {/* Balance */}
        <Box
          sx={{
            border: "1px dashed #16A34A",
            bgcolor: "#F0FDF4",
            p: 2,
            borderRadius: 2,
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Change to Return
          </Typography>

          <Typography
            variant="h4"
            fontWeight={700}
            color="#DC2626"
          >
            ₹{balanceToReturn.toFixed(2)}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!isValid}
          sx={{
            py: 1.5,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: "0.95rem",
            bgcolor: "#16A34A",
            "&:hover": {
              bgcolor: "#15803D",
            },
          }}
        >
          Confirm Payment & Generate Bill
        </Button>
      </form>
    </Paper>
  );
};

export default CashPayment;