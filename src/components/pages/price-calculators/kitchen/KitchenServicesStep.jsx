import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Checkbox,
    useTheme,
    Button,
    FormControlLabel
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const services = [
    {
        id: 'painting',
        name: 'Painting',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'plumbing',
        name: 'Plumbing',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    },
    {
        id: 'electrical',
        name: 'Electrical',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300'
    },
    {
        id: 'platform',
        name: 'Platform',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300'
    },
    {
        id: 'dado',
        name: 'Dado',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300'
    }
];

export default function KitchenServicesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceChange = (serviceId) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get('layout'),
            package: searchParams.get('package'),
            services: selectedServices.join(',')
        });
        navigate(`/price-calculators/kitchen/calculator/appliances?${queryParams.toString()}`);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get('layout'),
            package: searchParams.get('package')
        });
        navigate(`/price-calculators/kitchen/calculator/accessories?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
            {/* Header */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Select the on-site services you would require
            </Typography>

            {/* Service Grid */}
            <Grid container spacing={3} justifyContent="center">
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.id}>
                        <Card
                            sx={{
                                border: selectedServices.includes(service.id)
                                    ? `2px solid ${theme.palette.primary.main}`
                                    : '1px solid #ddd',
                                borderRadius: 2,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: theme.shadows[6],
                                    borderColor: theme.palette.primary.main
                                }
                            }}
                            onClick={() => handleServiceChange(service.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Box
                                    sx={{
                                        height: 150,
                                        backgroundImage: `url(${service.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8
                                    }}
                                />
                                <Box sx={{ textAlign: 'center', p: 2 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedServices.includes(service.id)}
                                                onChange={() => handleServiceChange(service.id)}
                                                sx={{
                                                    color: theme.palette.primary.main,
                                                    '&.Mui-checked': {
                                                        color: theme.palette.primary.main
                                                    }
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary
                                                }}
                                            >
                                                {service.name}
                                            </Typography>
                                        }
                                        sx={{ justifyContent: 'center' }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
                    pt: 3,
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}
            >
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
                    disabled={selectedServices.length === 0}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600,
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark
                        },
                        '&:disabled': {
                            backgroundColor: theme.palette.action.disabled
                        }
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
