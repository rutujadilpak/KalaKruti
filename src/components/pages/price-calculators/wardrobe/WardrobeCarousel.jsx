import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    IconButton,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function WardrobeCarousel() {
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const items = [
        {
            title: "Swing Wardrobe",
            subtitle: "Swing Wardrobe",
            description:
                "Built with hinged doors to offer more space for storage and visibility.",
            image:
                "https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=1200", // Example wardrobe image
        },
        {
            title: "Sliding Wardrobe",
            subtitle: "Sliding Wardrobe",
            description:
                "Modern designs with horizontally movable doors to save floor space.",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200", // Example wardrobe image
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
                            Since one type doesn't fit all
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "text.secondary",
                                fontSize: "1.1rem",
                            }}
                        >
                            No matter your style, our wardrobe price calculator has got you covered.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/wardrobe")}
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
                        <div
                            className="embla__container"
                            style={{
                                display: "flex",
                                gap: "24px",
                                justifyContent: "center",
                            }}
                        >
                            {items.map((item, index) => (
                                <div
                                    className="embla__slide"
                                    key={index}
                                    style={{
                                        flex: "0 0 50%", // show 2 slides in view
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                            overflow: "hidden",
                                            width: "90%",
                                            height: 500,
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                transition: "0.3s ease",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{
                                                height: 350,
                                                objectFit: "cover",
                                            }}
                                        />
                                        <CardContent sx={{ textAlign: "center", p: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: "#3a2f3c",
                                                    mb: 0.5,
                                                    fontSize: "1.25rem",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: "text.primary",
                                                    mb: 1,
                                                    opacity: 0.85,
                                                }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    fontSize: "1rem",
                                                    lineHeight: 1.6,
                                                }}
                                            >
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
                            left: "-25px",
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
                            right: "-25px",
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
