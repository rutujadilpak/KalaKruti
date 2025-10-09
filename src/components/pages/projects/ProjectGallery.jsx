import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    ImageList,
    ImageListItem,
    useTheme,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { deliveredProjectsDetails } from "../../../data/projects/deliveredProjects";
import { upcomingProjectsDetails } from "../../../data/projects/upcomingProjects";
import { featuredProjectsDetails } from "../../../data/projects/featuredProjects";

export default function ProjectGallery() {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    let project = null;
    let backPath = "";

    switch (type) {
        case "delivered":
            project = deliveredProjectsDetails[id];
            backPath = `/projects/delivered/${id}`;
            break;
        case "upcoming":
            project = upcomingProjectsDetails[id];
            backPath = `/projects/upcoming/${id}`;
            break;
        case "featured":
            project = featuredProjectsDetails[id];
            backPath = `/projects/featured/${id}`;
            break;
        default:
            break;
    }

    if (!project) {
        return (
            <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" color="error" gutterBottom>
                    Project not found
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/projects")}
                    startIcon={<ArrowBack />}
                >
                    Back to Projects
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(backPath)}
                sx={{ mb: 4 }}
            >
                Back to Project Details
            </Button>

            {/* Gallery Title */}
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
                    {project.title} - Gallery
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
                >
                    Explore all images from this project
                </Typography>
            </Box>

            {/* Image Gallery */}
            <ImageList
                variant="masonry"
                cols={3}
                gap={8}
                sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
            >
                {project.images.map((img, idx) => (
                    <ImageListItem key={idx}>
                        <img
                            src={`${img}?w=600&fit=crop&auto=format`}
                            srcSet={`${img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                            alt={`${project.title}-${idx}`}
                            loading="lazy"
                            style={{
                                borderRadius: "10px",
                                cursor: "pointer",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.transform = "scale(1.02)")
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}
