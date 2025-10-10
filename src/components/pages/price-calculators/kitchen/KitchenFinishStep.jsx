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

const finishes = [
    {
        id: "matte-laminate",
        name: "Matte Laminate",
        description:
            "Smooth, durable finish with a clean and rich look. Perfect for a modern muted vibe.",
        subDescription:
            "Going for that smooth, subtle, sophisticated look? This one’s for you.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        price: "₹₹",
    },
    {
        id: "hgl-laminate",
        name: "HGL Laminate",
        description:
            "Glossy surface that uplifts the space with vibrant shine and rich colours.",
        subDescription:
            "If you love sleek, magazine-like glossy finishes — this is your pick.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        price: "₹₹₹",
    },
    {
        id: "matte-membrane",
        name: "Matte Membrane",
        description:
            "Soft texture with excellent groove detail — timeless and elegant.",
        subDescription:
            "A seamless finish that blends perfectly into any kitchen style.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
        price: "₹₹₹",
    },
    {
        id: "hgl-membrane",
        name: "HGL Membrane",
        description:
            "Lustrous, premium surface that enhances your modular kitchen.",
        subDescription:
            "Want striking cabinets with shine and rich tone? Consider this!",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        price: "₹₹₹₹",
    },
    {
        id: "anti-scratch-acrylic",
        name: "Anti-scratch Acrylic",
        description:
            "Glossy, reflective, and resistant to scratches — made for elegance.",
        subDescription:
            "Dreaming of a chic, high-luxury look? This one’s your best choice.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        price: "₹₹₹₹",
    },
    {
        id: "glossy-pu",
        name: "Glossy PU",
        description:
            "Slick, durable, and polished — perfect for a mirror-like modern finish.",
        subDescription:
            "Consider this if you want easy-to-clean, high-shine cabinets.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
        price: "₹₹₹₹",
    },
];

export default function KitchenFinishStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedFinish, setSelectedFinish] = useState("");

    const handleNext = () => {
        if (selectedFinish) {
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
                finish: selectedFinish,
            });
            navigate(
                `/price-calculators/kitchen/calculator/accessories?${queryParams.toString()}`
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
        });
        navigate(
            `/price-calculators/kitchen/calculator/loft?${queryParams.toString()}`
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
                Choose Finish for Base & Wall Cabinets
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
                Select a finish that complements your kitchen’s design aesthetic — from
                matte elegance to glossy perfection.
            </Typography>

            {/* Card Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    gap: 2.5,
                }}
            >
                {finishes.map((finish) => {
                    const isSelected = selectedFinish === finish.id;
                    return (
                        <Card
                            key={finish.id}
                            onClick={() => setSelectedFinish(finish.id)}
                            sx={{
                                position: "relative",
                                borderRadius: 2,
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                backgroundColor: isSelected
                                    ? theme.palette.primary.light + "10"
                                    : theme.palette.background.paper,
                                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                cursor: "pointer",
                                transition: "none",
                            }}
                        >
                            <CardContent sx={{ p: 2.5 }}>
                                {/* Header Row */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 1.5,
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
                                        {finish.name}
                                    </Typography>
                                    <Radio
                                        checked={isSelected}
                                        onChange={() => setSelectedFinish(finish.id)}
                                        value={finish.id}
                                        sx={{
                                            color: theme.palette.primary.main,
                                        }}
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
                                    {finish.description}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontStyle: "italic",
                                        mb: 2,
                                        display: "block",
                                    }}
                                >
                                    {finish.subDescription}
                                </Typography>

                                {/* Image */}
                                <Box
                                    sx={{
                                        height: 140,
                                        backgroundImage: `url(${finish.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: 1.5,
                                        border: "1px solid",
                                        borderColor: theme.palette.divider,
                                    }}
                                />

                                {/* Price */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "right",
                                        color: theme.palette.text.secondary,
                                        mt: 1,
                                        fontWeight: 500,
                                    }}
                                >
                                    {finish.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

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
                    disabled={!selectedFinish}
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
