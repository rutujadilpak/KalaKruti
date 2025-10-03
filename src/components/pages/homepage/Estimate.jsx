import React from "react";
import { Box, Typography, Card, CardContent, Button, Container, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";

const estimateOptions = [
    { id: "fullhome", title: "Full Home Interior", description: "Know the estimate price for your full home interiors", icon: <HomeIcon /> },
    { id: "kitchen", title: "Kitchen", description: "Get an approximate costing for your kitchen interior.", icon: <KitchenIcon /> },
    { id: "wardrobe", title: "Wardrobe", description: "Our estimate for your dream wardrobe", icon: <DoorSlidingIcon /> },
];

export default function Estimate() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="lg">
                {/* Fixed heading */}
                <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography variant="h3" fontWeight={700} color="text.primary">
                        Calculate the estimate
                    </Typography>
                </Box>

                {/* Subheading */}
                <Typography
                    variant="h6"
                    textAlign="center"
                    color="text.secondary"
                    mb={6}
                    fontWeight={400}
                >
                    Calculate the approximate cost of doing up your home interiors
                </Typography>

                {/* Estimate Cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: 3,
                    }}
                >
                    {estimateOptions.map((option) => (
                        <Card key={option.id} sx={{
                            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                            borderRadius: 3,
                            transition: "all 0.3s ease",
                            "&:hover": { transform: "translateY(-8px)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }
                        }}>
                            <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%" }}>
                                {/* Icon */}
                                <Box sx={{
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    background: theme.palette.primary.light,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    position: "relative",
                                    "& svg": { fontSize: 32, color: theme.palette.primary.main },
                                }}>
                                    {option.icon}
                                    <Box sx={{
                                        position: "absolute",
                                        top: -4,
                                        right: -4,
                                        width: 24,
                                        height: 24,
                                        borderRadius: "50%",
                                        background: theme.palette.primary.main,
                                        border: "3px solid white",
                                    }} />
                                </Box>

                                {/* Title */}
                                <Typography variant="h5" fontWeight={700} mb={2} sx={{ minHeight: "64px" }} color="text.primary">
                                    {option.title}
                                </Typography>

                                {/* Description */}
                                <Typography variant="body1" color="text.secondary" mb={4} sx={{ flexGrow: 1, minHeight: "48px", lineHeight: 1.6 }}>
                                    {option.description}
                                </Typography>

                                {/* Button */}
                                <Button variant="contained" endIcon={<ChevronRightIcon />} sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    py: 1.5,
                                    px: 4,
                                    borderRadius: 50,
                                    textTransform: "uppercase",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                    letterSpacing: "0.5px",
                                    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.dark,
                                        boxShadow: `0 6px 16px ${theme.palette.primary.main}40`
                                    }
                                }}>
                                    Calculate
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
