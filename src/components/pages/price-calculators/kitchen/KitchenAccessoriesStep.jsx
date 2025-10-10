import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Radio,
    useTheme,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const accessoriesLevels = [
    {
        id: "basic",
        name: "Basic",
        description:
            "A simple yet practical range to cover your kitchen essentials.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        price: "₹₹",
        features: [
            "Basic hinges",
            "Standard handles",
            "Simple drawer slides",
            "Basic storage solutions",
        ],
    },
    {
        id: "intermediate",
        name: "Intermediate",
        description:
            "Balanced selection with enhanced functionality and better design.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        price: "₹₹₹",
        features: [
            "Soft-close hinges",
            "Premium handles",
            "Smooth drawer slides",
            "Pull-out trays",
            "Corner solutions",
        ],
    },
    {
        id: "premium",
        name: "Premium",
        description:
            "The ultimate luxury setup for a stunning, high-performance kitchen.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
        price: "₹₹₹₹",
        features: [
            "Luxury soft-close hinges",
            "Designer handles",
            "High-end drawer slides",
            "Advanced pull-out systems",
            "Smart corner solutions",
            "Wine racks",
            "Spice organizers",
            "Cutlery trays",
        ],
    },
];

export default function KitchenAccessoriesStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAccessories, setSelectedAccessories] = useState("");

    const handleNext = () => {
        if (selectedAccessories) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get("layout"),
                length: searchParams.get("length"),
                width: searchParams.get("width"),
                height: searchParams.get("height"),
                cabinetLength: searchParams.get("cabinetLength"),
                cabinetHeight: searchParams.get("cabinetHeight"),
                package: searchParams.get("package"),
                material: searchParams.get("material"),
                granite: searchParams.get("granite"),
                loft: searchParams.get("loft"),
                finish: searchParams.get("finish"),
                accessories: selectedAccessories,
            });
            navigate(
                `/price-calculators/kitchen/calculator/services?${queryParams.toString()}`
            );
        }
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            layout: searchParams.get("layout"),
            length: searchParams.get("length"),
            width: searchParams.get("width"),
            height: searchParams.get("height"),
            cabinetLength: searchParams.get("cabinetLength"),
            cabinetHeight: searchParams.get("cabinetHeight"),
            package: searchParams.get("package"),
            material: searchParams.get("material"),
            granite: searchParams.get("granite"),
            loft: searchParams.get("loft"),
            finish: searchParams.get("finish"),
        });
        navigate(
            `/price-calculators/kitchen/calculator/finish?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
            {/* Title */}
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Choose Accessories for Your Kitchen
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
                Select an accessory level that fits your needs — from essential basics to
                premium functionality.
            </Typography>

            {/* Accessories Options */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                    gap: 2.5,
                }}
            >
                {accessoriesLevels.map((level) => {
                    const isSelected = selectedAccessories === level.id;
                    return (
                        <Card
                            key={level.id}
                            onClick={() => setSelectedAccessories(level.id)}
                            sx={{
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                backgroundColor: isSelected
                                    ? theme.palette.primary.light + "10"
                                    : theme.palette.background.paper,
                                borderRadius: 2,
                                cursor: "pointer",
                                transition: "none",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                height: "100%",
                            }}
                        >
                            <CardContent sx={{ p: 2.5 }}>
                                {/* Header */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {level.name}
                                    </Typography>
                                    <Radio
                                        checked={isSelected}
                                        onChange={() => setSelectedAccessories(level.id)}
                                        value={level.id}
                                        sx={{ color: theme.palette.primary.main }}
                                    />
                                </Box>

                                {/* Description */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 1.5,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {level.description}
                                </Typography>

                                {/* Image */}
                                <Box
                                    sx={{
                                        height: 120,
                                        backgroundImage: `url(${level.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: 1.5,
                                        border: "1px solid",
                                        borderColor: theme.palette.divider,
                                        mb: 1.5,
                                    }}
                                />

                                {/* Features */}
                                <Box>
                                    {level.features.slice(0, 4).map((feature, index) => (
                                        <Typography
                                            key={index}
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            • {feature}
                                        </Typography>
                                    ))}
                                    {level.features.length > 4 && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                color: theme.palette.text.secondary,
                                                fontStyle: "italic",
                                            }}
                                        >
                                            + more
                                        </Typography>
                                    )}
                                </Box>

                                {/* Price */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "right",
                                        mt: 1,
                                        fontWeight: 500,
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    {level.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

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
                    disabled={!selectedAccessories}
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
