import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const packages = [
    {
        id: 'essentials',
        title: 'Essentials',
        price: '₹₹',
        description: 'Affordable interior solutions that bring comfort and style to your home.',
        features: [
            'Affordable pricing',
            'Convenient designs',
            'Basic accessories'
        ],
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg'
    },
    {
        id: 'premium',
        title: 'Premium',
        price: '₹₹₹',
        description: 'Superior home interior solutions that will take your interiors to the next level.',
        features: [
            'Mid-range pricing',
            'Premium designs',
            'Wide range of accessories'
        ],
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg'
    },
    {
        id: 'luxe',
        title: 'Luxe',
        price: '₹₹₹₹',
        description: 'High-end interior solutions for the ultimate home interior experience you deserve.',
        features: [
            'Premium pricing',
            'Luxury designs',
            'Premium accessories',
            'Personal designer'
        ],
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg'
    }
];

export default function PackageSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedPackage, setSelectedPackage] = useState('premium');

    const handlePackageChange = (event) => {
        setSelectedPackage(event.target.value);
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            bhk: searchParams.get('bhk'),
            size: searchParams.get('size'),
            livingRoom: searchParams.get('livingRoom'),
            kitchen: searchParams.get('kitchen'),
            bedroom: searchParams.get('bedroom'),
            bathroom: searchParams.get('bathroom'),
            dining: searchParams.get('dining'),
            package: selectedPackage
        });
        navigate(`/price-calculators/home/calculator/estimate?${queryParams.toString()}`);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            bhk: searchParams.get('bhk'),
            size: searchParams.get('size'),
            livingRoom: searchParams.get('livingRoom'),
            kitchen: searchParams.get('kitchen'),
            bedroom: searchParams.get('bedroom'),
            bathroom: searchParams.get('bathroom'),
            dining: searchParams.get('dining')
        });
        navigate(`/price-calculators/home/calculator/rooms?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Select your package
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary
                }}
            >
                Choose the package that best fits your needs and budget
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedPackage}
                    onChange={handlePackageChange}
                    sx={{ gap: 3 }}
                >
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            sx={{
                                border: selectedPackage === pkg.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedPackage === pkg.id ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedPackage(pkg.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={pkg.id}
                                    control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 16, right: 16, m: 0 }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                            {pkg.title}
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                            {pkg.price}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                                        {pkg.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            height: 200,
                                            backgroundImage: `url(${pkg.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 3
                                        }}
                                    />

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        {pkg.features.map((feature, index) => (
                                            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Box
                                                    sx={{
                                                        width: 20,
                                                        height: 20,
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.primary.main,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 2
                                                    }}
                                                >
                                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '12px' }}>
                                                        ✓
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2">
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </RadioGroup>
            </FormControl>

            {/* Navigation Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
