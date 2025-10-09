import React from 'react';
import { Box, Container, Typography, LinearProgress, useTheme } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import BHKSelection from './BHKSelection';
import RoomSelection from './RoomSelection';
import PackageSelection from './PackageSelection';
import EstimateForm from './EstimateForm';

const steps = [
    { id: 'bhk', label: 'BHK TYPE', path: '/price-calculators/home/calculator/bhk' },
    { id: 'rooms', label: 'ROOMS TO DESIGN', path: '/price-calculators/home/calculator/rooms' },
    { id: 'package', label: 'PACKAGE', path: '/price-calculators/home/calculator/package' },
    { id: 'estimate', label: 'GET QUOTE', path: '/price-calculators/home/calculator/estimate' }
];

export default function HomeInteriorCalculatorSteps() {
    const theme = useTheme();
    const location = useLocation();

    const getCurrentStepIndex = () => {
        const currentPath = location.pathname;
        return steps.findIndex(step => currentPath.includes(step.id));
    };

    const currentStepIndex = getCurrentStepIndex();
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f8f7f8' }}>
            <Container maxWidth="lg">
                {/* Progress Header */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 3,
                    mb: 2
                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.text.primary
                        }}
                    >
                        KALAKRUTI
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flex: 1,
                        mx: 4
                    }}>
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        backgroundColor: index <= currentStepIndex
                                            ? theme.palette.primary.main
                                            : theme.palette.grey[300],
                                        color: index <= currentStepIndex ? 'white' : theme.palette.text.secondary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        mr: 1
                                    }}
                                >
                                    {index < currentStepIndex ? '✓' : index + 1}
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: index <= currentStepIndex ? 'bold' : 'normal',
                                        color: index <= currentStepIndex
                                            ? theme.palette.primary.main
                                            : theme.palette.text.secondary,
                                        fontSize: '12px'
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.text.secondary
                        }}
                    >
                        {currentStepIndex + 1}/4
                    </Typography>
                </Box>

                {/* Progress Bar */}
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: theme.palette.grey[200],
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: theme.palette.primary.main
                        }
                    }}
                />

                {/* Step Content */}
                <Box sx={{ py: 4 }}>
                    <Routes>
                        <Route path="bhk" element={<BHKSelection />} />
                        <Route path="rooms" element={<RoomSelection />} />
                        <Route path="package" element={<PackageSelection />} />
                        <Route path="estimate" element={<EstimateForm />} />
                    </Routes>
                </Box>
            </Container>
        </Box>
    );
}
