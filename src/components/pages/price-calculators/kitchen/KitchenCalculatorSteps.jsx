import React from 'react';
import { Box, Container, Typography, LinearProgress, useTheme } from '@mui/material';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import KitchenLayoutStep from './KitchenLayoutStep';
import KitchenMeasurementsStep from './KitchenMeasurementsStep';
import KitchenPackageStep from './KitchenPackageStep';
import KitchenMaterialsStep from './KitchenMaterialsStep';
import KitchenGraniteStep from './KitchenGraniteStep';
import KitchenLoftStep from './KitchenLoftStep';
import KitchenFinishStep from './KitchenFinishStep';
import KitchenAccessoriesStep from './KitchenAccessoriesStep';
import KitchenServicesStep from './KitchenServicesStep';
import KitchenAppliancesStep from './KitchenAppliancesStep';
import KitchenEstimateForm from './KitchenEstimateForm';

const steps = [
    { id: 'layout', label: 'LAYOUT', path: '/price-calculators/kitchen/calculator/layout' },
    { id: 'measurements', label: 'MEASUREMENTS', path: '/price-calculators/kitchen/calculator/measurements' },
    { id: 'package', label: 'PACKAGE', path: '/price-calculators/kitchen/calculator/package' },
    { id: 'estimate', label: 'GET QUOTE', path: '/price-calculators/kitchen/calculator/estimate' }
];

export default function KitchenCalculatorSteps() {
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
                        gap: 1,
                        flex: 1,
                        mx: 4,
                        overflowX: 'auto'
                    }}>
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: '0 0 auto',
                                    minWidth: 'fit-content'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: '50%',
                                        backgroundColor: index <= currentStepIndex
                                            ? theme.palette.primary.main
                                            : theme.palette.grey[300],
                                        color: index <= currentStepIndex ? 'white' : theme.palette.text.secondary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
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
                                        fontSize: '11px',
                                        whiteSpace: 'nowrap'
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
                        <Route index element={<Navigate to="layout" replace />} />
                        <Route path="layout" element={<KitchenLayoutStep />} />
                        <Route path="measurements" element={<KitchenMeasurementsStep />} />
                        <Route path="package" element={<KitchenPackageStep />} />
                        <Route path="materials" element={<KitchenMaterialsStep />} />
                        <Route path="granite" element={<KitchenGraniteStep />} />
                        <Route path="loft" element={<KitchenLoftStep />} />
                        <Route path="finish" element={<KitchenFinishStep />} />
                        <Route path="accessories" element={<KitchenAccessoriesStep />} />
                        <Route path="services" element={<KitchenServicesStep />} />
                        <Route path="appliances" element={<KitchenAppliancesStep />} />
                        <Route path="estimate" element={<KitchenEstimateForm />} />
                    </Routes>
                </Box>
            </Container>
        </Box>
    );
}
