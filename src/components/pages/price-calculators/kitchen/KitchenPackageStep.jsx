import React, { useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    useTheme,
    Radio,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const packages = [
    {
        id: "essentials",
        name: "Essentials",
        description: "Affordable modular kitchens with essential storage and design features.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", // example
    },
    {
        id: "premium",
        name: "Premium",
        description: "Modern kitchens with stylish finishes and advanced storage options.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", // example
    },
    {
        id: "luxe",
        name: "Luxe",
        description: "High-end kitchen designs using luxurious materials and exclusive fittings.",
        image: "https://images.unsplash.com/photo-1598300053650-0d64b6f6b40e?w=800", // example
    },
    {
        id: "build-your-own",
        name: "Build Your Own",
        description: "Customize every detail of your kitchen with our flexible build-your-own option.",
        image: "https://images.unsplash.com/photo-1598300053595-cb3f02fb3f57?w=800", // example
    },
];

export default function KitchenPackageStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState("");

    const handlePackageSelect = (packageId) => {
        setSelected(packageId);
    };

    const handleNext = () => {
        if (selected) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get("layout"),
                A: searchParams.get("A"),
                B: searchParams.get("B"),
                C: searchParams.get("C"),
                package: selected,
            });

            if (selected === "build-your-own") {
                navigate(`/price-calculators/kitchen/calculator/materials?${queryParams.toString()}`);
            } else {
                navigate(`/price-calculators/kitchen/calculator/estimate?${queryParams.toString()}`);
            }
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            A: searchParams.get("A"),
            B: searchParams.get("B"),
            C: searchParams.get("C"),
        });
        navigate(`/price-calculators/kitchen/calculator/measurements?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1,
                    }}
                >
                    Select Your Kitchen Package
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                    }}
                >
                    Choose the type of kitchen package that best fits your needs.
                </Typography>
            </Box>

            {/* Package Grid */}
            <Grid container spacing={3} justifyContent="center">
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} md={3} key={pkg.id} display="flex">
                        <Card
                            onClick={() => handlePackageSelect(pkg.id)}
                            sx={{
                                flexGrow: 1,
                                cursor: "pointer",
                                border:
                                    selected === pkg.id
                                        ? `2px solid ${theme.palette.primary.main}`
                                        : "1px solid #ddd",
                                borderRadius: 2,
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: theme.shadows[6],
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={pkg.image}
                                alt={pkg.name}
                                sx={{
                                    objectFit: "cover",
                                    borderTopLeftRadius: "8px",
                                    borderTopRightRadius: "8px",
                                }}
                            />
                            <CardContent sx={{ textAlign: "center", p: 2 }}>
                                <Radio
                                    checked={selected === pkg.id}
                                    onChange={() => handlePackageSelect(pkg.id)}
                                    sx={{
                                        color: theme.palette.primary.main,
                                        "&.Mui-checked": {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                    }}
                                >
                                    {pkg.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.5,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {pkg.description}
                                </Typography>
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
                    alignItems: "center",
                    mt: 5,
                    pt: 3,
                    borderTop: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: "none",
                        fontSize: "1rem",
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={!selected}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        textTransform: "none",
                        fontSize: "1rem",
                        px: 4,
                        py: 1.3,
                        borderRadius: 2,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        "&:disabled": {
                            backgroundColor: theme.palette.action.disabled,
                            color: theme.palette.text.disabled,
                        },
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
