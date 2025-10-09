import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Avatar,
    useTheme,
} from "@mui/material";

export default function EstimateSteps() {
    const theme = useTheme();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1046/1046873.png", // 🏠 BHK type icon
            title: "Choose your BHK type",
            description:
                "The type of house helps us understand the configuration of your home.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1034/1034158.png", // 📏 Size of house
            title: "Select the size of your house",
            description:
                "This will help us give you a more accurate estimate for your interiors.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png", // 🏡 Rooms to design
            title: "Pick the rooms to be designed",
            description:
                "This will help us understand the scope of work for your home interiors.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png", // 🧾 Package
            title: "Pick a package as per your preference",
            description:
                "This helps us fine tune the calculation based on the products and accessories that match your lifestyle.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f8f7f8",
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#3a2f3c",
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                >
                    Get your estimate in 4 simple steps
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{ color: "text.secondary", mb: 6, fontSize: "1.1rem" }}
                >
                    It's that simple and convenient!
                </Typography>

                {/* Steps */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    position: "relative",
                                    mb: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "&::after": {
                                        content:
                                            index < steps.length - 1 ? '""' : "none",
                                        position: "absolute",
                                        top: "50%",
                                        right: "-50%",
                                        width: "100%",
                                        height: "2px",
                                        backgroundColor: "#ddd",
                                        transform: "translateY(-50%)",
                                        zIndex: 0,
                                        display: { xs: "none", md: "block" },
                                    },
                                }}
                            >
                                <Avatar
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: "#fff",
                                        border: "1px solid #ddd",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                        p: 2,
                                        zIndex: 1,
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    color: "#3a2f3c",
                                    mb: 1,
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 250,
                                    lineHeight: 1.6,
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* Button */}
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: "#E84E57",
                        color: "#fff",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 4,
                        py: 1.5,
                        mt: 6,
                        "&:hover": {
                            backgroundColor: "#d13f47",
                        },
                    }}
                >
                    Get Free Estimate
                </Button>
            </Container>
        </Box>
    );
}
