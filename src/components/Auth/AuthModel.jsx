import React from "react";
import {
  Box,
  Modal,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModel = ({ open, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Check current view
  const isLoginView = location.pathname === "/login";

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "95%" : 450,
    maxHeight: "95vh",
    overflowY: "auto",
    // Dark Theme Colors
    bgcolor: "#1e293b", 
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    outline: "none",
    p: isMobile ? 3 : 5,
    color: "white",
    scrollbarWidth: "none", // Hide scrollbar for Firefox
    "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="auth-modal-title"
      sx={{ backdropFilter: "blur(4px)" }}
    >
      <Box sx={style}>
        {/* Close Button Only */}
        <Box position="absolute" top={12} right={12}>
          <IconButton onClick={handleClose} sx={{ color: "gray" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Dynamic Form Rendering */}
        <Box mt={1}>
          {isLoginView ? (
            <LoginForm onSwitch={() => navigate("/register")} />
          ) : (
            <RegisterForm onSwitch={() => navigate("/login")} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModel;