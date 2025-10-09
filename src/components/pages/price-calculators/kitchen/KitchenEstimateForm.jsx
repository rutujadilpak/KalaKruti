import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Grid, useTheme, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function KitchenEstimateForm() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });
    const [estimateData, setEstimateData] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const layout = searchParams.get('layout');
        const length = parseFloat(searchParams.get('length')) || 0;
        const width = parseFloat(searchParams.get('width')) || 0;
        const height = parseFloat(searchParams.get('height')) || 0;
        const cabinetLength = parseFloat(searchParams.get('cabinetLength')) || 0;
        const cabinetHeight = parseFloat(searchParams.get('cabinetHeight')) || 0;
        const packageType = searchParams.get('package');
        const material = searchParams.get('material');
        const granite = searchParams.get('granite');
        const loft = searchParams.get('loft');
        const finish = searchParams.get('finish');
        const accessories = searchParams.get('accessories');
        const services = searchParams.get('services');
        const appliances = searchParams.get('appliances');

        // Calculate base price based on measurements and package
        const basePrice = calculateBasePrice(layout, length, width, cabinetLength, cabinetHeight, packageType);
        const additionalCosts = calculateAdditionalCosts(granite, loft, services, appliances);
        const totalPrice = basePrice + additionalCosts;

        setEstimateData({
            layout,
            length,
            width,
            height,
            cabinetLength,
            cabinetHeight,
            packageType,
            material,
            granite,
            loft,
            finish,
            accessories,
            services,
            appliances,
            basePrice,
            additionalCosts,
            totalPrice
        });
    }, [location.search]);

    const calculateBasePrice = (layout, length, width, cabinetLength, cabinetHeight, packageType) => {
        // Package pricing per square foot
        const packagePrices = {
            'essentials': 1200,
            'premium': 1800,
            'luxe': 2500,
            'build-your-own': 1500
        };

        // Layout pricing multipliers
        const layoutPrices = {
            'l-shaped': 1.2,
            'u-shaped': 1.5,
            'straight': 1.0,
            'galley': 1.1
        };

        const basePricePerSqFt = packagePrices[packageType] || 1200;
        const layoutMultiplier = layoutPrices[layout] || 1.0;

        // Calculate area
        const area = cabinetLength * cabinetHeight;

        return Math.round(area * basePricePerSqFt * layoutMultiplier);
    };

    const calculateAdditionalCosts = (granite, loft, services, appliances) => {
        let additionalCosts = 0;

        // Granite cost
        if (granite === 'yes') {
            additionalCosts += 25000; // ₹25,000 for granite countertop
        }

        // Loft cost
        if (loft === 'yes') {
            additionalCosts += 15000; // ₹15,000 for loft
        }

        // Services cost
        if (services) {
            const servicePrices = {
                'painting': 15000,
                'plumbing': 25000,
                'electrical': 20000,
                'platform': 30000,
                'dado': 18000
            };

            const selectedServices = services.split(',');
            selectedServices.forEach(service => {
                additionalCosts += servicePrices[service] || 0;
            });
        }

        // Appliances cost
        if (appliances) {
            const appliancePrices = {
                'hob': 8000,
                'chimney': 12000,
                'faucets-sink': 15000,
                'built-in-microwave': 18000,
                'built-in-oven': 25000,
                'refrigerator': 35000
            };

            const selectedAppliances = appliances.split(',');
            selectedAppliances.forEach(appliance => {
                additionalCosts += appliancePrices[appliance] || 0;
            });
        }

        return additionalCosts;
    };

    const handleInputChange = (field) => (event) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Estimate Request:', { ...formData, ...estimateData });
        alert('Thank you! Your estimate request has been submitted. We will contact you within 24 hours.');
        navigate('/price-calculators/kitchen');
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
            package: searchParams.get('package')
        });
        navigate(`/price-calculators/kitchen/calculator/package?${queryParams.toString()}`);
    };

    if (!estimateData) {
        return <Box>Loading...</Box>;
    }

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
                Your Kitchen is Ready! 🎉
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
                Review your selections and provide your contact details to receive a detailed quote.
            </Typography>

            <Grid container spacing={4}>
                {/* Estimate Summary */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Estimate Summary
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                Layout: <strong>{estimateData.layout?.toUpperCase()}</strong>
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                Dimensions: {estimateData.length}ft × {estimateData.width}ft × {estimateData.height}ft
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                Cabinet: {estimateData.cabinetLength}ft × {estimateData.cabinetHeight}ft
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                Package: <strong>{estimateData.packageType?.toUpperCase()}</strong>
                            </Typography>

                            {/* Show build-your-own details */}
                            {estimateData.packageType === 'build-your-own' && (
                                <>
                                    {estimateData.material && (
                                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                            Material: <strong>{estimateData.material?.toUpperCase()}</strong>
                                        </Typography>
                                    )}
                                    {estimateData.finish && (
                                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                            Finish: <strong>{estimateData.finish?.toUpperCase()}</strong>
                                        </Typography>
                                    )}
                                    {estimateData.accessories && (
                                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                            Accessories: <strong>{estimateData.accessories?.toUpperCase()}</strong>
                                        </Typography>
                                    )}
                                </>
                            )}
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                Kitchen Package Cost: ₹{estimateData.basePrice.toLocaleString()}
                            </Typography>
                            {estimateData.additionalCosts > 0 && (
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    Additional Features: ₹{estimateData.additionalCosts.toLocaleString()}
                                </Typography>
                            )}
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                            Total Estimate: ₹{estimateData.totalPrice.toLocaleString()}
                        </Typography>

                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 2, fontStyle: 'italic' }}>
                            *This is an approximate estimate. Final pricing may vary based on site conditions and additional requirements.
                        </Typography>
                    </Card>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                            Get Your Detailed Quote
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange('name')}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange('email')}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        value={formData.phone}
                                        onChange={handleInputChange('phone')}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="City"
                                        value={formData.city}
                                        onChange={handleInputChange('city')}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Additional Requirements (Optional)"
                                        multiline
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleInputChange('message')}
                                    />
                                </Grid>
                            </Grid>

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
                                    type="submit"
                                    variant="contained"
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
                                    GET DETAILED QUOTE
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
