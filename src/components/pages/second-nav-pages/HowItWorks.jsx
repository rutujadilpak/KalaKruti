import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Breadcrumbs,
    Link,
    useTheme,
    useMediaQuery,
    IconButton,
    Paper,
    Stack,
    Grid,
    Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import QuoteForm from "../enquiries/QuoteForm";

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "60vh",
    minHeight: "400px",
    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
    },
}));

const BreadcrumbContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
        top: "10px",
        left: "10px",
    },
}));

const FloatingWidget = styled(Box)(({ theme }) => ({
    position: "fixed",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
        "& .MuiIconButton-root": {
            width: "40px",
            height: "40px",
        },
    },
}));

const StepContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        "& .step-arrow": {
            transform: "rotate(90deg)",
            margin: theme.spacing(1, 0),
        },
    },
}));

const StepCircle = styled(Box)(({ theme }) => ({
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: theme.spacing(1),
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
        width: "100px",
        height: "100px",
    },
}));

const StepNumber = styled(Typography)(({ theme }) => ({
    position: "absolute",
    bottom: "-10px",
    left: "-10px",
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.palette.grey[400],
    zIndex: 1,
}));

const StepArrow = styled(Box)(({ theme }) => ({
    width: "60px",
    height: "2px",
    backgroundColor: theme.palette.grey[400],
    position: "relative",
    margin: theme.spacing(0, 2),
    "&::after": {
        content: '""',
        position: "absolute",
        right: "-8px",
        top: "-6px",
        width: 0,
        height: 0,
        borderLeft: `8px solid ${theme.palette.grey[400]}`,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
    },
    [theme.breakpoints.down("md")]: {
        transform: "rotate(90deg)",
        margin: theme.spacing(1, 0),
    },
}));

const CTAButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(2, 4),
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: "25px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        transform: "translateY(-2px)",
        boxShadow: "0 8px 20px rgba(178, 142, 82, 0.3)",
    },
    transition: "all 0.3s ease",
}));

const MeetDesignerSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#F8F6F0",
    padding: theme.spacing(8, 0),
    marginTop: theme.spacing(8),
}));

const ProcessStep = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(3),
    position: "relative",
    "&:not(:last-child)::after": {
        content: '""',
        position: "absolute",
        left: "12px",
        top: "35px",
        bottom: "-24px",
        width: "2px",
        background: `repeating-linear-gradient(
            to bottom,
            ${theme.palette.grey[400]} 0px,
            ${theme.palette.grey[400]} 4px,
            transparent 4px,
            transparent 8px
        )`,
    },
}));

const StepBullet = styled(Box)(({ theme }) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
    marginRight: theme.spacing(2),
    flexShrink: 0,
    marginTop: "2px",
}));

const FormButton = styled(Button)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "white",
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 2.5),
    fontSize: "0.8rem",
    fontWeight: 600,
    borderRadius: "6px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 12px rgba(178, 142, 82, 0.2)",
    },
    transition: "all 0.3s ease",
}));

export default function HowItWorks() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const steps = [
        {
            id: 1,
            title: "Meet Designer",
            icon: "👥",
            description: "Connect with our expert designers",
        },
        {
            id: 2,
            title: "Book KalaKruti",
            icon: "📅",
            description: "Schedule your consultation",
        },
        {
            id: 3,
            title: "Execution begins",
            icon: "🔨",
            description: "Start the design process",
        },
        {
            id: 4,
            title: "Final installations",
            icon: "🏠",
            description: "Complete your dream home",
        },
        {
            id: 5,
            title: "Move in",
            icon: "🎉",
            description: "Enjoy your new space",
        },
    ];

    return (
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
            {/* Hero Section with Full-Width Image */}
            <HeroSection>
                {/* Breadcrumb Navigation */}
                <BreadcrumbContainer>
                    <Breadcrumbs
                        separator="/"
                        sx={{
                            "& .MuiBreadcrumbs-separator": {
                                color: "white",
                            },
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                color: "white",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            Home
                        </Link>
                        <Link
                            href="/designs"
                            sx={{
                                color: "white",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            <DesignServicesIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            Interiors
                        </Link>
                        <Typography
                            sx={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <PlayArrowIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            How it works
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbContainer>
            </HeroSection>

            {/* Main Content Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                {/* Title Section */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            position: "relative",
                            "&::before": {
                                content: '"|"',
                                color: theme.palette.primary.main,
                                marginRight: 2,
                                fontSize: "inherit",
                            },
                        }}
                    >
                        Your dream home in 5 steps!
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: "600px",
                            mx: "auto",
                            lineHeight: 1.6,
                        }}
                    >
                        Looking to design your home interiors? Here's how you can get started.
                    </Typography>
                </Box>

                {/* Steps Section */}
                <Box sx={{ mb: 8 }}>
                    {isMobile ? (
                        // Mobile Layout - Vertical Stack
                        <Stack spacing={4} alignItems="center">
                            {steps.map((step, index) => (
                                <Box key={step.id} sx={{ textAlign: "center" }}>
                                    <StepCircle>
                                        <Typography
                                            sx={{
                                                fontSize: "2rem",
                                                fontWeight: 700,
                                                color: theme.palette.grey[400],
                                                position: "absolute",
                                                bottom: "-15px",
                                                left: "-15px",
                                            }}
                                        >
                                            {step.id}
                                        </Typography>
                                        <Typography sx={{ fontSize: "2.5rem" }}>
                                            {step.icon}
                                        </Typography>
                                    </StepCircle>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 2,
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mt: 1,
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                    {index < steps.length - 1 && (
                                        <StepArrow className="step-arrow" />
                                    )}
                                </Box>
                            ))}
                        </Stack>
                    ) : (
                        // Desktop Layout - Horizontal Flow
                        <StepContainer>
                            {steps.map((step, index) => (
                                <React.Fragment key={step.id}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <StepCircle>
                                            <StepNumber>{step.id}</StepNumber>
                                            <Typography sx={{ fontSize: "2.5rem" }}>
                                                {step.icon}
                                            </Typography>
                                        </StepCircle>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mt: 2,
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {step.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                mt: 1,
                                                maxWidth: "150px",
                                                mx: "auto",
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </Box>
                                    {index < steps.length - 1 && <StepArrow />}
                                </React.Fragment>
                            ))}
                        </StepContainer>
                    )}
                </Box>

                {/* Call to Action Button */}
                <Box sx={{ textAlign: "center" }}>
                    <CTAButton
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            px: 4,
                            py: 2,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                    >
                        START YOUR PROJECT NOW
                    </CTAButton>
                </Box>
            </Container>

            {/* Meet Your Designer Section */}
            <MeetDesignerSection>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-scene-with-three-people-meeting_81698-5022.jpg"
                                    alt="Business meeting with designers"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Meet your designer
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        It all begins with a form
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Let's get acquainted. The more we learn about you, the better we can design your home.
                                    </Typography>
                                    <FormButton variant="outlined">
                                        FILL YOUR FORM
                                    </FormButton>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        Get free consultation
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Talk to your designer and get personalised designs and quote for your dream home.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </MeetDesignerSection>

            {/* Book Kalakruti Section */}
            <Box sx={{ backgroundColor: "white", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Book Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "280px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/vecteurs-libre/assurance-qualite-contrat-affaire-certificat-garantie_335657-3140.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Book Kalakruti illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Book Kalakruti
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: { xs: "0.9rem", md: "1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Pay the booking amount to seal the deal
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Once you're happy with what we've proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        Finalise your home design
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        It's time to deep dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Place the Order Section */}
            <Box sx={{ backgroundColor: "#F8F6F0", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-women-discussing-documents-table_23-2148614321.jpg"
                                    alt="Place the order illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Place the order
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: { xs: "1rem", md: "1.1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Confirm your order with 60% payment
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Finalise the design by making a cumulative 60% payment, and your project is now off to a good start.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        Work commences
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Civil work begins on site. Keep a tab on your project status on 'My Account'.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Success Banner */}
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    padding: theme.spacing(4, 0),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* Checkmark Icon */}
                    <Box
                        sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "2px solid white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "transparent",
                        }}
                    >
                        <Box
                            sx={{
                                width: "20px",
                                height: "20px",
                                position: "relative",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: "6px",
                                    top: "10px",
                                    width: "8px",
                                    height: "2px",
                                    backgroundColor: "white",
                                    transform: "rotate(45deg)",
                                    transformOrigin: "left center",
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    left: "6px",
                                    top: "10px",
                                    width: "12px",
                                    height: "2px",
                                    backgroundColor: "white",
                                    transform: "rotate(-45deg)",
                                    transformOrigin: "left center",
                                },
                            }}
                        />
                    </Box>

                    {/* Success Message */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            textAlign: "center",
                        }}
                    >
                       You're half way there. Your orders are raised!
                    </Typography>
                </Box>
            </Box>

            {/* Final Installations Section */}
            <Box sx={{ backgroundColor: "white", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Installation Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "280px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/construction-worker-installing-furniture_23-2148614322.jpg"
                                    alt="Final installations illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Final installations
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: { xs: "0.9rem", md: "1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Pay 100% at intimation of material dispatch
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Once the materials are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        Installation
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Orders get delivered on-site and installation happens as per design
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Success Banner */}
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    padding: theme.spacing(4, 0),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* Checkmark Icon */}
                    <Box
                        sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "2px solid white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "transparent",
                        }}
                    >
                        <Box
                            sx={{
                                width: "20px",
                                height: "20px",
                                position: "relative",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    left: "6px",
                                    top: "10px",
                                    width: "8px",
                                    height: "2px",
                                    backgroundColor: "white",
                                    transform: "rotate(45deg)",
                                    transformOrigin: "left center",
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    left: "6px",
                                    top: "10px",
                                    width: "12px",
                                    height: "2px",
                                    backgroundColor: "white",
                                    transform: "rotate(-45deg)",
                                    transformOrigin: "left center",
                                },
                            }}
                        />
                    </Box>

                    {/* Success Message */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            textAlign: "center",
                        }}
                    >
                        Hurrah! Complete payment has been made!
                    </Typography>
                </Box>
            </Box>

            {/* Move In Section */}
            <Box sx={{ backgroundColor: "#F8F6F0", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-vibrant-nursery-interior-3d-render-of-front-view-image_3740158.jpg"
                                    alt="Move in illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Content */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Move in!
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                }}
                            >
                                Your dream home is now a reality! It's time to make new memories! Do avail the free professional photoshoot session of your #LivspaceHome.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Understand Your Order Types Section */}
            <Box sx={{ backgroundColor: "white", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 3,
                            }}
                        >
                            Understand your order types
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                maxWidth: "800px",
                                mx: "auto",
                            }}
                        >
                            We know our payments can seem complex. But they're really not. We've staggered them through your home interiors journey, so that you make small payments depending on how your project has progressed.
                        </Typography>
                    </Box>

                    {/* Order Types Table */}
                    <Box
                        sx={{
                            overflow: "auto",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <Box
                            component="table"
                            sx={{
                                width: "100%",
                                borderCollapse: "collapse",
                                backgroundColor: "white",
                            }}
                        >
                            {/* Table Header */}
                            <Box
                                component="thead"
                                sx={{
                                    backgroundColor: "#f8f9fa",
                                }}
                            >
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "2px solid #e0e0e0",
                                    }}
                                >
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "120px",
                                        }}
                                    >
                                        Order type
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "200px",
                                        }}
                                    >
                                        Overview of work involved
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "200px",
                                        }}
                                    >
                                        Execution milestone (Make 100% payment)
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            minWidth: "200px",
                                        }}
                                    >
                                        Handover
                                    </Box>
                                </Box>
                            </Box>

                            {/* Table Body */}
                            <Box component="tbody">
                                {/* Row 1 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Civil & MEP (Mechanical, Electrical & Plumbing)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        MEP base work & POP (Plaster Of Paris) completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        MEP fixtures & fittings, final painting & handover
                                    </Box>
                                </Box>

                                {/* Row 2 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Custom furniture (workshop)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Carcass quality check completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Installation and handover
                                    </Box>
                                </Box>

                                {/* Row 3 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Custom furniture (on-site)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Wood framework completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Installation and handover
                                    </Box>
                                </Box>

                                {/* Row 4 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 2
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Catalogue products
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        NA
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Make 100% payment for door delivery & installation
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* The Team Section */}
            <Box sx={{ backgroundColor: "#F8F6F0", padding: theme.spacing(8, 0) }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 3,
                            }}
                        >
                            The Team
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                maxWidth: "600px",
                                mx: "auto",
                            }}
                        >
                            Get to know the team that'll be with you every step of the way.
                        </Typography>
                    </Box>

                    {/* Team Members Flexbox Layout */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            justifyContent: "center",
                            alignItems: "stretch",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                gap: 3,
                            },
                        }}
                    >
                        {/* Design Lead */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: "white",
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/woman-designer-working-computer_23-2148614324.jpg"
                                    alt="Design Lead"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Design Lead (DL)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are.
                            </Typography>
                        </Box>

                        {/* Business Manager */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: "white",
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-manager-working-office_23-2148614325.jpg"
                                    alt="Business Manager"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Business Manager (BM)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups.
                            </Typography>
                        </Box>

                        {/* Project Manager */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: "white",
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/construction-project-manager-hard-hat_23-2148614326.jpg"
                                    alt="Project Manager"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Project Manager (PM)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                Your Project execution. They make it their life's mission to get your home ready in time.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Quote Form Section */}
            <QuoteForm />

            {/* Floating Support Widgets */}
            {/* WhatsApp Widget */}
            <FloatingWidget
                sx={{
                    top: "20px",
                    right: "20px",
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: "#25D366",
                        color: "white",
                        width: "60px",
                        height: "60px",
                        "&:hover": {
                            backgroundColor: "#128C7E",
                            transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
                    }}
                >
                    <WhatsAppIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
            </FloatingWidget>

            {/* Chat Widget */}
            <FloatingWidget
                sx={{
                    bottom: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Paper
                    sx={{
                        p: 2,
                        backgroundColor: "white",
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        maxWidth: "200px",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                        }}
                    >
                        We're online. How may I assist you?
                    </Typography>
                </Paper>
                <IconButton
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        width: "50px",
                        height: "50px",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "scale(1.1)",
                        },
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(178, 142, 82, 0.3)",
                    }}
                >
                    <ChatIcon />
                </IconButton>
            </FloatingWidget>
        </Box>
    );
}
