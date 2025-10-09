import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeHowItWorks() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f8f7f8",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#3a2f3c",
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        textAlign: "left",
                    }}
                >
                    Here's how the wardrobe price calculator works
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.secondary",
                        mb: 4,
                        lineHeight: 1.8,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        textAlign: "left",
                    }}
                >
                    The Livspace Wardrobe Price Calculator considers factors like dimension, type, material,
                    finish, and accessories to generate the price estimate. By answering a few simple questions,
                    the estimate for your wardrobe with price is calculated in real-time.
                </Typography>

                {/* Details */}
                <Box
                    sx={{
                        textAlign: "left",
                        maxWidth: 900,
                        mx: "auto",
                    }}
                >
                    {/* 1️⃣ Length */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 1 }}
                    >
                        Length of the wardrobe
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        The dimension of a wardrobe is a significant factor in calculating its price. The modular
                        wardrobe cost calculator will make a few assumptions based on your input and will give
                        an accurate wardrobe price.
                    </Typography>

                    {/* 2️⃣ Type */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 1 }}
                    >
                        Type of the wardrobe
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        The make of a wardrobe is another contributing factor towards wardrobe price estimation.
                        Based on your selection, the wardrobe price calculator will give you a wardrobe price.
                        Depending on your need, you can choose between a sliding door wardrobe, which is suitable
                        for small spaces, or a swing door wardrobe, which provides more storage space.
                    </Typography>

                    {/* 3️⃣ Material & Finishes */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 1 }}
                    >
                        Material and finishes
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        The kind of material and the finish you pick determines not only the cost of a modular
                        wardrobe but also the quality of your wardrobe. Our wardrobe price calculator will highlight
                        popular materials and their features to ease the process of decision-making for you.
                    </Typography>

                    {/* 4️⃣ Accessories */}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 1 }}
                    >
                        Accessories
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 5,
                            lineHeight: 1.8,
                        }}
                    >
                        There's always scope for accessories, especially when you get to choose from our trendy
                        options. Select accessories that suit your lifestyle and our wardrobe price calculator will
                        add them while calculating the final wardrobe price.
                    </Typography>
                </Box>

                {/* Calculate Now Link */}
                <Link
                    component="button"
                    underline="none"
                    onClick={() => navigate("/price-calculators/wardrobe")}
                    sx={{
                        color: "#E84E57",
                        fontWeight: 500,
                        fontSize: "1rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
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
