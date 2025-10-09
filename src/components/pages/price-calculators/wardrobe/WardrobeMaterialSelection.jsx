import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const materialOptions = [
    {
        id: 'mdf',
        title: 'MDF',
        description: 'Seamless, free of knots, and has high resistance to wear & tear.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        price: '₹₹',
        proTip: 'An ideal choice for the cabinets owing to its smooth surface.'
    },
    {
        id: 'hdf',
        title: 'HDF/HMR',
        description: 'Sturdy and highly dense along with a solid screw-holding capacity.',
        image: 'https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=600',
        price: '₹₹₹',
        proTip: 'Perfect for heavy-duty applications with superior strength.'
    }
];

export default function WardrobeMaterialSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMaterial, setSelectedMaterial] = useState('mdf');

    const handleMaterialChange = (event) => {
        setSelectedMaterial(event.target.value);
    };

    const handleNext = () => {
        if (selectedMaterial) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get('height'),
                type: searchParams.get('type'),
                finish: searchParams.get('finish'),
                material: selectedMaterial
            });
            navigate(`/price-calculators/wardrobe/calculator/accessories?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish')
        });
        navigate(`/price-calculators/wardrobe/calculator/finish?${queryParams.toString()}`);
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
                Select your preferred core material
            </Typography>

            {/* Information Banner */}
            <Box sx={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: 2,
                p: 2,
                mb: 4,
                textAlign: 'center'
            }}>
                <Typography variant="body2" sx={{ color: '#856404', fontWeight: 500 }}>
                    Your core material options will be dependent on the finish you have chosen.
                </Typography>
            </Box>

            <Typography
                variant="h6"
                sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Available core materials options:
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedMaterial}
                    onChange={handleMaterialChange}
                    sx={{ gap: 3 }}
                >
                    {materialOptions.map((material) => (
                        <Card
                            key={material.id}
                            sx={{
                                border: selectedMaterial === material.id ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedMaterial === material.id ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedMaterial(material.id)}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={material.id}
                                    control={<Radio sx={{ color: theme.palette.primary.main, ml: 2 }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 16, right: 16, m: 0 }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                            {material.title}
                                        </Typography>
                                        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
                                            {material.price}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                                        {material.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            height: 200,
                                            backgroundImage: `url(${material.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: 2,
                                            mb: 3
                                        }}
                                    />

                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                            Price: {material.price}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                                            Pro Tip: {material.proTip}
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
                    disabled={!selectedMaterial}
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
