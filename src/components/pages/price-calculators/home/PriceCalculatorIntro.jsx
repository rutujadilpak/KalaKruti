import React from "react";
import { Box, Container, Typography, Button, Breadcrumbs, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PriceCalculatorIntro({
    title = "What is the Full Home Interior Price Calculator?",
    description = "The full home interior price calculator helps you get an estimate for your full home interiors. All you have to do is answer a few simple questions and, voila!",
    breadcrumb = [
        { label: "Home", path: "/" },
        { label: "Interiors", path: "/interiors" },
        { label: "Home Interior Price Calculator" },
    ],
    buttonText = "Get Started",
    onButtonClick,
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onButtonClick) onButtonClick();
        else navigate("/price-calculators/home/start");
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, textAlign: "center", backgroundColor: "#fff" }}>
            <Container maxWidth="md">
                {/* Breadcrumb */}
                <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                        fontSize: "0.9rem",
                    }}
                >
                    {breadcrumb.map((item, index) =>
                        item.path ? (
                            <Link
                                key={index}
                                color={index === breadcrumb.length - 1 ? "text.primary" : "error.main"}
                                underline={index === breadcrumb.length - 1 ? "none" : "hover"}
                                href={item.path}
                                sx={{
                                    fontWeight: index === breadcrumb.length - 1 ? 500 : 600,
                                    fontSize: "0.9rem",
                                }}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <Typography
                                key={index}
                                color="text.primary"
                                sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                            >
                                {item.label}
                            </Typography>
                        )
                    )}
                </Breadcrumbs>

                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#3a2f3c",
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                    }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "text.secondary",
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        maxWidth: 700,
                        mx: "auto",
                    }}
                >
                    {description}
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick}
                    sx={{
                        backgroundColor: "#E84E57",
                        color: "#fff",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 4,
                        py: 1.5,
                        "&:hover": {
                            backgroundColor: "#d13f47",
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Container>
        </Box>
    );
}
