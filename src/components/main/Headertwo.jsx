import React, { useState } from 'react';
import {
    Box,
    Button,
    useTheme,
    useMediaQuery,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// ✅ Ant Design imports for professional dropdown
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Headertwo() {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { label: 'Offerings', path: '/offerings' },
        {
            label: 'Price Calculators',
            path: '/price-calculators',
            dropdown: [
                { label: 'Home Interior Calculator', path: '/price-calculators/home' },
                { label: 'Kitchen Calculator', path: '/price-calculators/kitchen' },
                { label: 'Wardrobe Calculator', path: '/price-calculators/wardrobe' },
            ],
        },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    const drawer = (
        <Box sx={{ width: 250, pt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                    Navigation
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.label}
                        component={Link}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        sx={{
                            color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    py: 1.5,
                    px: { xs: 2, md: 4 },
                    width: '100%',
                    position: 'fixed',
                    top: isMobile ? 'auto' : '110px',
                    bottom: isMobile ? '0px' : 'auto',
                    left: 0,
                    right: 0,
                    zIndex: 1299,
                    minHeight: '60px',
                    boxSizing: 'border-box',
                }}
            >
                {isMobile ? (
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: theme.palette.text.primary,
                            minHeight: '40px',
                            minWidth: '40px',
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <Dropdown
                                    key={item.label}
                                    trigger={["hover"]}
                                    getPopupContainer={() => document.body}
                                    overlayStyle={{ zIndex: 9999 }}
                                    dropdownRender={() => (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 1,
                                                p: 2,
                                                backgroundColor: "#fff",
                                                borderRadius: 2,
                                                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                                minWidth: 300,
                                            }}
                                        >
                                            {item.dropdown.map((sub, index) => (
                                                <Box
                                                    key={index}
                                                    component={Link}
                                                    to={sub.path}
                                                    sx={{
                                                        textDecoration: "none",
                                                        color: theme.palette.text.primary,
                                                        fontSize: "0.9rem",
                                                        fontWeight: 400,
                                                        py: 0.8,
                                                        px: 1.5,
                                                        borderRadius: 1,
                                                        transition: "all 0.2s ease",
                                                        "&:hover": {
                                                            color: theme.palette.primary.main,
                                                            backgroundColor:
                                                                theme.palette.action.hover,
                                                        },
                                                    }}
                                                >
                                                    {sub.label}
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                >
                                    <Button
                                        type="text"
                                        onClick={() => navigate(item.path)}
                                        style={{
                                            fontWeight: location.pathname.startsWith(item.path)
                                                ? "bold"
                                                : "500",
                                            color: location.pathname.startsWith(item.path)
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                            fontSize: "1rem",
                                            padding: "8px 16px",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <Space>
                                            {item.label}
                                            <DownOutlined style={{ fontSize: "12px", marginLeft: 4 }} />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            ) : (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color:
                                            location.pathname === item.path
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                        fontWeight:
                                            location.pathname === item.path ? "bold" : "500",
                                        fontSize: "1rem",
                                        padding: "8px 16px",
                                        borderRadius: 1,
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )
                        )}
                    </Box>
                )}
            </Box>

            {isMobile && (
                <Drawer
                    variant="temporary"
                    anchor="bottom"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            height: 'auto',
                            maxHeight: '50vh',
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}
        </>
    );
}
