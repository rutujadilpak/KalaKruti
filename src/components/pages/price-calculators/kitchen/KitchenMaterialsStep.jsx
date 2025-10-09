import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme, Tooltip, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Info as InfoIcon } from '@mui/icons-material';

const materials = [
    {
        id: 'hdf-hmr',
        name: 'HDF HMR',
        description: 'Has high strength and density, and a solid screw-holding capacity.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: '₹₹'
    },
    {
        id: 'mdf',
        name: 'MDF',
        description: 'Is seamless, free of knots, and has high resistance for wear & tear.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        price: '₹₹'
    },
    {
        id: 'mr-plywood',
        name: 'MR Plywood',
        description: 'Is moisture and termite resistant and does not wear off easily.',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
        price: '₹₹₹'
    },
    {
        id: 'bwr-plywood',
        name: 'BWR Plywood',
        description: 'Is water resistant and works well in areas prone to water exposure.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: '₹₹₹'
    },
    {
        id: 'bwp-plywood',
        name: 'BWP Plywood',
        description: 'Is waterproof and withstands prolonged exposure to water and moisture.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
        price: '₹₹₹₹'
    }
];

export default function KitchenMaterialsStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMaterial, setSelectedMaterial] = useState('');

    const handleMaterialChange = (event) => {
        setSelectedMaterial(event.target.value);
    };

    const handleNext = () => {
        if (selectedMaterial) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get('layout'),
                length: searchParams.get('length'),
                width: searchParams.get('width'),
                height: searchParams.get('height'),
                cabinetLength: searchParams.get('cabinetLength'),
                cabinetHeight: searchParams.get('cabinetHeight'),
                package: searchParams.get('package'),
                material: selectedMaterial
            });
            navigate(`/price-calculators/kitchen/calculator/granite?${queryParams.toString()}`);
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
            package: searchParams.get('package')
        });
        navigate(`/price-calculators/kitchen/calculator/package?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Materials for cabinets and shutters. Take your pick.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4 }}>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Want to know more?
                </Typography>
                <Tooltip title="Learn more about materials">
                    <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                        <InfoIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedMaterial}
                    onChange={handleMaterialChange}
                    sx={{ gap: 3 }}
                >
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3
                    }}>
                        {materials.map((material) => (
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
                                        sx={{ position: 'absolute', top: 16, right: 16, m: 0, zIndex: 1 }}
                                    />
                                    <Box sx={{ p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                                                {material.name}
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
                    disabled={!selectedMaterial}
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
