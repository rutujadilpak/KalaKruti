import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    useTheme,
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
    });

    const [estimatedPrice, setEstimatedPrice] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const bhk = searchParams.get('bhk');
        const size = searchParams.get('size');
        const packageType = searchParams.get('package');
        const livingRoom = parseInt(searchParams.get('livingRoom')) || 0;
        const kitchen = parseInt(searchParams.get('kitchen')) || 0;
        const bedroom = parseInt(searchParams.get('bedroom')) || 0;
        const bathroom = parseInt(searchParams.get('bathroom')) || 0;
        const dining = parseInt(searchParams.get('dining')) || 0;

        // Base pricing
        const roomPrices = {
            livingRoom: 150000,
            kitchen: 200000,
            bedroom: 120000,
            bathroom: 80000,
            dining: 100000,
        };

        const packageMultipliers = {
            essentials: 1.0,
            premium: 1.3,
            luxe: 1.8,
        };

        const sizeMultipliers = {
            small: 0.8,
            large: 1.2,
        };

        let totalPrice = 0;
        totalPrice += livingRoom * roomPrices.livingRoom;
        totalPrice += kitchen * roomPrices.kitchen;
        totalPrice += bedroom * roomPrices.bedroom;
        totalPrice += bathroom * roomPrices.bathroom;
        totalPrice += dining * roomPrices.dining;

        const packageMultiplier = packageMultipliers[packageType] || 1.0;
        totalPrice *= packageMultiplier;

        if (size) {
            const sizeMultiplier = sizeMultipliers[size] || 1.0;
            totalPrice *= sizeMultiplier;
        }

        setEstimatedPrice(Math.round(totalPrice));
    }, [location.search]);

    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(
            `Thank you ${formData.name}! Your estimated price is ₹${estimatedPrice.toLocaleString()}. We'll contact you soon!`
        );

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
            dining: searchParams.get('dining'),
        });
        navigate(`/price-calculators/home/calculator/package?${queryParams.toString()}`);
    };

    const isFormValid = () => {
        return (
            formData.name.trim() &&
            formData.email.trim() &&
            formData.phone.trim() &&
            formData.propertyName.trim()
        );
    };

    return (
        <Box sx={{ maxWidth: 550, mx: 'auto', p: 3 }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Your Estimate Is Almost Ready
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    mb: 3,
                    color: theme.palette.text.secondary,
                }}
            >
                Please fill out the details below to receive your estimate.
            </Typography>

            <Card
                sx={{
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: theme.palette.grey[300],
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
            >
                <CardContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            margin="normal"
                            required
                            size="small"
                        />

                        <TextField
                            fullWidth
                            label="Email ID"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            margin="normal"
                            required
                            size="small"
                        />

                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange('phone')}
                            margin="normal"
                            required
                            size="small"
                        />

                        <TextField
                            fullWidth
                            label="Property Name"
                            value={formData.propertyName}
                            onChange={handleInputChange('propertyName')}
                            margin="normal"
                            required
                            size="small"
                        />

                        {/* Estimated Price Display */}
                        <Box
                            sx={{
                                textAlign: 'center',
                                p: 2.5,
                                mt: 3,
                                backgroundColor: theme.palette.primary.light + '20',
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{ color: theme.palette.text.secondary, mb: 0.5 }}
                            >
                                Estimated Price
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.primary.main,
                                }}
                            >
                                ₹{estimatedPrice.toLocaleString()}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ color: theme.palette.text.secondary, mt: 0.5 }}
                            >
                                *Final price may vary based on requirements
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 3,
                    pt: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!isFormValid()}
                    sx={{
                        px: 3,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
