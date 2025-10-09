import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const heightOptions = [
    { id: '4ft', label: '4 ft', value: '4ft' },
    { id: '6ft', label: '6 ft', value: '6ft' },
    { id: '7ft', label: '7 ft', value: '7ft' },
    { id: '9ft', label: '9 ft', value: '9ft' }
];

export default function WardrobeLengthSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selectedHeight, setSelectedHeight] = useState('7ft');

    const handleHeightChange = (event) => {
        setSelectedHeight(event.target.value);
    };

    const handleNext = () => {
        if (selectedHeight) {
            const queryParams = new URLSearchParams({
                height: selectedHeight
            });
            navigate(`/price-calculators/wardrobe/calculator/type?${queryParams.toString()}`);
        }
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
                What is the height of your wardrobe?
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary
                }}
            >
                Want to know more.{' '}
                <Typography
                    component="span"
                    sx={{
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Check here
                </Typography>
            </Typography>

            {/* Standard Size Banner */}
            <Box sx={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffeaa7',
                borderRadius: 2,
                p: 2,
                mb: 4,
                textAlign: 'center'
            }}>
                <Typography variant="body2" sx={{ color: '#856404', fontWeight: 500 }}>
                    Standard size has been set for your convenience
                </Typography>
            </Box>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedHeight}
                    onChange={handleHeightChange}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {heightOptions.map((option) => (
                        <Card
                            key={option.id}
                            sx={{
                                flex: '0 0 calc(25% - 12px)',
                                minWidth: 120,
                                border: selectedHeight === option.value ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedHeight === option.value ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedHeight(option.value)}
                        >
                            <CardContent sx={{ p: 2, textAlign: 'center' }}>
                                <FormControlLabel
                                    value={option.value}
                                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                    label={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                                            {option.label}
                                        </Typography>
                                    }
                                    sx={{ m: 0, width: '100%', justifyContent: 'center' }}
                                />
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
                    onClick={() => navigate('/price-calculators/wardrobe')}
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
                    disabled={!selectedHeight}
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
