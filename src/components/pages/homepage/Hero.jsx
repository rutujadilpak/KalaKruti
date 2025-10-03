import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
            dragFree: false
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <Box sx={{ position: "relative", height: "80vh", overflow: "hidden" }}>
            {/* Embla wrapper */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container" style={{ display: "flex" }}>
                    {images.map((img, index) => (
                        <div
                            className="embla__slide"
                            key={index}
                            style={{ flex: "0 0 100%" }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "80vh",
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
                                        sx={{ fontWeight: "bold", color: "#ffffff" }} // Force white
                                    >
                                        We Create Dream Spaces
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{ mb: 4, color: "#f5f5f5" }} // Softer white for subtitle
                                    >
                                        Transform your space with our expert interior design services
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots navigation */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 1,
                }}
            >
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: i === selectedIndex ? "white" : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: i === selectedIndex ? "white" : "rgba(255, 255, 255, 0.8)",
                                transform: "scale(1.2)"
                            }
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
