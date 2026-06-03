import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import DryCleaningRoundedIcon from "@mui/icons-material/DryCleaningRounded";
import BackpackRoundedIcon from "@mui/icons-material/BackpackRounded";

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  overflowX: "auto",
  padding: "6px 2px",
  [theme.breakpoints.up("md")]: {
    overflowX: "visible",
    flexWrap: "nowrap",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

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
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ScrollContainer>
        {categories.map((item, index) => {
          const isActive = active === item.name;

          return (
            <Box
              key={index}
              onClick={() => setActive(item.name)}
              sx={{
                height: { xs: 54, sm: 58, md: 62 },
                width: { xs: 70, sm: 80, md: "100%" },
                minWidth: { xs: 70, sm: 80, md: "auto" },
                flex: { xs: "0 0 auto", md: 1 }, 

                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",

                bgcolor: isActive ? "#7C3AED" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#111827",

                border: isActive
                  ? "1px solid #7C3AED"
                  : "1px solid #E5E7EB",

                boxShadow: isActive
                  ? "0 4px 12px rgba(124,58,237,0.2)"
                  : "none",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
                  borderColor: "#7C3AED",
                },
                "&:active": {
                  transform: "translateY(0px)",
                }
              }}
            >
              {/* Icon Box */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 0.5,
                  "& svg": {
                    fontSize: { xs: 16, sm: 18, md: 20 },
                  },
                }}
              >
                {item.icon}
              </Box>

              {/* Text / Name */}
              <Typography
                sx={{
                  fontSize: { xs: "0.62rem", sm: "0.68rem", md: "0.72rem" },
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1,
                  px: 0.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
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