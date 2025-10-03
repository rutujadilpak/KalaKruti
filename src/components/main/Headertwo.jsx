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
    Typography
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Headertwo() {
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { label: 'Offerings', path: '/offerings' },
        { label: 'Price Calculators', path: '/price-calculators' },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
                    position: 'fixed', // Make it fixed like the header
                    // Mobile: bottom positioning, Desktop: top positioning
                    top: isMobile ? 'auto' : '110px',
                    bottom: isMobile ? '0px' : 'auto',
                    left: 0,
                    right: 0,
                    zIndex: 1299, // Just below the main header
                }}
            >
                {/* Mobile: Show hamburger menu, Desktop: Show all nav items */}
                {isMobile ? (
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    navItems.map((item) => (
                        <Button
                            key={item.label}
                            component={Link}
                            to={item.path}
                            sx={{
                                color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                                fontWeight: location.pathname === item.path ? 'bold' : '500',
                                mx: 2,
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': { backgroundColor: theme.palette.action.hover },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))
                )}
            </Box>

            {/* Mobile Drawer */}
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
