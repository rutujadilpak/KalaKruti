import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Box,
    useMediaQuery,
    useTheme,
    Container,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/LogoKalaKruti.png";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [designsMenuOpen, setDesignsMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setDesignsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setDesignsMenuOpen(false);
    };

    const navigationItems = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        { label: "Magazine", path: "/magazine" },
        {
            label: "Designs",
            path: "/designs",
            dropdown: [
                // Column 1
                { label: "Modular Kitchen Designs", path: "/designs/kitchen" },
                { label: "Wardrobe Designs", path: "/designs/wardrobe" },
                { label: "Bathroom Designs", path: "/designs/bathroom" },
                { label: "Master Bedroom Designs", path: "/designs/master-bedroom" },
                { label: "Living Room Designs", path: "/designs/living-room" },
                { label: "Pooja Room Designs", path: "/designs/pooja-room" },
                { label: "TV Unit Designs", path: "/designs/tv-unit" },
                { label: "False Ceiling Designs", path: "/designs/false-ceiling" },
                { label: "Kids Bedroom Designs", path: "/designs/kids-bedroom" },
                { label: "Balcony Designs", path: "/designs/balcony" },
                // Column 2
                { label: "Dining Room Designs", path: "/designs/dining-room" },
                { label: "Foyer Designs", path: "/designs/foyer" },
                { label: "Homes by Livspace", path: "/designs/homes-livspace" },
                { label: "Home Office Designs", path: "/designs/home-office" },
                { label: "Guest Bedroom Designs", path: "/designs/guest-bedroom" },
                { label: "Window Designs", path: "/designs/window" },
                { label: "Flooring Designs", path: "/designs/flooring" },
                { label: "Wall Decor Designs", path: "/designs/wall-decor" },
                { label: "Wall Paint Designs", path: "/designs/wall-paint" },
                { label: "Home Wallpaper Designs", path: "/designs/wallpaper" },
                // Column 3
                { label: "Tile Designs", path: "/designs/tile" },
                { label: "Study Room Designs", path: "/designs/study-room" },
                { label: "Kitchen Sinks", path: "/designs/kitchen-sinks" },
                { label: "Space Saving Designs", path: "/designs/space-saving" },
                { label: "Door Designs", path: "/designs/door" },
                { label: "Staircase Designs", path: "/designs/staircase" },
                { label: "Crockery Unit Designs", path: "/designs/crockery-unit" },
                { label: "Home Bar Designs", path: "/designs/home-bar" },
            ],
        },
        { label: "FAQ", path: "/faq" },
        { label: "Contact", path: "/contact" },
        { label: "About Us", path: "/aboutus" },

    ];
    const drawer = (
        <Box sx={{ width: 250 }}>
            {/* LOGO + TEXT inside Drawer */}
            <Box
                component={Link}
                to="/"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    p: 2,
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                }}
                onClick={handleDrawerToggle}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Kalakruti Logo"
                    sx={{
                        height: 80,
                        width: 80,
                        objectFit: "contain",
                        backgroundColor: "transparent",
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                />

                {/* Text next to logo */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        ml: 2,
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            letterSpacing: '0.1em',
                            fontFamily: 'sans-serif',
                            lineHeight: 1,
                            transition: 'color 0.3s ease',
                        }}
                    >
                        KALAKRUTI
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            fontSize: '0.9rem',
                            letterSpacing: '0.2em',
                            fontFamily: 'sans-serif',
                            lineHeight: 1,
                            mt: 0.2,
                        }}
                    >
                        STUDIO
                    </Typography>
                </Box>
            </Box>

            <List>
                {navigationItems.map((item) => (
                    <Box key={item.label}>
                        {item.dropdown ? (
                            <>
                                <ListItem
                                    button
                                    onClick={() =>
                                        setAnchorEl(anchorEl === item.label ? null : item.label)
                                    }
                                    sx={{
                                        color: location.pathname.startsWith(item.path)
                                            ? theme.palette.primary.main
                                            : "inherit",
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                                {anchorEl === item.label &&
                                    item.dropdown.map((subItem) => (
                                        <ListItem
                                            key={subItem.label}
                                            component={Link}
                                            to={subItem.path}
                                            onClick={handleDrawerToggle}
                                            sx={{
                                                pl: 4,
                                                color:
                                                    location.pathname === subItem.path
                                                        ? theme.palette.primary.main
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: theme.palette.action.hover,
                                                },
                                            }}
                                        >
                                            <ListItemText primary={subItem.label} />
                                        </ListItem>
                                    ))}
                            </>
                        ) : (
                            <ListItem
                                component={Link}
                                to={item.path}
                                onClick={handleDrawerToggle}
                                sx={{
                                    color:
                                        location.pathname === item.path
                                            ? theme.palette.primary.main
                                            : "inherit",
                                    "&:hover": {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        )}
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderBottom: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[2],
                zIndex: 1300, // Higher z-index to ensure it stays on top
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: "space-between", minHeight: "100px !important", py: 1 }}>
                    {/* LOGO + TEXT in main Toolbar */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            transition: "transform 0.2s ease",
                            ml: { xs: -1, md: 0 },   // shift left on mobile
                            mr: { xs: 2, md: 0 },    // <-- add space between logo+text and hamburger on mobile
                            "&:hover": {
                                transform: "scale(1.02)",
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Kalakruti Logo"
                            sx={{
                                height: { xs: 70, md: 100 },   // smaller logo on mobile
                                width: { xs: 70, md: 100 },
                                objectFit: "contain",
                                backgroundColor: "transparent",
                                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                                transition: "transform 0.2s ease",

                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />

                        {/* Text next to logo */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",  // keeps both texts centered relative to each other
                                textAlign: "center",   // ensures "STUDIO" stays exactly under "KALAKRUTI"
                                ml: 0,                 // little gap from logo
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.secondary.main,
                                    fontWeight: 'bold',
                                    fontSize: '2.2rem',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'sans-serif',
                                    lineHeight: 1,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                KALAKRUTI
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.secondary.main,
                                    fontSize: '1rem',
                                    letterSpacing: '0.2em',
                                    fontFamily: 'sans-serif',
                                    lineHeight: 1,
                                    mt: 0.2,
                                }}
                            >
                                STUDIO
                            </Typography>
                        </Box>

                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationItems.map((item) =>
                                    item.dropdown ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger onMouseEnter={handleMenuOpen}>
                                                {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                anchorEl={anchorEl}
                                                open={designsMenuOpen}
                                                onClose={handleMenuClose}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // auto create columns
                                                        gap: 2,
                                                        p: 2,
                                                        maxWidth: "1000px", // adjust width of dropdown box
                                                    }}
                                                >
                                                    {item.dropdown.map((subItem) => (
                                                        <NavigationMenuLink
                                                            key={subItem.label}
                                                            to={subItem.path}
                                                            asChild
                                                            onClick={handleMenuClose}
                                                            style={{
                                                                padding: "6px 12px",
                                                                borderRadius: "4px",
                                                                textDecoration: "none",
                                                                color: "inherit",
                                                                fontSize: "0.95rem",
                                                            }}
                                                        >
                                                            {subItem.label}
                                                        </NavigationMenuLink>
                                                    ))}
                                                </Box>
                                            </NavigationMenuContent>

                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink
                                                to={item.path}
                                                sx={navigationMenuTriggerStyle(theme)}
                                            >
                                                {item.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 280,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
