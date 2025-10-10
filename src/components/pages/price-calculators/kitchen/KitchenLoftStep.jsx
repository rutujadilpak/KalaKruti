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

export default function KitchenLoftStep() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [loftOption, setLoftOption] = useState("");

    const handleNext = () => {
        if (loftOption) {
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
                loft: loftOption,
            });
            navigate(
                `/price-calculators/kitchen/calculator/finish?${queryParams.toString()}`
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
        });
        navigate(
            `/price-calculators/kitchen/calculator/granite?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
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
                Add Loft Storage?
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
                Choose whether you’d like to include loft storage for extra overhead
                space in your kitchen design.
            </Typography>

            {/* Options */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    flexWrap: "wrap",
                }}
            >
                {[
                    { id: "yes", title: "Yes", desc: "Include loft storage" },
                    { id: "no", title: "No", desc: "Skip loft storage" },
                ].map((opt) => {
                    const isSelected = loftOption === opt.id;
                    return (
                        <Card
                            key={opt.id}
                            onClick={() => setLoftOption(opt.id)}
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
                                width: 160,
                                height: 140,
                                textAlign: "center",
                            }}
                        >
                            <CardContent
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                }}
                            >
                                <Box sx={{ minWidth: 36, mb: 1 }}>
                                    <Radio
                                        checked={isSelected}
                                        onChange={() => setLoftOption(opt.id)}
                                        value={opt.id}
                                        sx={{ color: theme.palette.primary.main }}
                                    />
                                </Box>

                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    {opt.title}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mt: 0.5,
                                        textAlign: "center",
                                    }}
                                >
                                    {opt.desc}
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
                    disabled={!loftOption}
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
