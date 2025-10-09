import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const kitchenLayouts = [
    {
        id: 'l-shaped',
        title: 'L-shaped Kitchen',
        description: 'Featuring adjoining countertops with corner spaces. Perfect for medium to large kitchens with efficient workflow.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
        price: '₹₹₹'
    },
    {
        id: 'u-shaped',
        title: 'U-shaped Kitchen',
        description: 'Comprising three connected walls of cabinets with a practical open entrance. Ideal for larger kitchens.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
        price: '₹₹₹₹'
    },
    {
        id: 'straight',
        title: 'Straight Kitchen',
        description: 'A convenient option with the countertop and cabinets placed in a straight line. Perfect for compact spaces.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
        price: '₹₹'
    },
    {
        id: 'galley',
        title: 'Galley Kitchen',
        description: 'Two parallel countertops with a walkway in between. Great for narrow spaces and efficient cooking workflow.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
        price: '₹₹₹'
    }
];

export default function KitchenLayoutStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedLayout, setSelectedLayout] = useState('');

    const handleLayoutChange = (event) => {
        setSelectedLayout(event.target.value);
    };

    const handleNext = () => {
        if (selectedLayout) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: selectedLayout
            });
            navigate(`/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        navigate('/price-calculators/kitchen');
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Select your kitchen layout
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 600,
                    mx: 'auto'
                }}
            >
                Choose the layout that best fits your space and cooking style. This will help us provide accurate pricing.
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedLayout}
                    onChange={handleLayoutChange}
                    sx={{ gap: 3 }}
                >
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3
                    }}>
                        {kitchenLayouts.map((layout) => (
                            <Card
                                key={layout.id}
                                sx={{
                                    border: selectedLayout === layout.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                    borderColor: selectedLayout === layout.id ? theme.palette.primary.main : theme.palette.grey[300],
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                    }
                                }}
                                onClick={() => setSelectedLayout(layout.id)}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <FormControlLabel
                                        value={layout.id}
                                        control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                        label=""
                                        sx={{ position: 'absolute', top: 16, right: 16, m: 0, zIndex: 1 }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                {layout.title}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                                {layout.price}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                                            {layout.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                height: 200,
                                                backgroundImage: `url(${layout.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: 2,
                                                mb: 2
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
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
                    disabled={!selectedLayout}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600,
                        backgroundColor: '#E84E57',
                        '&:hover': {
                            backgroundColor: '#d13f47',
                        }
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
