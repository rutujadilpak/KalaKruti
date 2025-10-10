import React, { useState, useEffect } from 'react';
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
    Paper,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Collapse,
    ListItemButton
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// ✅ Ant Design imports for Price Calculators dropdown
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Headertwo() {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [mobileOpen, setMobileOpen] = useState(false);
    const [offeringsOpen, setOfferingsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleOfferingsToggle = () => setOfferingsOpen(!offeringsOpen);

    const handleSectionToggle = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const offeringsData = {
        exploreOfferings: [
            {
                title: "Modular Interiors",
                subtitle: "Kitchens, wardrobes and storage",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
                path: "/designs/modular-interiors"
            },
            {
                title: "Full Home Interiors",
                subtitle: "End-to-end home interiors",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
                path: "/designs/full-home-interiors"
            },
            {
                title: "Luxury interiors",
                subtitle: "Homes that redefine elegance",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
                path: "/designs/luxury-interiors"
            }
        ],
        kitchen: [
            { label: "Know Your Kitchen", path: "/kitchen/know-your-kitchen" },
            { label: "Kitchen Price Calculator", path: "/kitchen/price-calculator" },
            { 
                label: "Kitchen Components", 
                path: "/kitchen/components", 
                hasSubmenu: true,
                suboptions: [
                    { label: "Cabinets", path: "/kitchen/components/cabinets" },
                    { label: "Handles", path: "/kitchen/components/handles" },
                    { label: "Finishes", path: "/kitchen/components/finishes" }
                ]
            }
        ],
        wardrobe: [
            { label: "Know Your Wardrobe", path: "/wardrobe/know-your-wardrobe" },
            { label: "Wardrobe Price Calculator", path: "/wardrobe/price-calculator" },
            { 
                label: "Wardrobe Components", 
                path: "/wardrobe/components", 
                hasSubmenu: true,
                suboptions: [
                    { label: "Cabinets", path: "/wardrobe/components/cabinets" },
                    { label: "Handles", path: "/wardrobe/components/handles" },
                    { label: "Finishes", path: "/wardrobe/components/finishes" }
                ]
            }
        ]
    };

    const priceCalculatorsDropdown = [
        { label: 'Home Interior Calculator', path: '/price-calculators/home' },
        { label: 'Kitchen Calculator', path: '/price-calculators/kitchen' },
        { label: 'Wardrobe Calculator', path: '/price-calculators/wardrobe' },
    ];

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { label: 'Offerings', path: '/offerings', hasDropdown: true },
        { label: 'Price Calculators', path: '/price-calculators', dropdown: priceCalculatorsDropdown },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    useEffect(() => {
        if (location.pathname === '/offerings') {
            setOfferingsOpen(true);
        } else {
            setOfferingsOpen(false);
        }
    }, [location.pathname]);

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
                }}
            >
                {isMobile ? (
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: theme.palette.text.primary,
                            '&:hover': { backgroundColor: theme.palette.action.hover },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1 }}>
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <Dropdown
                                    key={item.label}
                                    trigger={["hover"]}
                                    getPopupContainer={() => document.body}
                                    overlayStyle={{ zIndex: 2000 }}
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
                                                minWidth: 250,
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
                                                        py: 0.8,
                                                        px: 1.5,
                                                        borderRadius: 1,
                                                        "&:hover": {
                                                            color: theme.palette.primary.main,
                                                            backgroundColor: theme.palette.action.hover,
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
                                            fontWeight: location.pathname.startsWith(item.path) ? "bold" : "500",
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
                            ) : item.hasDropdown ? (
                                <Button
                                    key={item.label}
                                    onClick={handleOfferingsToggle}
                                    sx={{
                                        color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                                        fontWeight: location.pathname === item.path ? 'bold' : '500',
                                        mx: 2,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': { backgroundColor: theme.palette.action.hover },
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5
                                    }}
                                >
                                    {item.label}
                                    {offeringsOpen ? (
                                        <ExpandLessIcon fontSize="small" />
                                    ) : (
                                        <ExpandMoreIcon fontSize="small" />
                                    )}
                                </Button>
                            ) : (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: location.pathname === item.path
                                            ? theme.palette.primary.main
                                            : 'text.primary',
                                        fontWeight: location.pathname === item.path ? 'bold' : '500',
                                        mx: 2,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': { backgroundColor: theme.palette.action.hover },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )
                        )}

                        {/* Offerings Dropdown */}
                        {offeringsOpen && (
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    mt: 1,
                                    width: '90vw',
                                    maxWidth: '1200px',
                                    borderRadius: 2,
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                                    zIndex: 1300,
                                    overflow: 'hidden'
                                }}
                                onMouseLeave={() => setOfferingsOpen(false)}
                            >
                                <Box sx={{ p: 4 }}>
                                    <Grid container spacing={4}>
                                        {/* Explore Offerings */}
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                                EXPLORE OFFERINGS
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
                                                {offeringsData.exploreOfferings.map((offering, index) => (
                                                    <Card
                                                        key={index}
                                                        component={Link}
                                                        to={offering.path}
                                                        sx={{
                                                            textDecoration: 'none',
                                                            height: '80px',
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            transition: 'transform 0.2s ease-in-out',
                                                            '&:hover': {
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                                            }
                                                        }}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                width: '60px',
                                                                height: '60px',
                                                                objectFit: 'cover',
                                                                borderRadius: 1,
                                                                ml: 1.5
                                                            }}
                                                            image={offering.image}
                                                            alt={offering.title}
                                                        />
                                                        <CardContent sx={{ p: 1.5, flex: 1 }}>
                                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                                {offering.title}
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                {offering.subtitle}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </Box>
                                        </Grid>

                                        {/* Kitchen Section */}
                                        <Grid item xs={12} md={3}>
                                            <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                                KITCHEN
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.kitchen.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <Box sx={{ width: '100%' }}>
                                                            <ListItemButton
                                                                component={item.hasSubmenu ? 'div' : Link}
                                                                to={item.hasSubmenu ? undefined : item.path}
                                                                onClick={item.hasSubmenu ? () => handleSectionToggle(`kitchen-${index}`) : undefined}
                                                                sx={{
                                                                    borderRadius: 1,
                                                                    '&:hover': {
                                                                        backgroundColor: theme.palette.action.hover
                                                                    }
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={item.label}
                                                                    sx={{
                                                                        '& .MuiListItemText-primary': {
                                                                            fontSize: '0.9rem',
                                                                            color: 'text.primary'
                                                                        }
                                                                    }}
                                                                />
                                                                {item.hasSubmenu && (
                                                                    expandedSections[`kitchen-${index}`] ? 
                                                                    <ExpandLessIcon fontSize="small" color="action" /> : 
                                                                    <ExpandMoreIcon fontSize="small" color="action" />
                                                                )}
                                                            </ListItemButton>
                                                            
                                                            {/* Suboptions */}
                                                            {item.hasSubmenu && item.suboptions && (
                                                                <Collapse in={expandedSections[`kitchen-${index}`]} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding sx={{ pl: 2 }}>
                                                                        {item.suboptions.map((suboption, subIndex) => (
                                                                            <ListItem key={subIndex} sx={{ p: 0, mb: 0.5 }}>
                                                                                <ListItemButton
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        borderRadius: 1,
                                                                                        py: 0.5,
                                                                                        '&:hover': {
                                                                                            backgroundColor: theme.palette.action.hover
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <ListItemText
                                                                                        primary={suboption.label}
                                                                                        sx={{
                                                                                            '& .MuiListItemText-primary': {
                                                                                                fontSize: '0.8rem',
                                                                                                color: 'text.secondary',
                                                                                                pl: 1
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                </ListItemButton>
                                                                            </ListItem>
                                                                        ))}
                                                                    </List>
                                                                </Collapse>
                                                            )}
                                                        </Box>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>

                                        {/* Wardrobe Section */}
                                        <Grid item xs={12} md={3}>
                                            <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                                WARDROBE
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.wardrobe.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <Box sx={{ width: '100%' }}>
                                                            <ListItemButton
                                                                component={item.hasSubmenu ? 'div' : Link}
                                                                to={item.hasSubmenu ? undefined : item.path}
                                                                onClick={item.hasSubmenu ? () => handleSectionToggle(`wardrobe-${index}`) : undefined}
                                                                sx={{
                                                                    borderRadius: 1,
                                                                    '&:hover': {
                                                                        backgroundColor: theme.palette.action.hover
                                                                    }
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={item.label}
                                                                    sx={{
                                                                        '& .MuiListItemText-primary': {
                                                                            fontSize: '0.9rem',
                                                                            color: 'text.primary'
                                                                        }
                                                                    }}
                                                                />
                                                                {item.hasSubmenu && (
                                                                    expandedSections[`wardrobe-${index}`] ? 
                                                                    <ExpandLessIcon fontSize="small" color="action" /> : 
                                                                    <ExpandMoreIcon fontSize="small" color="action" />
                                                                )}
                                                            </ListItemButton>
                                                            
                                                            {/* Suboptions */}
                                                            {item.hasSubmenu && item.suboptions && (
                                                                <Collapse in={expandedSections[`wardrobe-${index}`]} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding sx={{ pl: 2 }}>
                                                                        {item.suboptions.map((suboption, subIndex) => (
                                                                            <ListItem key={subIndex} sx={{ p: 0, mb: 0.5 }}>
                                                                                <ListItemButton
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        borderRadius: 1,
                                                                                        py: 0.5,
                                                                                        '&:hover': {
                                                                                            backgroundColor: theme.palette.action.hover
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <ListItemText
                                                                                        primary={suboption.label}
                                                                                        sx={{
                                                                                            '& .MuiListItemText-primary': {
                                                                                                fontSize: '0.8rem',
                                                                                                color: 'text.secondary',
                                                                                                pl: 1
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                </ListItemButton>
                                                                            </ListItem>
                                                                        ))}
                                                                    </List>
                                                                </Collapse>
                                                            )}
                                                        </Box>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        )}
                    </Box>
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
