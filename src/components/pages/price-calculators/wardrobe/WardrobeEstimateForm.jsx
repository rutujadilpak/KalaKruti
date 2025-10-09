import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    useTheme
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function WardrobeEstimateForm() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyName: '',
        whatsappUpdates: false
    });

    const [estimatedPrice, setEstimatedPrice] = useState(0);

    useEffect(() => {
        // Calculate estimated price based on selections
        const searchParams = new URLSearchParams(location.search);
        const height = searchParams.get('height');
        const type = searchParams.get('type');
        const finish = searchParams.get('finish');
        const material = searchParams.get('material');
        const accessories = searchParams.get('accessories');

        // Base pricing
        const heightPrices = {
            '4ft': 80000,
            '6ft': 120000,
            '7ft': 150000,
            '9ft': 200000
        };

        const typeMultipliers = {
            'sliding': 1.0,
            'swing': 0.9
        };

        const finishMultipliers = {
            'laminate': 1.0,
            'membrane': 1.3,
            'acrylic': 1.8
        };

        const materialMultipliers = {
            'mdf': 1.0,
            'hdf': 1.2
        };

        // Accessories pricing
        const accessoriesPrices = {
            'loft': 15000,
            'single-drawer': 12000,
            'half-drawer-1': 8000,
            'half-drawer-2': 15000,
            'wicker-pullout': 10000
        };

        let totalPrice = heightPrices[height] || 150000;

        // Apply multipliers
        totalPrice *= typeMultipliers[type] || 1.0;
        totalPrice *= finishMultipliers[finish] || 1.0;
        totalPrice *= materialMultipliers[material] || 1.0;

        // Add accessories
        if (accessories) {
            const selectedAccessories = accessories.split(',');
            selectedAccessories.forEach(accessoryId => {
                if (accessoriesPrices[accessoryId]) {
                    totalPrice += accessoriesPrices[accessoryId];
                }
            });
        }

        setEstimatedPrice(Math.round(totalPrice));
    }, [location.search]);

    const handleInputChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you would typically send the data to your backend
        console.log('Form submitted:', {
            ...formData,
            estimatedPrice,
            selections: Object.fromEntries(new URLSearchParams(location.search))
        });

        // For now, just show an alert
        alert(`Thank you ${formData.name}! Your estimated wardrobe price is ₹${estimatedPrice.toLocaleString()}. We'll contact you soon!`);

        // Navigate back to wardrobe calculator
        navigate('/price-calculators/wardrobe');
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish'),
            material: searchParams.get('material'),
            accessories: searchParams.get('accessories')
        });
        navigate(`/price-calculators/wardrobe/calculator/timeline?${queryParams.toString()}`);
    };

    const isFormValid = () => {
        return formData.name.trim() &&
            formData.email.trim() &&
            formData.phone.trim() &&
            formData.propertyName.trim();
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Your wardrobe estimate is almost ready
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            margin="normal"
                            required
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Email ID"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            margin="normal"
                            required
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Phone number"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange('phone')}
                            margin="normal"
                            required
                            sx={{ mb: 2 }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.whatsappUpdates}
                                    onChange={handleInputChange('whatsappUpdates')}
                                    sx={{ color: theme.palette.primary.main }}
                                />
                            }
                            label="Send me updates on WhatsApp"
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="Property Name"
                            value={formData.propertyName}
                            onChange={handleInputChange('propertyName')}
                            margin="normal"
                            required
                            sx={{ mb: 3 }}
                        />

                        {/* Estimated Price Display */}
                        <Box sx={{
                            textAlign: 'center',
                            p: 3,
                            backgroundColor: theme.palette.primary.light + '20',
                            borderRadius: 2,
                            mb: 3
                        }}>
                            <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 1 }}>
                                Estimated Wardrobe Price
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontWeight: 'bold',
                                color: theme.palette.primary.main
                            }}>
                                ₹{estimatedPrice.toLocaleString()}
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                                *Final price may vary based on specific requirements
                            </Typography>
                        </Box>

                        {/* Legal Text */}
                        <Typography variant="body2" sx={{
                            color: theme.palette.text.secondary,
                            mb: 2,
                            textAlign: 'center'
                        }}>
                            By submitting this form, you agree to the{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                privacy policy
                            </Typography>
                            {' '}&{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                terms and conditions
                            </Typography>
                        </Typography>

                        <Typography variant="body2" sx={{
                            color: theme.palette.text.secondary,
                            textAlign: 'center',
                            mb: 3
                        }}>
                            This site is protected by reCAPTCHA and the Google{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                Privacy Policy
                            </Typography>
                            {' '}and{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                Terms of Service
                            </Typography>
                            {' '}apply.
                        </Typography>
                    </form>
                </CardContent>
            </Card>

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
                    onClick={handleSubmit}
                    disabled={!isFormValid()}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    SUBMIT
                </Button>
            </Box>
        </Box>
    );
}
