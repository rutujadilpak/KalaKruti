import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CalculatorHowItWorks() {
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
                    }}
                >
                    How Does The Full Home Interior Calculator Work
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.secondary",
                        mb: 4,
                        lineHeight: 1.8,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                >
                    Our full home interior price estimator calculates the cost considering the number of
                    bedrooms, size of the house and number of rooms to be designed to get an accurate cost.
                    By answering these questions, we'll be able to understand the scope of work.
                </Typography>

                {/* Left-aligned details */}
                <Box
                    sx={{
                        textAlign: "left",
                        maxWidth: 700,
                        mx: "auto",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 0.5 }}
                    >
                        BHK type
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        Our price estimator will make a few assumptions based on the configuration of your
                        home. This will help us get significant information and work on the requirements
                        accordingly.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 0.5 }}
                    >
                        Size of the house
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        Based on the size of your home and BHK type, our calculator will calculate the cost per
                        sq ft. for the interior services you desire.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#3a2f3c", mb: 0.5 }}
                    >
                        Rooms to be designed
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            mb: 5,
                            lineHeight: 1.8,
                        }}
                    >
                        There's always a scope of getting a budget as per your requirement. For that, we'll need
                        to number the rooms you would like us to design and our calculator will do the magic for
                        you.
                    </Typography>
                </Box>

                {/* Calculate Now Link */}
                <Link
                    component="button"
                    underline="none"
                    onClick={() => navigate("/price-calculators/home")}
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
