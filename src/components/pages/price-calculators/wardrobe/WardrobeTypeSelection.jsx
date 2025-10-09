import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const wardrobeTypes = [
    {
        id: 'sliding',
        title: 'Sliding',
        description: 'Movable doors that slide horizontally along a metal rail and save floor space. Make a style statement even in a compact space.',
        image: 'https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600',
        price: '₹₹'
    },
    {
        id: 'swing',
        title: 'Swing',
        description: 'Movable doors that swing out to open, giving better visibility and storage space. A cost-effective option that never goes out of style.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        price: '₹₹'
    }
];

export default function WardrobeTypeSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleNext = () => {
        if (selectedType) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get('height'),
                type: selectedType
            });
            navigate(`/price-calculators/wardrobe/calculator/finish?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height')
        });
        navigate(`/price-calculators/wardrobe/calculator/length?${queryParams.toString()}`);
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
                Select the type of wardrobe
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedType}
                    onChange={handleTypeChange}
                    sx={{ gap: 3 }}
                >
                    {wardrobeTypes.map((type) => (
                        <Card
                            key={type.id}
                            sx={{
                                border: selectedType === type.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedType === type.id ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedType(type.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={type.id}
                                    control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 16, right: 16, m: 0 }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                            {type.title}
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                            {type.price}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                                        {type.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            height: 250,
                                            backgroundImage: `url(${type.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 3
                                        }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </RadioGroup>
            </FormControl>

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
                    disabled={!selectedType}
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
