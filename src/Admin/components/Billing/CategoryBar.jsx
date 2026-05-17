import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import DryCleaningRoundedIcon from "@mui/icons-material/DryCleaningRounded";
import BackpackRoundedIcon from "@mui/icons-material/BackpackRounded";

// Styled component for hiding scrollbar
const ScrollContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  overflowX: "auto",
  padding: "10px 5px",
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari, Opera
  },
});

const categories = [
  { name: "All", icon: <GridViewRoundedIcon /> },
  { name: "T-shirts", icon: <CheckroomRoundedIcon /> },
  { name: "Shirts", icon: <DryCleaningRoundedIcon /> },
  { name: "Jeans", icon: <DryCleaningRoundedIcon /> },
  { name: "Jackets", icon: <CheckroomRoundedIcon /> },
  { name: "Trousers", icon: <DryCleaningRoundedIcon /> },
  { name: "Hoodies", icon: <CheckroomRoundedIcon /> },
  { name: "Caps", icon: <BackpackRoundedIcon /> },
  { name: "Accessories", icon: <BackpackRoundedIcon /> },
];

function CategoryBar() {
  const [active, setActive] = useState("All");

  return (
    <Box sx={{ width: "100%", mb: 1 }}>
      <ScrollContainer>
        {categories.map((item, index) => {
          const isActive = active === item.name;
          return (
            <Box
              key={index}
              onClick={() => setActive(item.name)}
              sx={{
                // Responsive Size: Mobile pe thoda chota, desktop pe 70px
                height: { xs: 70, sm: 80 },
                width: { xs: 70, sm: 110 },
                minWidth: { xs: 60, sm: 70 }, // Scroll break na ho isliye minWidth zaroori hai
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                bgcolor: isActive ? "#7C3AED" : "#fff",
                color: isActive ? "#fff" : "#111827",
                border: isActive ? "none" : "1px solid #E5E7EB",
                boxShadow: isActive ? "0 8px 15px rgba(124, 58, 237, 0.2)" : "none",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                  border: isActive ? "none" : "1px solid #7C3AED",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 0.5,
                  "& svg": {
                    fontSize: { xs: 22, sm: 26 }, // Responsive Icons
                  },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "0.6rem", sm: "0.75rem" },
                  textAlign: "center",
                  lineHeight: 1.1,
                  px: 0.5,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </ScrollContainer>
    </Box>
  );
}

export default CategoryBar;