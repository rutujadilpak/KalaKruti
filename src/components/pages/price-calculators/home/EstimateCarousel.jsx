import React, { useCallback, useEffect, useState } from "react";
import { Box, Container, Typography, Button, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function EstimateCarousel() {
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const items = [
        {
            title: "1 BHK",
            description: "Compact homes, cozy and stylish with smart interior designs.",
            image: "https://images.unsplash.com/photo-1598300052625-0c19c4a6ef8e?w=1200",
        },
        {
            title: "2 BHK",
            description: "Perfect balance of space and comfort for your modern lifestyle.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        },
        {
            title: "3 BHK",
            description: "Transform any 3 BHK, compact or spacious, with stunning interiors.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        },
        {
            title: "4 BHK",
            description: "Experience a different level of comfort and style in your 4 BHK.",
            image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
        },
        {
            title: "5 BHK+",
            description: "Give your beautiful 5 BHK+ home the interiors it deserves.",
            image: "https://images.unsplash.com/photo-1617103902913-c9d5fd88047a?w=1200",
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

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mb: 4,
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: "#3a2f3c",
                                mb: 1,
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                            }}
                        >
                            Estimates for any home
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "text.secondary",
                                fontSize: "1.1rem",
                            }}
                        >
                            Choose your preferred style and sit back while our estimator does its magic
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators")}
                        sx={{
                            backgroundColor: "#E84E57",
                            color: "#fff",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            borderRadius: "50px",
                            px: 4,
                            py: 1.5,
                            "&:hover": { backgroundColor: "#d13f47" },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Carousel */}
                <Box sx={{ position: "relative" }}>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container" style={{ display: "flex", gap: "16px" }}>
                            {items.map((item, index) => (
                                <div className="embla__slide" key={index} style={{ flex: "0 0 33.333%" }}>
                                    <Card
                                        sx={{
                                            borderRadius: 2,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                            overflow: "hidden",
                                            height: "100%",
                                            "&:hover": { transform: "translateY(-4px)", transition: "0.3s ease" },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{ height: 220, objectFit: "cover" }}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" sx={{ fontWeight: 600, color: "#3a2f3c" }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                                                {item.description}
                                            </Typography>
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
                            left: "-20px",
                            transform: "translateY(-50%)",
                            backgroundColor: "#fff",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                        onClick={scrollNext}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "-20px",
                            transform: "translateY(-50%)",
                            backgroundColor: "#fff",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
