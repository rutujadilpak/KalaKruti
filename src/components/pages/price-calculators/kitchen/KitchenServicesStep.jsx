import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Checkbox,
    useTheme,
    Button,
    FormControlLabel,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const services = [
    {
        id: "painting",
        name: "Painting",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
    },
    {
        id: "plumbing",
        name: "Plumbing",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
    },
    {
        id: "electrical",
        name: "Electrical",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300",
    },
    {
        id: "platform",
        name: "Platform",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
    },
    {
        id: "dado",
        name: "Dado",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
    },
];

export default function KitchenServicesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceChange = (serviceId) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            package: searchParams.get("package"),
            services: selectedServices.join(","),
        });
        navigate(
            `/price-calculators/kitchen/calculator/appliances?${queryParams.toString()}`
        );
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            package: searchParams.get("package"),
        });
        navigate(
            `/price-calculators/kitchen/calculator/accessories?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
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
                Select On-site Services You Require
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
                Choose the additional services needed for your kitchen installation.
            </Typography>

            {/* Service Grid */}
            <Grid
                container
                spacing={2.5}
                justifyContent="center"
                alignItems="stretch"
            >
                {services.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                        <Grid item xs={6} sm={4} md={3} key={service.id}>
                            <Card
                                onClick={() => handleServiceChange(service.id)}
                                sx={{
                                    height: "100%",
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
                                            height: 100,
                                            backgroundImage: `url(${service.image})`,
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
                                                    onChange={() => handleServiceChange(service.id)}
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
                                                    {service.name}
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

            {/* Navigation Buttons */}
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
                    disabled={selectedServices.length === 0}
                    sx={{
                        px: 4,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
