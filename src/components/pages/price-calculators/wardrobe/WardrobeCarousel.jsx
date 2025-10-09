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
    useTheme,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function WardrobeCarousel() {
    const theme = useTheme();
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
                "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D", // Example wardrobe image
        },
        {
            title: "Sliding Wardrobe",
            subtitle: "Sliding Wardrobe",
            description:
                "Modern designs with horizontally movable doors to save floor space.",
            image:
                "https://images.unsplash.com/photo-1662454419622-a41092ecd245?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example wardrobe image
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
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.paper }}>
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
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontFamily: theme.typography.fontFamily
                            }}
                        >
                            Since one type doesn't fit all
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "1.1rem",
                                fontFamily: theme.typography.fontFamily
                            }}
                        >
                            No matter your style, our wardrobe price calculator has got you covered.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/wardrobe/calculator/length")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 10,
                            px: 4,
                            py: 1.5,
                            fontFamily: theme.typography.fontFamily,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)"
                            },
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
                                            borderRadius: 14,
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                            overflow: "hidden",
                                            width: "90%",
                                            height: 500,
                                            backgroundColor: theme.palette.background.paper,
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                transition: "0.3s ease",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
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
                                                    color: theme.palette.text.primary,
                                                    mb: 0.5,
                                                    fontSize: "1.25rem",
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    opacity: 0.85,
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    fontSize: "1rem",
                                                    lineHeight: 1.6,
                                                    fontFamily: theme.typography.fontFamily
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
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                                color: theme.palette.primary.dark
                            },
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
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                                color: theme.palette.primary.dark
                            },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
