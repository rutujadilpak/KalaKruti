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
        navigate(`/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            package: searchParams.get("package"),
        });
        navigate(`/price-calculators/kitchen/calculator/services?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
            {/* Header */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    mb: 4,
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                }}
            >
                Here come the appliances — your pick?
            </Typography>

            {/* Appliance Grid */}
            <Grid container spacing={3} justifyContent="center">
                {appliances.map((appliance) => (
                    <Grid item xs={12} sm={6} md={3} key={appliance.id}>
                        <Card
                            sx={{
                                height: 250, // ✅ Consistent height
                                width: 250, // ✅ Consistent width
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                border: selectedAppliances.includes(appliance.id)
                                    ? `2px solid ${theme.palette.primary.main}`
                                    : "1px solid #ddd",
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: theme.shadows[6],
                                    borderColor: theme.palette.primary.main,
                                },
                            }}
                            onClick={() => handleApplianceChange(appliance.id)}
                        >
                            <CardContent
                                sx={{
                                    p: 0,
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 150,
                                        backgroundImage: `url(${appliance.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderTopLeftRadius: 8,
                                        borderTopRightRadius: 8,
                                    }}
                                />
                                <Box sx={{ textAlign: "center", p: 2 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={selectedAppliances.includes(appliance.id)}
                                                onChange={(e) => {
                                                    e.stopPropagation(); // ✅ Prevent double toggling
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
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                }}
                                            >
                                                {appliance.name}
                                            </Typography>
                                        }
                                        sx={{ justifyContent: "center" }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Navigation */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 3,
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
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={selectedAppliances.length === 0}
                    sx={{
                        px: 4,
                        textTransform: "none",
                        fontWeight: 600,
                        backgroundColor: theme.palette.primary.main,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        "&:disabled": {
                            backgroundColor: theme.palette.action.disabled,
                        },
                    }}
                >
                    GET ESTIMATE
                </Button>
            </Box>
        </Box>
    );
}
