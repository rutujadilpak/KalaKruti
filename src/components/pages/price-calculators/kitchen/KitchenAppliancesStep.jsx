import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Checkbox, FormControlLabel, useTheme, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const appliances = [
    {
        id: 'hob',
        name: 'Hob',
        description: 'Gas stove with multiple burners for cooking',
        price: '₹8,000',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'chimney',
        name: 'Chimney',
        description: 'Kitchen exhaust system to remove smoke and odors',
        price: '₹12,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    },
    {
        id: 'faucets-sink',
        name: 'Faucets & Sink',
        description: 'Kitchen sink with modern faucet and accessories',
        price: '₹15,000',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300'
    },
    {
        id: 'built-in-microwave',
        name: 'Built-in Microwave',
        description: 'Built-in microwave oven for convenient cooking',
        price: '₹18,000',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'built-in-oven',
        name: 'Built-in Oven',
        description: 'Built-in oven for baking and roasting',
        price: '₹25,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    },
    {
        id: 'refrigerator',
        name: 'Refrigerator',
        description: 'Modern refrigerator with advanced features',
        price: '₹35,000',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300'
    }
];

export default function KitchenAppliancesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAppliances, setSelectedAppliances] = useState([]);

    const handleApplianceChange = (applianceId) => {
        setSelectedAppliances(prev => {
            if (prev.includes(applianceId)) {
                return prev.filter(id => id !== applianceId);
            } else {
                return [...prev, applianceId];
            }
        });
    };

    const calculateTotalPrice = () => {
        return selectedAppliances.reduce((total, applianceId) => {
            const appliance = appliances.find(a => a.id === applianceId);
            const price = appliance ? parseInt(appliance.price.replace(/[₹,]/g, '')) : 0;
            return total + price;
        }, 0);
    };

    const handleNext = () => {
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
            accessories: searchParams.get('accessories'),
            services: searchParams.get('services'),
            appliances: selectedAppliances.join(',')
        });
        navigate(`/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`);
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
            finish: searchParams.get('finish'),
            accessories: searchParams.get('accessories'),
            services: searchParams.get('services')
        });
        navigate(`/price-calculators/kitchen/calculator/services?${queryParams.toString()}`);
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
                Here come the appliances. Your pick?
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {appliances.map((appliance) => (
                    <Grid item xs={12} sm={6} md={4} key={appliance.id}>
                        <Card
                            sx={{
                                border: selectedAppliances.includes(appliance.id) ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedAppliances.includes(appliance.id) ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => handleApplianceChange(appliance.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedAppliances.includes(appliance.id)}
                                            onChange={() => handleApplianceChange(appliance.id)}
                                            sx={{ color: theme.palette.primary.main, ml: 2 }}
                                        />
                                    }
                                    label=""
                                    sx={{ position: 'absolute', top: 8, right: 8, m: 0, zIndex: 1 }}
                                />
                                <Box sx={{ p: 2 }}>
                                    <Box
                                        sx={{
                                            height: 120,
                                            backgroundImage: `url(${appliance.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 2
                                        }}
                                    />

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {appliance.name}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                                        {appliance.description}
                                    </Typography>

                                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                                        {appliance.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Selected Appliances Summary */}
            {selectedAppliances.length > 0 && (
                <Card sx={{ mb: 4, p: 3, backgroundColor: '#f8f7f8' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Selected Appliances ({selectedAppliances.length})
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {selectedAppliances.map((applianceId) => {
                            const appliance = appliances.find(a => a.id === applianceId);
                            return (
                                <Box
                                    key={applianceId}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        px: 2,
                                        py: 1,
                                        borderRadius: 1,
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {appliance?.name} - {appliance?.price}
                                </Box>
                            );
                        })}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                        Total Appliances Cost: ₹{calculateTotalPrice().toLocaleString()}
                    </Typography>
                </Card>
            )}

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
                        fontWeight: 600,
                        backgroundColor: '#E84E57',
                        '&:hover': {
                            backgroundColor: '#d13f47',
                        }
                    }}
                >
                    GET ESTIMATE
                </Button>
            </Box>
        </Box>
    );
}
