import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Chip,
    IconButton,
    useTheme,
} from "@mui/material";
import { ArrowForward, ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function FeaturedProjectsCarousel({ projects, onViewAll }) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleProjectClick = (projectId) => {
        navigate(`/projects/featured/${projectId}`);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <Box sx={{ position: "relative", width: "100%" }}>
            {/* Navigation Arrows */}
            <IconButton
                onClick={handlePrevious}
                sx={{
                    position: "absolute",
                    left: -20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "white",
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                        backgroundColor: "grey.100",
                    },
                }}
            >
                <ChevronLeft />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    right: -20,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "white",
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                        backgroundColor: "grey.100",
                    },
                }}
            >
                <ChevronRight />
            </IconButton>

            {/* Carousel Container */}
            <Box
                sx={{
                    display: "flex",
                    gap: 3,
                    overflow: "hidden",
                    px: 2,
                }}
            >
                {getVisibleProjects().map((project, index) => (
                    <Card
                        key={`${project.id}-${currentIndex}-${index}`}
                        onClick={() => handleProjectClick(project.id)}
                        sx={{
                            minWidth: 350,
                            maxWidth: 400,
                            cursor: "pointer",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: theme.shadows[4],
                            transition: "all 0.35s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: theme.shadows[10],
                            },
                            height: 500,
                        }}
                    >
                        <Box sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={project.image}
                                alt={project.title}
                                sx={{ objectFit: "cover" }}
                            />
                            <Chip
                                label={`${project.images.length} Images`}
                                size="small"
                                sx={{
                                    position: "absolute",
                                    bottom: 12,
                                    right: 12,
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                }}
                            />
                            <Chip
                                label={project.status}
                                size="small"
                                color="primary"
                                sx={{
                                    position: "absolute",
                                    top: 12,
                                    left: 12,
                                    fontWeight: 600,
                                }}
                            />
                            {project.isCompleted && (
                                <Chip
                                    label="COMPLETED"
                                    size="small"
                                    color="success"
                                    sx={{
                                        position: "absolute",
                                        top: 12,
                                        right: 12,
                                        fontWeight: 600,
                                    }}
                                />
                            )}
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {project.location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.scope} • {project.bhk}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {project.pricing}
                            </Typography>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontWeight: 600,
                                    py: 1.2,
                                    borderRadius: "20px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                Get This Design
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Dots Indicator */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 3,
                }}
            >
                {projects.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: index === currentIndex
                                ? theme.palette.primary.main
                                : theme.palette.grey[300],
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
