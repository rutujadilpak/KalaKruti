import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    useTheme
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const kitchenLayouts = [
    {
        id: 'l-shaped',
        title: 'L-shaped',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600'
    },
    {
        id: 'u-shaped',
        title: 'U-shaped',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600'
    },
    {
        id: 'straight',
        title: 'Straight',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600'
    },
    {
        id: 'parallel',
        title: 'Parallel',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600'
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
            const queryParams = new URLSearchParams({ layout: selectedLayout });
            navigate(`/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        navigate('/price-calculators/kitchen');
    };

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Select your kitchen layout
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedLayout}
                    onChange={handleLayoutChange}
                    sx={{ gap: 3 }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                            gap: 3
                        }}
                    >
                        {kitchenLayouts.map((layout) => (
                            <Card
                                key={layout.id}
                                sx={{
                                    border: selectedLayout === layout.id
                                        ? `2px solid ${theme.palette.primary.main}`
                                        : '1px solid',
                                    borderColor: selectedLayout === layout.id
                                        ? theme.palette.primary.main
                                        : theme.palette.grey[300],
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                    }
                                }}
                                onClick={() => setSelectedLayout(layout.id)}
                            >
                                <CardContent sx={{ p: 2 }}>
                                    <FormControlLabel
                                        value={layout.id}
                                        control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                        label=""
                                        sx={{ position: 'absolute', top: 10, right: 10, m: 0, zIndex: 1 }}
                                    />

                                    <Box
                                        sx={{
                                            height: 140,
                                            width: '100%',
                                            backgroundImage: `url(${layout.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 1,
                                            mb: 1
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        {layout.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </RadioGroup>
            </FormControl>

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
                    disabled={!selectedLayout}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600,
                        backgroundColor: '#E84E57',
                        '&:hover': {
                            backgroundColor: '#d13f47'
                        }
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
