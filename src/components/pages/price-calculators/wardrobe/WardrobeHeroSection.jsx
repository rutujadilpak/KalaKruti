import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeHeroSection() {
    const navigate = useNavigate();

    const image =
        "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=1200";

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
                    Design Your Perfect Wardrobe
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ mb: 4, color: "#f5f5f5" }}
                >
                    Get an instant quote for your modular wardrobe with our smart calculator
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/contact")}
                    sx={{ px: 4, py: 2 }}
                >
                    Book Consultation
                </Button>
            </Container>
        </Box>
    );
}
