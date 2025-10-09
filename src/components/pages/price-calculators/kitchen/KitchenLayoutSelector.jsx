import React, { useCallback, useEffect, useState } from "react";
import { Box, Container, Typography, Button, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function KitchenLayoutSelector() {
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const kitchenLayouts = [
        {
            title: "Sleek L-shaped Kitchen",
            description: "Featuring adjoining countertops with corner spaces.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
            layout: "L-shaped",
        },
        {
            title: "Spacious U-shaped Kitchen",
            description: "Comprising three connected walls of cabinets with a practical open entrance.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
            layout: "U-shaped",
        },
        {
            title: "Essential Straight Kitchen",
            description: "A convenient option with the countertop and cabinets placed in a straight line.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            layout: "Straight",
        },
    ];

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const handleStartNow = (layout) => {
        // Navigate to the next step with the selected layout
        navigate(`/price-calculators/kitchen/measurements?layout=${layout}`);
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f7f8" }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: "#3a2f3c",
                            mb: 2,
                            fontSize: { xs: "2rem", md: "3rem" },
                        }}
                    >
                        Estimates for every kitchen
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "text.secondary",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            maxWidth: 600,
                            mx: "auto",
                        }}
                    >
                        Choose your preferred kitchen layout, and let our estimator work its magic.
                    </Typography>
                </Box>

                {/* Carousel */}
                <Box sx={{ position: "relative" }}>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container" style={{ display: "flex", gap: "24px" }}>
                            {kitchenLayouts.map((layout, index) => (
                                <div className="embla__slide" key={index} style={{ flex: "0 0 33.333%" }}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                            overflow: "hidden",
                                            height: "100%",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 12px 32px rgba(0,0,0,0.18)"
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={layout.image}
                                            alt={layout.title}
                                            sx={{ height: 280, objectFit: "cover" }}
                                        />
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: "#3a2f3c",
                                                    mb: 2,
                                                    fontSize: { xs: "1.2rem", md: "1.4rem" }
                                                }}
                                            >
                                                {layout.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "text.secondary",
                                                    mb: 3,
                                                    lineHeight: 1.6,
                                                    fontSize: { xs: "0.95rem", md: "1rem" }
                                                }}
                                            >
                                                {layout.description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => handleStartNow(layout.layout)}
                                                sx={{
                                                    backgroundColor: "#E84E57",
                                                    color: "#fff",
                                                    textTransform: "uppercase",
                                                    fontWeight: "bold",
                                                    borderRadius: "50px",
                                                    py: 1.5,
                                                    fontSize: "1rem",
                                                    "&:hover": {
                                                        backgroundColor: "#d13f47",
                                                    },
                                                }}
                                            >
                                                START NOW
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={scrollPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "-30px",
                            transform: "translateY(-50%)",
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            width: 50,
                            height: 50,
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                transform: "translateY(-50%) scale(1.1)"
                            },
                        }}
                    >
                        <ChevronLeftIcon fontSize="large" />
                    </IconButton>

                    <IconButton
                        onClick={scrollNext}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "-30px",
                            transform: "translateY(-50%)",
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            width: 50,
                            height: 50,
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                transform: "translateY(-50%) scale(1.1)"
                            },
                        }}
                    >
                        <ChevronRightIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
