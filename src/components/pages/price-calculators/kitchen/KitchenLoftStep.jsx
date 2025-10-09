import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function KitchenLoftStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [loftOption, setLoftOption] = useState('');

    const handleLoftChange = (event) => {
        setLoftOption(event.target.value);
    };

    const handleNext = () => {
        if (loftOption) {
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
                loft: loftOption
            });
            navigate(`/price-calculators/kitchen/calculator/finish?${queryParams.toString()}`);
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
            granite: searchParams.get('granite')
        });
        navigate(`/price-calculators/kitchen/calculator/granite?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Do you want to add a loft?
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
                <RadioGroup
                    value={loftOption}
                    onChange={handleLoftChange}
                    sx={{ gap: 3 }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                        <Card
                            sx={{
                                border: loftOption === 'yes' ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: loftOption === 'yes' ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                minWidth: 200,
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setLoftOption('yes')}
                        >
                            <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 8, right: 8, m: 0 }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                                    Yes
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                                    Add loft storage
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            sx={{
                                border: loftOption === 'no' ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: loftOption === 'no' ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                minWidth: 200,
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setLoftOption('no')}
                        >
                            <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                <FormControlLabel
                                    value="no"
                                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                    label=""
                                    sx={{ position: 'absolute', top: 8, right: 8, m: 0 }}
                                />
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
                                    No
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                                    Skip loft storage
                                </Typography>
                            </CardContent>
                        </Card>
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
                    disabled={!loftOption}
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
