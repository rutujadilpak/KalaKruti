import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const accessoriesLevels = [
    {
        id: 'basic',
        name: 'Basic',
        description: 'A basic range of accessories usually required to get your ideal kitchen started.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: '₹₹',
        features: [
            'Basic hinges',
            'Standard handles',
            'Simple drawer slides',
            'Basic storage solutions'
        ]
    },
    {
        id: 'intermediate',
        name: 'Intermediate',
        description: 'A balanced range of accessories that offer good functionality and style.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        price: '₹₹₹',
        features: [
            'Soft-close hinges',
            'Premium handles',
            'Smooth drawer slides',
            'Pull-out trays',
            'Corner solutions'
        ]
    },
    {
        id: 'premium',
        name: 'Premium',
        description: 'A showstopper kitchen with an exclusive range you were always looking for.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
        price: '₹₹₹₹',
        features: [
            'Premium soft-close hinges',
            'Luxury handles',
            'High-end drawer slides',
            'Advanced pull-out systems',
            'Smart corner solutions',
            'Wine racks',
            'Spice organizers',
            'Cutlery trays'
        ]
    }
];

export default function KitchenAccessoriesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAccessories, setSelectedAccessories] = useState('');

    const handleAccessoriesChange = (event) => {
        setSelectedAccessories(event.target.value);
    };

    const handleNext = () => {
        if (selectedAccessories) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get('layout'),
                length: searchParams.get('length'),
                width: searchParams.get('width'),
                height: searchParams.get('height'),
                cabinetLength: searchParams.get('cabinetLength'),
                cabinetHeight: searchParams.get('cabinetHeight'),
                package: searchParams.get('package'),
                material: searchParams.get('material'),
                granite: searchParams.get('granite'),
                loft: searchParams.get('loft'),
                finish: searchParams.get('finish'),
                accessories: selectedAccessories
            });
            navigate(`/price-calculators/kitchen/calculator/services?${queryParams.toString()}`);
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
            cabinetHeight: searchParams.get('cabinetHeight'),
            package: searchParams.get('package'),
            material: searchParams.get('material'),
            granite: searchParams.get('granite'),
            loft: searchParams.get('loft'),
            finish: searchParams.get('finish')
        });
        navigate(`/price-calculators/kitchen/calculator/finish?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Now choose the accessories for your kitchen.
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedAccessories}
                    onChange={handleAccessoriesChange}
                    sx={{ gap: 3 }}
                >
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 3
                    }}>
                        {accessoriesLevels.map((level) => (
                            <Card
                                key={level.id}
                                sx={{
                                    border: selectedAccessories === level.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                    borderColor: selectedAccessories === level.id ? theme.palette.primary.main : theme.palette.grey[300],
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                    }
                                }}
                                onClick={() => setSelectedAccessories(level.id)}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <FormControlLabel
                                        value={level.id}
                                        control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                        label=""
                                        sx={{ position: 'absolute', top: 16, right: 16, m: 0, zIndex: 1 }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                {level.name}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                                {level.price}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                                            {level.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                height: 150,
                                                backgroundImage: `url(${level.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: 2,
                                                mb: 3
                                            }}
                                        />

                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                Features:
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                {level.features.map((feature, index) => (
                                                    <Typography
                                                        key={index}
                                                        variant="body2"
                                                        sx={{ color: theme.palette.text.secondary }}
                                                    >
                                                        • {feature}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </Box>
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
                    disabled={!selectedAccessories}
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
