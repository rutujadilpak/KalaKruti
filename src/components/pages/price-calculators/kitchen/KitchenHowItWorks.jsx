import React from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KitchenHowItWorks() {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.paper,
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                {/* Title */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 4,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Here's how the modular kitchen price estimator works
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 6,
                        lineHeight: 1.8,
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        maxWidth: 800,
                        mx: "auto",
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Our modular kitchen price estimator considers the shape and area of your kitchen, materials,
                    and the package you choose to check the pricing in real time. By answering these questions,
                    we'll be able to understand the scope of work and provide you with an accurate estimate.
                </Typography>

                {/* Left-aligned details */}
                <Box
                    sx={{
                        textAlign: "left",
                        maxWidth: 800,
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Kitchen Shape & Layout
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        The shape of your kitchen (L-shaped, U-shaped, or Straight) helps us understand the
                        configuration and workflow. This determines the number of cabinets, countertops, and
                        storage solutions needed for your space.
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Measurements & Area
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Based on the size of your kitchen, our calculator will determine the cost per sq ft.
                        for the interior services. Accurate measurements ensure precise pricing for materials
                        and labor.
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Package Selection
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 6,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Choose from our range of packages that include different materials, finishes, and
                        accessories. Each package is designed to match different lifestyles and budgets,
                        ensuring you get the best value for your investment.
                    </Typography>
                </Box>

                {/* Calculate Now Link */}
                <Link
                    component="button"
                    underline="none"
                    onClick={() => navigate("/price-calculators/kitchen/calculator/layout")}
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color 0.2s ease",
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                            color: theme.palette.primary.dark,
                            textDecoration: "underline"
                        },
                    }}
                >
                    Calculate Now →
                </Link>
            </Container>
        </Box>
    );
}
