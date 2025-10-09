import React from "react";
import { Box, Container, Typography, Button, Grid, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KitchenHero() {
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png", // Kitchen layout icon
            title: "Select the shape of your kitchen",
            description: "The kitchen layout lets us understand the scope of work and how we could design your kitchen based on your taste.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1034/1034158.png", // Measurements icon
            title: "Choose the measurements",
            description: "This helps us estimate the size of your kitchen and give you a more accurate pricing.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png", // Package icon
            title: "Pick a package as per your requirements",
            description: "Our packages will offer you a choice of accessories to pick from, based on your preference.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#fff",
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Main Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#3a2f3c",
                        fontSize: { xs: "2rem", md: "3rem" },
                    }}
                >
                    3 simple steps to get your quote
                </Typography>

                {/* Sub-heading */}
                <Typography
                    variant="h6"
                    sx={{
                        color: "text.secondary",
                        mb: 6,
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        maxWidth: 600,
                        mx: "auto",
                    }}
                >
                    It's that easy! You can now effortlessly plan your dream kitchen.
                </Typography>

                {/* Steps Grid */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step, index) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            {/* Step Number and Icon */}
                            <Box
                                sx={{
                                    position: "relative",
                                    mb: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                {/* Step Number Circle */}
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        backgroundColor: "#E84E57",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        mb: 2,
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {index + 1}
                                </Box>

                                {/* Icon */}
                                <Avatar
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: "#f8f7f8",
                                        border: "3px solid #E84E57",
                                        boxShadow: "0 4px 12px rgba(232, 78, 87, 0.2)",
                                        p: 2,
                                    }}
                                />

                                {/* Connecting Line (except for last step) */}
                                {index < steps.length - 1 && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "-50%",
                                            width: "100%",
                                            height: "3px",
                                            backgroundColor: "#ddd",
                                            transform: "translateY(-50%)",
                                            zIndex: 1,
                                            display: { xs: "none", md: "block" },
                                        }}
                                    />
                                )}
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: "#3a2f3c",
                                    mb: 2,
                                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    lineHeight: 1.6,
                                    maxWidth: 300,
                                    fontSize: { xs: "0.95rem", md: "1rem" },
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/kitchen/layout")}
                    sx={{
                        backgroundColor: "#E84E57",
                        color: "#fff",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 6,
                        py: 2,
                        mt: 6,
                        fontSize: "1.1rem",
                        "&:hover": {
                            backgroundColor: "#d13f47",
                        },
                    }}
                >
                    GET FREE ESTIMATE
                </Button>
            </Container>
        </Box>
    );
}
