import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const finishes = [
    {
        id: 'matte-laminate',
        name: 'Matte Laminate',
        description: 'Is a smooth, durable finish which gives a clean and rich look.',
        subDescription: 'Going for that muted, smooth look for your kitchen? This one\'s for you.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: '₹₹'
    },
    {
        id: 'hgl-laminate',
        name: 'HGL Laminate',
        description: 'Is glossy with solid colours that uplifts a space with its shiny finish.',
        subDescription: 'Always wanted magazine-like glossy kitchen cabinets? Choose this!',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        price: '₹₹₹'
    },
    {
        id: 'matte-membrane',
        name: 'Matte Membrane',
        description: 'Comes with a smooth surface and has better grooving ability.',
        subDescription: 'Go for this if you want a seamless finish that sits well in any kind of kitchen.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
        price: '₹₹₹'
    },
    {
        id: 'hgl-membrane',
        name: 'HGL Membrane',
        description: 'Has a lustrous surface that enhances your modular kitchen.',
        subDescription: 'Want those strong, shiny cabinets with a pop of colour? Consider this!',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: '₹₹₹₹'
    },
    {
        id: 'anti-scratch-acrylic',
        name: 'Anti-scratch Acrylic',
        description: 'Is an elegant, reflective, glossy finish that is scratch resistant.',
        subDescription: 'Dreaming of a chic kitchen with a touch of luxury? Go for this one.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        price: '₹₹₹₹'
    },
    {
        id: 'glossy-pu',
        name: 'Glossy PU',
        description: 'Comes with a slick look, high durability, and a polished finish.',
        subDescription: 'Consider this if you want mirror-like cabinets that are easy to clean!',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
        price: '₹₹₹₹'
    }
];

export default function KitchenFinishStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFinish, setSelectedFinish] = useState('');

    const handleFinishChange = (event) => {
        setSelectedFinish(event.target.value);
    };

    const handleNext = () => {
        if (selectedFinish) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get('layout'),
                length: searchParams.get('length'),
                width: searchParams.get('width'),
                height: searchParams.get('height'),
                cabinetLength: searchParams.get('cabinetLength'),
                cabinetHeight: searchParams.get('cabinetHeight'),
                package: searchParams.get('package'),
                material: searchParams.get('material'),
                granite: searchParams.get('granite'),
                loft: searchParams.get('loft'),
                finish: selectedFinish
            });
            navigate(`/price-calculators/kitchen/calculator/accessories?${queryParams.toString()}`);
        }
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
            package: searchParams.get('package'),
            material: searchParams.get('material'),
            granite: searchParams.get('granite'),
            loft: searchParams.get('loft')
        });
        navigate(`/price-calculators/kitchen/calculator/loft?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Pick a finish for base & wall cabinets
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedFinish}
                    onChange={handleFinishChange}
                    sx={{ gap: 3 }}
                >
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3
                    }}>
                        {finishes.map((finish) => (
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
                                        sx={{ position: 'absolute', top: 16, right: 16, m: 0, zIndex: 1 }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                {finish.name}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                                {finish.price}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body1" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                                            {finish.description}
                                        </Typography>

                                        <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary, fontStyle: 'italic' }}>
                                            {finish.subDescription}
                                        </Typography>

                                        <Box
                                            sx={{
                                                height: 180,
                                                backgroundImage: `url(${finish.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: 2,
                                                mb: 2
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
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
