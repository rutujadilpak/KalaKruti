import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KitchenHowItWorks() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#fff",
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
                        color: "#3a2f3c",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                >
                    Here's how the modular kitchen price estimator works
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.secondary",
                        mb: 6,
                        lineHeight: 1.8,
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        maxWidth: 800,
                        mx: "auto",
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
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 2 }}
                    >
                        Kitchen Shape & Layout
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                        }}
                    >
                        The shape of your kitchen (L-shaped, U-shaped, or Straight) helps us understand the
                        configuration and workflow. This determines the number of cabinets, countertops, and
                        storage solutions needed for your space.
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 2 }}
                    >
                        Measurements & Area
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                        }}
                    >
                        Based on the size of your kitchen, our calculator will determine the cost per sq ft.
                        for the interior services. Accurate measurements ensure precise pricing for materials
                        and labor.
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 2 }}
                    >
                        Package Selection
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            mb: 6,
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
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
                    onClick={() => navigate("/price-calculators/kitchen")}
                    sx={{
                        color: "#E84E57",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#d13f47" },
                    }}
                >
                    Calculate Now →
                </Link>
            </Container>
        </Box>
    );
}
