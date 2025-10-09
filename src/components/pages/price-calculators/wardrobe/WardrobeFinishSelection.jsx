import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const finishOptions = [
    {
        id: 'laminate',
        title: 'Standard - Laminate',
        description: 'Looking for a seamless finish that sits well with every interior? This one\'s for you.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        price: '₹₹',
        proTip: 'Looking for a seamless finish that sits well with every interior? This one\'s for you.'
    },
    {
        id: 'membrane',
        title: 'Premium - Membrane',
        description: 'Get a magazine-like look that requires low maintenance.',
        image: 'https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600',
        price: '₹₹₹',
        proTip: 'Get a magazine-like look that requires low maintenance.'
    },
    {
        id: 'acrylic',
        title: 'Luxe - Acrylic',
        description: 'High-end finish with superior durability and premium aesthetics.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        price: '₹₹₹₹',
        proTip: 'Premium finish that offers exceptional durability and a luxurious look.'
    }
];

export default function WardrobeFinishSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFinish, setSelectedFinish] = useState('laminate');

    const handleFinishChange = (event) => {
        setSelectedFinish(event.target.value);
    };

    const handleNext = () => {
        if (selectedFinish) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get('height'),
                type: searchParams.get('type'),
                finish: selectedFinish
            });
            navigate(`/price-calculators/wardrobe/calculator/material?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type')
        });
        navigate(`/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`);
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
                Select your preferred finish
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedFinish}
                    onChange={handleFinishChange}
                    sx={{ gap: 3 }}
                >
                    {finishOptions.map((finish) => (
                        <Card
                            key={finish.id}
                            sx={{
                                border: selectedFinish === finish.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedFinish === finish.id ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedFinish(finish.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={finish.id}
                                    control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 16, right: 16, m: 0 }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                            {finish.title}
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                            {finish.price}
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            height: 200,
                                            backgroundImage: `url(${finish.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 3
                                        }}
                                    />

                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                            Price: {finish.price}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                            Pro Tip: {finish.proTip}
                                        </Typography>
                                    </Box>
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
                    disabled={!selectedFinish}
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
