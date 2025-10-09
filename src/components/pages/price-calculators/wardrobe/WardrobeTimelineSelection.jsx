import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const timelineOptions = [
    { id: '6months', label: 'Within 6 months', value: '6months' },
    { id: 'after6months', label: 'After 6 months', value: 'after6months' },
    { id: 'norequirement', label: 'No requirement', value: 'norequirement' }
];

export default function WardrobeTimelineSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTimeline, setSelectedTimeline] = useState('6months');

    const handleTimelineChange = (event) => {
        setSelectedTimeline(event.target.value);
    };

    const handleNext = () => {
        if (selectedTimeline) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                height: searchParams.get('height'),
                type: searchParams.get('type'),
                finish: searchParams.get('finish'),
                material: searchParams.get('material'),
                accessories: searchParams.get('accessories'),
                timeline: selectedTimeline
            });
            navigate(`/price-calculators/wardrobe/calculator/estimate?${queryParams.toString()}`);
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish'),
            material: searchParams.get('material'),
            accessories: searchParams.get('accessories')
        });
        navigate(`/price-calculators/wardrobe/calculator/accessories?${queryParams.toString()}`);
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
                When will you require our home interior services?
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                    value={selectedTimeline}
                    onChange={handleTimelineChange}
                    sx={{ gap: 2 }}
                >
                    {timelineOptions.map((option) => (
                        <Card
                            key={option.id}
                            sx={{
                                border: selectedTimeline === option.value ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: selectedTimeline === option.value ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => setSelectedTimeline(option.value)}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <FormControlLabel
                                    value={option.value}
                                    control={<Radio sx={{ color: theme.palette.primary.main }} />}
                                    label={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>
                                            {option.label}
                                        </Typography>
                                    }
                                    sx={{ m: 0, width: '100%' }}
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
                    disabled={!selectedTimeline}
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
