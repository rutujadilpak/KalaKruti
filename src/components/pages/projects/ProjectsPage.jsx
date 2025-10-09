import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Button,
    Chip,
    Grid,
    useTheme,
    Divider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { deliveredProjects } from "../../../data/projects/deliveredProjects";
import { upcomingProjects as upcomingData } from "../../../data/projects/upcomingProjects";
import { featuredProjects as featuredData } from "../../../data/projects/featuredProjects";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleCardClick = (type) => navigate(`/projects/${type}`);
    const handleFeaturedProjectClick = (projectId) =>
        navigate(`/projects/featured/${projectId}`);

    return (
        <Box>
            {/* 🏡 Hero Section */}
            <Box
                sx={{
                    height: "65vh",
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                    mb: 10,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.55)",
                    }}
                />
                <Box sx={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            letterSpacing: 1,
                            textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                        }}
                    >
                        KalaKruti Interior Design Portfolio
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            opacity: 0.9,
                            lineHeight: 1.6,
                            textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                        }}
                    >
                        Explore the perfect blend of creativity, functionality, and innovation
                        in every space we design.
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="xl">
                {/* 🧱 Project Categories Section */}
                <Grid container spacing={6} sx={{ mb: 12 }}>
                    {[
                        {
                            title: "Delivered Projects",
                            subtitle:
                                "A collection of completed projects highlighting style and precision.",
                            chip: "COMPLETED",
                            color: "success",
                            image:
                                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop",
                            type: "delivered",
                        },
                        {
                            title: "Upcoming Properties",
                            subtitle:
                                "Proposed projects featuring detailed plans and innovative designs.",
                            chip: "UPCOMING",
                            color: "warning",
                            image:
                                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
                            type: "upcoming",
                        },
                    ].map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                onClick={() => handleCardClick(project.type)}
                                sx={{
                                    cursor: "pointer",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: theme.shadows[6],
                                    position: "relative",
                                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: theme.shadows[12],
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent
                                    sx={{
                                        p: 4,
                                        background:
                                            "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                            {project.title}
                                        </Typography>
                                        <Chip
                                            label={project.chip}
                                            color={project.color}
                                            sx={{
                                                fontWeight: 600,
                                                borderRadius: "6px",
                                                fontSize: "0.8rem",
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        {project.subtitle}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        endIcon={<ArrowForward />}
                                        sx={{
                                            fontWeight: 600,
                                            px: 3,
                                            py: 1.5,
                                            borderRadius: "25px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        View Projects
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ mb: 8 }} />

                {/* ✨ Featured Projects */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
                    >
                        Featured Projects
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: "auto" }}
                    >
                        A glimpse of our best creations — blending design precision and aesthetic brilliance.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {featuredData.map((project) => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <Card
                                onClick={() => handleFeaturedProjectClick(project.id)}
                                sx={{
                                    cursor: "pointer",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    boxShadow: theme.shadows[4],
                                    transition: "all 0.35s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: theme.shadows[10],
                                    },
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
