import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function KitchenMeasurementsStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [measurements, setMeasurements] = useState({
        length: '',
        width: '',
        height: '',
        cabinetLength: '',
        cabinetHeight: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field) => (event) => {
        const value = event.target.value;
        setMeasurements(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const validateMeasurements = () => {
        const newErrors = {};

        if (!measurements.length || measurements.length <= 0) {
            newErrors.length = 'Length is required and must be greater than 0';
        }
        if (!measurements.width || measurements.width <= 0) {
            newErrors.width = 'Width is required and must be greater than 0';
        }
        if (!measurements.height || measurements.height <= 0) {
            newErrors.height = 'Height is required and must be greater than 0';
        }
        if (!measurements.cabinetLength || measurements.cabinetLength <= 0) {
            newErrors.cabinetLength = 'Cabinet length is required and must be greater than 0';
        }
        if (!measurements.cabinetHeight || measurements.cabinetHeight <= 0) {
            newErrors.cabinetHeight = 'Cabinet height is required and must be greater than 0';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateMeasurements()) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get('layout'),
                length: measurements.length,
                width: measurements.width,
                height: measurements.height,
                cabinetLength: measurements.cabinetLength,
                cabinetHeight: measurements.cabinetHeight
            });
            navigate(`/price-calculators/kitchen/calculator/package?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get('layout')
        });
        navigate(`/price-calculators/kitchen/calculator/layout?${queryParams.toString()}`);
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
                Enter your kitchen measurements
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
                Provide accurate measurements to get the most precise pricing for your kitchen renovation.
            </Typography>

            <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Room Dimensions
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Length (ft)"
                            type="number"
                            value={measurements.length}
                            onChange={handleInputChange('length')}
                            error={!!errors.length}
                            helperText={errors.length}
                            inputProps={{ min: 0, step: 0.1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Width (ft)"
                            type="number"
                            value={measurements.width}
                            onChange={handleInputChange('width')}
                            error={!!errors.width}
                            helperText={errors.width}
                            inputProps={{ min: 0, step: 0.1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Height (ft)"
                            type="number"
                            value={measurements.height}
                            onChange={handleInputChange('height')}
                            error={!!errors.height}
                            helperText={errors.height}
                            inputProps={{ min: 0, step: 0.1 }}
                        />
                    </Grid>
                </Grid>
            </Card>

            <Card sx={{ mb: 4, p: 3 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Cabinet Specifications
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Cabinet Length (ft)"
                            type="number"
                            value={measurements.cabinetLength}
                            onChange={handleInputChange('cabinetLength')}
                            error={!!errors.cabinetLength}
                            helperText={errors.cabinetLength}
                            inputProps={{ min: 0, step: 0.1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Cabinet Height (ft)"
                            type="number"
                            value={measurements.cabinetHeight}
                            onChange={handleInputChange('cabinetHeight')}
                            error={!!errors.cabinetHeight}
                            helperText={errors.cabinetHeight}
                            inputProps={{ min: 0, step: 0.1 }}
                        />
                    </Grid>
                </Grid>
            </Card>

            <Box sx={{
                backgroundColor: '#f5f5f5',
                p: 3,
                borderRadius: 2,
                mb: 4
            }}>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    <strong>Tip:</strong> Measure from wall to wall for room dimensions. For cabinets, measure the total length where you want cabinets installed and the desired height from floor to ceiling.
                </Typography>
            </Box>

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
