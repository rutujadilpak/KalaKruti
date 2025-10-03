import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import InventoryIcon from "@mui/icons-material/Inventory";

// Slower animation for scrolling left → right
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const items = [
    { text: "60+ cities", icon: <LocationCityIcon /> },
    { text: "3 countries", icon: <PublicIcon /> },
    { text: "20 lakh+ catalogue products", icon: <InventoryIcon /> },
    { text: "3,500+ designers", icon: <PeopleIcon /> },
    { text: "Flat 10-year warranty¹", icon: <VerifiedUserIcon /> },
    { text: "Easy EMIs", icon: <PaymentsIcon /> },
];

export default function WhyChooseUs() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 6, background: theme.palette.background.default, overflow: "hidden" }}>
            {/* Static Heading */}
            <Typography variant="h4" fontWeight={700} mb={6} textAlign="center" color="text.primary">
                Why choose us
            </Typography>

            {/* Scrolling Row */}
            <Box
                sx={{
                    overflow: "hidden",
                    position: "relative",
                    "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: "100px",
                        zIndex: 2,
                        pointerEvents: "none",
                    },
                    "&::before": {
                        left: 0,
                        background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
                    },
                    "&::after": {
                        right: 0,
                        background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "inline-flex",
                        gap: 3,
                        animation: `${scroll} 40s linear infinite`,
                        "&:hover": {
                            animationPlayState: "paused",
                        },
                    }}
                >
                    {/* Duplicate items for seamless loop */}
                    {[...items, ...items].map((item, i) => (
                        <Card
                            key={i}
                            sx={{
                                minWidth: 320,
                                minHeight: 140,
                                flexShrink: 0,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                borderRadius: 3,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2.5,
                                    p: 4,
                                    height: "100%",
                                }}
                            >
                                {/* Icon Circle */}
                                <Box
                                    sx={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: "50%",
                                        background: theme.palette.primary.light,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        position: "relative",
                                        "& svg": {
                                            fontSize: 36,
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    {item.icon}
                                    {/* Primary color notification badge */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: -2,
                                            right: -2,
                                            width: 24,
                                            height: 24,
                                            borderRadius: "50%",
                                            background: theme.palette.primary.main,
                                            border: "2px solid white",
                                        }}
                                    />
                                </Box>

                                {/* Text */}
                                <Typography variant="h6" fontWeight={600} color="text.primary">
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}