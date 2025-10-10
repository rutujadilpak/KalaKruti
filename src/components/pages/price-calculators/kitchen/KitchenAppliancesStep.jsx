import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Checkbox,
    useTheme,
    Button,
    Grid,
    FormControlLabel,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const appliances = [
    {
        id: "hob",
        name: "Hob",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    },
    {
        id: "chimney",
        name: "Chimney",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
        id: "faucets-sink",
        name: "Faucets & Sink",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    },
    {
        id: "built-in-microwave",
        name: "Built-in Microwave",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    },
    {
        id: "built-in-oven",
        name: "Built-in Oven",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
        id: "refrigerator",
        name: "Refrigerator",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    },
];

export default function KitchenAppliancesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAppliances, setSelectedAppliances] = useState([]);

    const handleApplianceChange = (applianceId) => {
        setSelectedAppliances((prev) =>
            prev.includes(applianceId)
                ? prev.filter((id) => id !== applianceId)
                : [...prev, applianceId]
        );
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            package: searchParams.get("package"),
            appliances: selectedAppliances.join(","),
        });
        navigate(
            `/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`
        );
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            package: searchParams.get("package"),
        });
        navigate(
            `/price-calculators/kitchen/calculator/services?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
            {/* Header */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Choose Your Kitchen Appliances
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    color: theme.palette.text.secondary,
                    maxWidth: 600,
                    mx: "auto",
                }}
            >
                Select the appliances you’d like to include with your modular kitchen
                design.
            </Typography>

            {/* Appliance Grid */}
            <Grid
                container
                spacing={2.5}
                justifyContent="center"
                alignItems="stretch"
            >
                {appliances.map((appliance) => {
                    const isSelected = selectedAppliances.includes(appliance.id);
                    return (
                        <Grid item xs={6} sm={4} md={3} key={appliance.id}>
                            <Card
                                onClick={() => handleApplianceChange(appliance.id)}
                                sx={{
                                    height: 200,
                                    width: 200,
                                    border: "2px solid",
                                    borderColor: isSelected
                                        ? theme.palette.primary.main
                                        : theme.palette.grey[300],
                                    backgroundColor: isSelected
                                        ? theme.palette.primary.light + "10"
                                        : theme.palette.background.paper,
                                    borderRadius: 2,
                                    transition: "none",
                                    cursor: "pointer",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    {/* Image */}
                                    <Box
                                        sx={{
                                            height: 120,
                                            backgroundImage: `url(${appliance.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            borderTopLeftRadius: 8,
                                            borderTopRightRadius: 8,
                                        }}
                                    />

                                    {/* Label */}
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: 1.5,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={isSelected}
                                                    onChange={(e) => {
                                                        e.stopPropagation();
                                                        handleApplianceChange(appliance.id);
                                                    }}
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        "&.Mui-checked": {
                                                            color: theme.palette.primary.main,
                                                        },
                                                    }}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: theme.palette.text.primary,
                                                    }}
                                                >
                                                    {appliance.name}
                                                </Typography>
                                            }
                                            sx={{
                                                justifyContent: "center",
                                                m: 0,
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {/* Navigation */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={selectedAppliances.length === 0}
                    sx={{
                        px: 4,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Get Estimate
                </Button>
            </Box>
        </Box>
    );
}
