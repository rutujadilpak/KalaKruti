import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Checkbox, FormControlLabel, useTheme, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const services = [
    {
        id: 'painting',
        name: 'Painting',
        description: 'Professional painting services for your kitchen walls and ceiling',
        price: '₹15,000',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'plumbing',
        name: 'Plumbing',
        description: 'Complete plumbing work including water connections and drainage',
        price: '₹25,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    },
    {
        id: 'electrical',
        name: 'Electrical',
        description: 'Electrical wiring, outlets, and lighting installation',
        price: '₹20,000',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300'
    },
    {
        id: 'platform',
        name: 'Platform',
        description: 'Kitchen platform construction and finishing',
        price: '₹30,000',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'dado',
        name: 'Dado',
        description: 'Wall tiling and dado work for kitchen walls',
        price: '₹18,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    }
];

export default function KitchenServicesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceChange = (serviceId) => {
        setSelectedServices(prev => {
            if (prev.includes(serviceId)) {
                return prev.filter(id => id !== serviceId);
            } else {
                return [...prev, serviceId];
            }
        });
    };

    const calculateTotalPrice = () => {
        return selectedServices.reduce((total, serviceId) => {
            const service = services.find(s => s.id === serviceId);
            const price = service ? parseInt(service.price.replace(/[₹,]/g, '')) : 0;
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
            services: selectedServices.join(',')
        });
        navigate(`/price-calculators/kitchen/calculator/appliances?${queryParams.toString()}`);
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
            accessories: searchParams.get('accessories')
        });
        navigate(`/price-calculators/kitchen/calculator/accessories?${queryParams.toString()}`);
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
                Select the on-site services you would require.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={4} key={service.id}>
                        <Card
                            sx={{
                                border: selectedServices.includes(service.id) ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedServices.includes(service.id) ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => handleServiceChange(service.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => handleServiceChange(service.id)}
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
                                            backgroundImage: `url(${service.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 2
                                        }}
                                    />

                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {service.name}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                                        {service.description}
                                    </Typography>

                                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                                        {service.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Selected Services Summary */}
            {selectedServices.length > 0 && (
                <Card sx={{ mb: 4, p: 3, backgroundColor: '#f8f7f8' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Selected Services ({selectedServices.length})
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {selectedServices.map((serviceId) => {
                            const service = services.find(s => s.id === serviceId);
                            return (
                                <Box
                                    key={serviceId}
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
                                    {service?.name} - {service?.price}
                                </Box>
                            );
                        })}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                        Total Services Cost: ₹{calculateTotalPrice().toLocaleString()}
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
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
