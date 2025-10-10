import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Radio,
    useTheme,
    Tooltip,
    IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useLocation } from "react-router-dom";

const materials = [
    {
        id: "hdf-hmr",
        name: "HDF HMR",
        description:
            "Has high strength and density, and a solid screw-holding capacity.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        price: "₹₹",
    },
    {
        id: "mdf",
        name: "MDF",
        description:
            "Is seamless, free of knots, and has high resistance for wear & tear.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        price: "₹₹",
    },
    {
        id: "mr-plywood",
        name: "MR Plywood",
        description:
            "Is moisture and termite resistant and does not wear off easily.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
        price: "₹₹₹",
    },
    {
        id: "bwr-plywood",
        name: "BWR Plywood",
        description:
            "Is water resistant and works well in areas prone to water exposure.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        price: "₹₹₹",
    },
    {
        id: "bwp-plywood",
        name: "BWP Plywood",
        description:
            "Is waterproof and withstands prolonged exposure to water and moisture.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        price: "₹₹₹₹",
    },
];

export default function KitchenMaterialsStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedMaterial, setSelectedMaterial] = useState("");

    const handleNext = () => {
        if (selectedMaterial) {
            const searchParams = new URLSearchParams(location.search);
            const queryParams = new URLSearchParams({
                layout: searchParams.get("layout"),
                length: searchParams.get("length"),
                width: searchParams.get("width"),
                height: searchParams.get("height"),
                cabinetLength: searchParams.get("cabinetLength"),
                cabinetHeight: searchParams.get("cabinetHeight"),
                package: searchParams.get("package"),
                material: selectedMaterial,
            });
            navigate(
                `/price-calculators/kitchen/calculator/granite?${queryParams.toString()}`
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
        });
        navigate(
            `/price-calculators/kitchen/calculator/package?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 900, mx: "auto", p: 3 }}>
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
                Choose Material for Cabinets and Shutters
            </Typography>

            {/* Info Tooltip */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mb: 3,
                }}
            >
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Want to know more?
                </Typography>
                <Tooltip title="Learn more about material types">
                    <IconButton
                        size="small"
                        sx={{
                            color: theme.palette.primary.main,
                            p: 0.5,
                        }}
                    >
                        <InfoIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Material Cards */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                    gap: 2.5,
                }}
            >
                {materials.map((mat) => {
                    const isSelected = selectedMaterial === mat.id;
                    return (
                        <Card
                            key={mat.id}
                            onClick={() => setSelectedMaterial(mat.id)}
                            sx={{
                                position: "relative",
                                borderRadius: 2,
                                border: "2px solid",
                                borderColor: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[300],
                                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                backgroundColor: isSelected
                                    ? theme.palette.primary.light + "10"
                                    : theme.palette.background.paper,
                                cursor: "pointer",
                                transition: "none",
                            }}
                        >
                            <CardContent sx={{ p: 2.5 }}>
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
                                        }}
                                    >
                                        {mat.name}
                                    </Typography>
                                    <Box sx={{ minWidth: 36, display: "flex", justifyContent: "center" }}>
                                        <Radio
                                            checked={isSelected}
                                            onChange={() => setSelectedMaterial(mat.id)}
                                            value={mat.id}
                                            sx={{
                                                color: theme.palette.primary.main,
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 2,
                                        lineHeight: 1.5,
                                        minHeight: 40,
                                    }}
                                >
                                    {mat.description}
                                </Typography>

                                <Box
                                    sx={{
                                        height: 150,
                                        backgroundImage: `url(${mat.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: 1.5,
                                        border: "1px solid",
                                        borderColor: theme.palette.divider,
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "right",
                                        color: theme.palette.text.secondary,
                                        mt: 1,
                                        fontWeight: 500,
                                    }}
                                >
                                    {mat.price}
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
                    disabled={!selectedMaterial}
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
