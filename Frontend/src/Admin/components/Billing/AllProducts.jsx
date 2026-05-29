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
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RecentIcon from "@mui/icons-material/History";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import PaymentIcon from '@mui/icons-material/Payment';
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";


const products = [
    {
        name: "Cotton T-Shirt",
        code: "TS100 | M, L, XL",
        price: "₹ 599.00",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
        name: "Printed T-Shirt",
        code: "TS102 | XL",
        price: "₹ 899.00",
        image:
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    },
    {
        name: "Denim Shirt",
        code: "DS200 | M, L, XL",
        price: "₹ 3699.00",
        image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
        name: "Formal Shirt",
        code: "FS101 | M, L",
        price: "₹ 3099.00",
        image:
            "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    },
    {
        name: "Jeans",
        code: "JN001 | 30, 32, 34",
        price: "₹ 1399.00",
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    },
    {
        name: "Denim Jeans",
        code: "JN002 | 30, 32, 34",
        price: "₹ 1999.00",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
    {
        name: "Jacket",
        code: "JK001 | M, L, XL",
        price: "₹ 1499.00",
        image:
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504",
    },
    {
        name: "Hoodie",
        code: "HD001 | M, L, XL",
        price: "₹ 1199.00",
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
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
                p: 1,
                bgcolor: "#F8F9FC",
                borderRadius: 1,
                width: "100%",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "#111827",
                    }}
                >
                    All Products
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2">Sort By :</Typography>

                    <Select
                        size="small"
                        defaultValue="new"
                        sx={{
                            bgcolor: "white",
                            borderRadius: "10px",
                            height: 36,
                            minWidth: 120,
                        }}
                    >
                        <MenuItem value="new">New A to Z</MenuItem>
                        <MenuItem value="priceLow">Price Low</MenuItem>
                        <MenuItem value="priceHigh">Price High</MenuItem>
                    </Select>

                    <IconButton
                        sx={{
                            bgcolor: "#7C3AED",
                            color: "white",
                            "&:hover": {
                                bgcolor: "#6D28D9",
                            },
                        }}
                    >
                        <GridViewRoundedIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        sx={{
                            bgcolor: "white",
                            border: "1px solid #E5E7EB",
                        }}
                    >
                        <ViewListRoundedIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* Products Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1,1fr)",
                        sm: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "repeat(7,1fr)",
                    },
                    gap: 2,
                }}
            >
                {products.map((product, index) => (
                    <Card
                        key={index}
                        sx={{
                            borderRadius: "18px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            position: "relative",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-5px)",
                            },
                        }}
                    >
                        {/* Add Button */}
                        <IconButton
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                bgcolor: "#8B5CF6",
                                color: "white",
                                width: 24,
                                height: 24,
                                "&:hover": {
                                    bgcolor: "#7C3AED",
                                },
                            }}
                        >
                            <AddRoundedIcon sx={{ fontSize: 16 }} />
                        </IconButton>

                        {/* Product Image */}
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            sx={{
                                width: "100%",
                                height: 100,
                                objectFit: "contain",
                                p: 1,
                            }}
                        />

                        <CardContent sx={{ pt: 1 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 700,
                                    color: "#111827",
                                    mb: 0.2,
                                }}
                            >
                                {product.name}
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: "#9CA3AF",
                                    display: "block",
                                    mb: 1,
                                }}
                            >
                                {product.code}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 800,
                                    color: "#7C3AED",
                                }}
                            >
                                {product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Box sx={{ mt: 4 , borderTop: "1px solid #050c1a", pt: 3 }}>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 800, mb: 1, color: '#020713' }}
                >
                    Quick Action Keys
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}
                >
                    {actions.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                flex: { xs: '1 1 100px', sm: '0 0 110px' }, 
                                height: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                border: '1px solid #E5E7EB',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                bgcolor: '#fff',
                                '&:hover': {
                                    bgcolor: '#F9FAFB',
                                    borderColor: '#7C3AED',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                }
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: '#374151',
                                    mb: 0.5,
                                    '& svg': { fontSize: 28 }
                                }}
                            >
                                {item.icon}
                            </IconButton>
                            <Typography
                                sx={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: '#374151'
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