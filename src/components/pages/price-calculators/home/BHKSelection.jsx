import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const bhkOptions = [
    {
        id: '1bhk',
        title: '1 BHK',
        sizes: [
            { id: 'small', label: 'Small', description: 'Below 800 sq ft' },
            { id: 'large', label: 'Large', description: 'Above 800 sq ft' }
        ]
    },
    {
        id: '2bhk',
        title: '2 BHK',
        sizes: [
            { id: 'small', label: 'Small', description: 'Below 800 sq ft' },
            { id: 'large', label: 'Large', description: 'Above 800 sq ft' }
        ]
    },
    {
        id: '3bhk',
        title: '3 BHK',
        sizes: [
            { id: 'small', label: 'Small', description: 'Below 1200 sq ft' },
            { id: 'large', label: 'Large', description: 'Above 1200 sq ft' }
        ]
    },
    {
        id: '4bhk',
        title: '4 BHK',
        sizes: [
            { id: 'small', label: 'Small', description: 'Below 1800 sq ft' },
            { id: 'large', label: 'Large', description: 'Above 1800 sq ft' }
        ]
    },
    {
        id: '5bhk',
        title: '5 BHK+',
        sizes: [
            { id: 'large', label: 'Large', description: 'Above 1800 sq ft' }
        ]
    }
];

export default function BHKSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selectedBHK, setSelectedBHK] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleBHKChange = (event) => {
        setSelectedBHK(event.target.value);
        setSelectedSize(''); // Reset size when BHK changes
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleNext = () => {
        if (selectedBHK && selectedSize) {
            const queryParams = new URLSearchParams({
                bhk: selectedBHK,
                size: selectedSize
            });
            navigate(`/price-calculators/home/calculator/rooms?${queryParams.toString()}`);
        }
    };

    const selectedBHKOption = bhkOptions.find(option => option.id === selectedBHK);

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
                Select your BHK type
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary
                }}
            >
                Choose the configuration and size of your home
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedBHK}
                    onChange={handleBHKChange}
                    sx={{ gap: 2 }}
                >
                    {bhkOptions.map((bhk) => (
                        <Card
                            key={bhk.id}
                            sx={{
                                border: selectedBHK === bhk.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedBHK === bhk.id ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedBHK(bhk.id)}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <FormControlLabel
                                    value={bhk.id}
                                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                    label={
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                {bhk.title}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                                {bhk.sizes.map((size) => (
                                                    <Box key={size.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                            {size.label}
                                                        </Typography>
                                                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                                                            {size.description}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    }
                                    sx={{ m: 0, width: '100%' }}
                                />
                            </CardContent>
                        </Card>
                    ))}
                </RadioGroup>
            </FormControl>

            {/* Size Selection - Only show when BHK is selected */}
            {selectedBHKOption && (
                <Box sx={{ mt: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            fontWeight: 'bold',
                            color: theme.palette.text.primary
                        }}
                    >
                        Select size for {selectedBHKOption.title}
                    </Typography>

                    <FormControl component="fieldset" sx={{ width: '100%' }}>
                        <RadioGroup
                            value={selectedSize}
                            onChange={handleSizeChange}
                            sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
                        >
                            {selectedBHKOption.sizes.map((size) => (
                                <Card
                                    key={size.id}
                                    sx={{
                                        flex: 1,
                                        border: selectedSize === size.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                        borderColor: selectedSize === size.id ? theme.palette.primary.main : theme.palette.grey[300],
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            borderColor: theme.palette.primary.main,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                    onClick={() => setSelectedSize(size.id)}
                                >
                                    <CardContent sx={{ p: 2, textAlign: 'center' }}>
                                        <FormControlLabel
                                            value={size.id}
                                            control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                            label={
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                        {size.label}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                                                        {size.description}
                                                    </Typography>
                                                </Box>
                                            }
                                            sx={{ m: 0, width: '100%' }}
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>
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
                    onClick={() => navigate('/price-calculators/home')}
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
                    disabled={!selectedBHK || !selectedSize}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
