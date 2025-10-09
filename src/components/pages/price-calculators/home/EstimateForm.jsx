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

export default function EstimateForm() {
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
        const bhk = searchParams.get('bhk');
        const size = searchParams.get('size');
        const packageType = searchParams.get('package');
        const livingRoom = parseInt(searchParams.get('livingRoom')) || 0;
        const kitchen = parseInt(searchParams.get('kitchen')) || 0;
        const bedroom = parseInt(searchParams.get('bedroom')) || 0;
        const bathroom = parseInt(searchParams.get('bathroom')) || 0;
        const dining = parseInt(searchParams.get('dining')) || 0;

        // Base pricing per room type
        const roomPrices = {
            livingRoom: 150000,
            kitchen: 200000,
            bedroom: 120000,
            bathroom: 80000,
            dining: 100000
        };

        // Package multipliers
        const packageMultipliers = {
            essentials: 1.0,
            premium: 1.3,
            luxe: 1.8
        };

        // Size multipliers
        const sizeMultipliers = {
            small: 0.8,
            large: 1.2
        };

        let totalPrice = 0;
        totalPrice += livingRoom * roomPrices.livingRoom;
        totalPrice += kitchen * roomPrices.kitchen;
        totalPrice += bedroom * roomPrices.bedroom;
        totalPrice += bathroom * roomPrices.bathroom;
        totalPrice += dining * roomPrices.dining;

        // Apply package multiplier
        const packageMultiplier = packageMultipliers[packageType] || 1.0;
        totalPrice *= packageMultiplier;

        // Apply size multiplier if applicable
        if (size) {
            const sizeMultiplier = sizeMultipliers[size] || 1.0;
            totalPrice *= sizeMultiplier;
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
        alert(`Thank you ${formData.name}! Your estimated price is ₹${estimatedPrice.toLocaleString()}. We'll contact you soon!`);

        // Navigate back to home or show success page
        navigate('/price-calculators/home');
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
        navigate(`/price-calculators/home/calculator/package?${queryParams.toString()}`);
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
                Your estimate is almost ready
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
                                Estimated Price
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
