import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Radio,
    useTheme,
    Tooltip,
    IconButton,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Info as InfoIcon,
    Check as CheckIcon,
    Star as StarIcon,
    Diamond as DiamondIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const packages = [
    {
        id: 'essentials',
        name: 'Essentials',
        priceRange: '₹₹',
        description: 'Affordable modular kitchen setups that offer style, comfort, and functionality.',
        features: [
            'Affordable pricing',
            'Convenient designs',
            'Basic accessories',
            'Standard materials',
            '1-year warranty'
        ],
        color: '#4CAF50',
        icon: CheckIcon
    },
    {
        id: 'premium',
        name: 'Premium',
        priceRange: '₹₹₹',
        description: 'Sleek and sophisticated designs with premium fittings, finishes, and durable materials.',
        features: [
            'Mid-range pricing',
            'Premium designs',
            'Wide-range of accessories',
            'Quality materials',
            '2-year warranty',
            'Design consultation'
        ],
        color: '#2196F3',
        icon: StarIcon
    },
    {
        id: 'luxe',
        name: 'Luxe',
        priceRange: '₹₹₹₹',
        description: 'Luxury kitchen solutions with high-end materials, exclusive fittings, and a personal touch.',
        features: [
            'Premium pricing',
            'Luxury designs',
            'Exclusive accessories',
            'Premium materials',
            '3-year warranty',
            'Personal designer',
            'Premium installation'
        ],
        color: '#FF9800',
        icon: DiamondIcon
    },
    {
        id: 'build-your-own',
        name: 'Build your own package',
        priceRange: 'Customised',
        description: 'A flexible, built-to-suit option that lets you pick and choose finishes and accessories.',
        features: [
            'Customised pricing',
            'Flexible designs',
            'Range of accessories to pick from',
            'Personalized selection',
            'Full customization'
        ],
        color: '#9C27B0',
        icon: DiamondIcon
    }
];

export default function KitchenPackageStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState('');

    const handlePackageSelect = (packageId) => {
        setSelected(packageId);
    };

    const handleNext = () => {
        if (selected) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get('layout'),
                length: searchParams.get('length'),
                width: searchParams.get('width'),
                height: searchParams.get('height'),
                cabinetLength: searchParams.get('cabinetLength'),
                cabinetHeight: searchParams.get('cabinetHeight'),
                package: selected
            });

            // If "Build Your Own" is selected, go to materials step
            if (selected === 'build-your-own') {
                navigate(`/price-calculators/kitchen/calculator/materials?${queryParams.toString()}`);
            } else {
                // For other packages, go directly to estimate
                navigate(`/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`);
            }
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get('layout'),
            length: searchParams.get('length'),
            width: searchParams.get('width'),
            height: searchParams.get('height'),
            cabinetLength: searchParams.get('cabinetLength'),
            cabinetHeight: searchParams.get('cabinetHeight')
        });
        navigate(`/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 2
                    }}
                >
                    Select your kitchen package
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        Want to know more?
                    </Typography>
                    <Tooltip title="Learn more about kitchen packages">
                        <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* Package Options */}
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
                sx={{ mb: 4 }}
            >
                {packages.map((pkg) => {
                    const IconComponent = pkg.icon;
                    return (
                        <Grid item xs={12} sm={6} md={3} key={pkg.id} display="flex">
                            <Card
                                sx={{
                                    flexGrow: 1,
                                    cursor: 'pointer',
                                    border: selected === pkg.id ? `2px solid ${pkg.color}` : '2px solid transparent',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    height: '100%',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                    },
                                }}
                                onClick={() => handlePackageSelect(pkg.id)}
                            >
                                {/* Radio Button */}
                                <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}>
                                    <Radio
                                        checked={selected === pkg.id}
                                        onChange={() => handlePackageSelect(pkg.id)}
                                        sx={{
                                            color: pkg.color,
                                            '&.Mui-checked': {
                                                color: pkg.color,
                                            },
                                        }}
                                    />
                                </Box>

                                <CardContent sx={{ p: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                    {/* Icon */}
                                    <Box sx={{
                                        mb: 2,
                                        height: 120,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: theme.palette.background.default,
                                        borderRadius: 2
                                    }}>
                                        <IconComponent sx={{ fontSize: 48, color: pkg.color, opacity: 0.8 }} />
                                    </Box>

                                    {/* Package Name */}
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}>
                                        {pkg.name}
                                    </Typography>

                                    {/* Price Range */}
                                    <Chip
                                        label={pkg.priceRange}
                                        sx={{
                                            mb: 2,
                                            backgroundColor: pkg.color,
                                            color: 'white',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        }}
                                    />

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 3,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {pkg.description}
                                    </Typography>

                                    {/* Features */}
                                    <List dense sx={{ p: 0 }}>
                                        {pkg.features.map((feature, index) => (
                                            <ListItem key={index} sx={{ px: 0, py: 0.3 }}>
                                                <ListItemIcon sx={{ minWidth: 30 }}>
                                                    <CheckIcon sx={{ fontSize: 18, color: pkg.color }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        color: theme.palette.text.primary
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {/* Package Comparison */}
            <Box sx={{
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
                p: 3,
                mb: 4
            }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 2,
                        textAlign: 'center'
                    }}
                >
                    Package Comparison
                </Typography>

                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {[
                        { name: 'Essentials', color: '#4CAF50', price: '₹2-4 Lakhs' },
                        { name: 'Premium', color: '#2196F3', price: '₹4-8 Lakhs' },
                        { name: 'Luxe', color: '#FF9800', price: '₹8+ Lakhs' },
                        { name: 'Build Your Own', color: '#9C27B0', price: 'Customised' }
                    ].map((pkg) => (
                        <Grid item xs={12} sm={6} md={3} key={pkg.name}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                                    {pkg.name}
                                </Typography>
                                <Typography variant="h6" sx={{ color: pkg.color, fontWeight: 600 }}>
                                    {pkg.price}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Navigation */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pt: 3,
                    borderTop: `1px solid ${theme.palette.divider}`
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontSize: '1rem'
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!selected}
                    sx={{
                        backgroundColor: '#E84E57',
                        color: 'white',
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                            backgroundColor: '#d13f47',
                        },
                        '&:disabled': {
                            backgroundColor: theme.palette.action.disabled,
                            color: theme.palette.action.disabled,
                        }
                    }}
                >
                    GET ESTIMATE
                </Button>
            </Box>
        </Box>
    );
}
