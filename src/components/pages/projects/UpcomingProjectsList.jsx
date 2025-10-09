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
} from "@mui/material";
import { ArrowBack, ArrowForward, Schedule } from "@mui/icons-material";
import { upcomingProjects } from "../../../data/projects/upcomingProjects";

export default function UpcomingProjectsList() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleProjectClick = (projectId) => {
        navigate(`/projects/upcoming/${projectId}`);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate("/projects")}
                sx={{ mb: 4 }}
            >
                Back to Projects
            </Button>

            {/* Page Title */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                    }}
                >
                    Upcoming Properties
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
                >
                    Discover our upcoming projects featuring innovative designs and cutting-edge technology.
                </Typography>
            </Box>

            {/* Projects Grid */}
            <Grid container spacing={4}>
                {upcomingProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card
                            sx={{
                                height: "100%",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: theme.shadows[6],
                                },
                            }}
                            onClick={() => handleProjectClick(project.id)}
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
                                    label={project.images.length}
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        bottom: 10,
                                        right: 10,
                                        backgroundColor: "rgba(0,0,0,0.7)",
                                        color: "white",
                                        fontWeight: 600,
                                    }}
                                />
                                <Chip
                                    label={project.status}
                                    size="small"
                                    color="warning"
                                    sx={{
                                        position: "absolute",
                                        top: 10,
                                        left: 10,
                                        fontWeight: 600,
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        lineHeight: 1.3,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {project.location}
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                        {project.scope}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                        {project.bhk}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                        {project.pricing}
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                        <Schedule sx={{ fontSize: 16, mr: 0.5, color: theme.palette.warning.main }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Expected: {project.expectedCompletion}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        fontWeight: 600,
                                        py: 1.5,
                                        borderRadius: "20px",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
