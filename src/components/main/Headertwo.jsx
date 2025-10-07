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

export default function Headertwo() {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [offeringsOpen, setOfferingsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    const offeringsData = {
        exploreOfferings: [
            {
                title: "Modular Interiors",
                subtitle: "Kitchens, wardrobes and storage",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                path: "/designs/modular-interiors"
            },
            {
                title: "Full Home Interiors",
                subtitle: "End-to-end home interiors",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                path: "/designs/full-home-interiors"
            },
            {
                title: "Luxury interiors",
                subtitle: "Homes that redefine elegance",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                path: "/designs/luxury-interiors"
            }
        ],
        kitchen: [
            { label: "Know Your Kitchen", path: "/kitchen/know-your-kitchen" },
            { label: "Kitchen Price Calculator", path: "/kitchen/price-calculator" },
            { label: "Kitchen Components", path: "/kitchen/components", hasSubmenu: true }
        ],
        wardrobe: [
            { label: "Know Your Wardrobe", path: "/wardrobe/know-your-wardrobe" },
            { label: "Wardrobe Price Calculator", path: "/wardrobe/price-calculator" },
            { label: "Wardrobe Components", path: "/wardrobe/components", hasSubmenu: true }
        ]
    };

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { 
            label: 'Offerings', 
            path: '/offerings',
            hasDropdown: true
        },
        { label: 'Price Calculators', path: '/price-calculators' },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    
    const handleOfferingsToggle = () => {
        setOfferingsOpen(!offeringsOpen);
        // Navigate to offerings page when clicking on Offerings
        navigate('/offerings');
    };

    const handleSectionToggle = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // Show dropdown when on offerings page
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
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        {navItems.map((item) => (
                        <Button
                            key={item.label}
                                component={item.hasDropdown ? 'div' : Link}
                                to={item.hasDropdown ? undefined : item.path}
                                onClick={item.hasDropdown ? handleOfferingsToggle : undefined}
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
                                {item.hasDropdown && (
                                    offeringsOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />
                                )}
                        </Button>
                        ))}
                        
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
                                        {/* Explore Offerings Section */}
                                        <Grid item xs={12} md={6}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem',
                                                    letterSpacing: '0.1em',
                                                    mb: 2,
                                                    display: 'block'
                                                }}
                                            >
                                                EXPLORE OFFERINGS
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
                                                            <Typography
                                                                variant="subtitle1"
                                                                sx={{
                                                                    fontWeight: 'bold',
                                                                    color: 'text.primary',
                                                                    mb: 0.25,
                                                                    fontSize: '0.9rem'
                                                                }}
                                                            >
                                                                {offering.title}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    color: 'text.secondary',
                                                                    fontSize: '0.8rem'
                                                                }}
                                                            >
                                                                {offering.subtitle}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </Box>
                                        </Grid>

                                        {/* Kitchen Section */}
                                        <Grid item xs={12} md={3}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem',
                                                    letterSpacing: '0.1em',
                                                    mb: 2,
                                                    display: 'block'
                                                }}
                                            >
                                                KITCHEN
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.kitchen.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <ListItemButton
                                                            component={Link}
                                                            to={item.path}
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
                                                                <ExpandMoreIcon fontSize="small" color="action" />
                                                            )}
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>

                                        {/* Wardrobe Section */}
                                        <Grid item xs={12} md={3}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem',
                                                    letterSpacing: '0.1em',
                                                    mb: 2,
                                                    display: 'block'
                                                }}
                                            >
                                                WARDROBE
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.wardrobe.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <ListItemButton
                                                            component={Link}
                                                            to={item.path}
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
                                                                <ExpandMoreIcon fontSize="small" color="action" />
                                                            )}
                                                        </ListItemButton>
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
