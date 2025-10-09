import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    const image =
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200";

    return (
        <Box
            sx={{
                position: "relative",
                height: "80vh",
                overflow: "hidden",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                >
                    We Create Dream Spaces
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 4, color: "#f5f5f5" }}
                >
                    Transform your space with our expert interior design services
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/home/calculator/bhk")}
                    sx={{ px: 4, py: 2 }}
                >
                    Get Started
                </Button>
            </Container>
        </Box>
    );
}
