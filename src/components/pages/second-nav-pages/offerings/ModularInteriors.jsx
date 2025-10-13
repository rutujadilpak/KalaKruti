import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    IconButton,
    Paper,
    styled,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Breadcrumbs,
    Stack,
    Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import { ThemeProvider } from '@mui/material/styles';
import themeNeutral from '../../../../themeNeutral.jsx';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    backgroundImage: `url('https://mydecomarketing.com/wp-content/uploads/2020/05/Living-Room-3D-Design-by-Anna-K-Studio.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
}));

const FloatingWidget = styled(Box)(({ theme }) => ({
    position: 'fixed',
    zIndex: 1000,
    '&:hover': {
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.3s ease',
}));

function ModularInteriors() {
    const theme = useTheme();

    // State for FAQ expand/collapse functionality
    const [expandedFAQs, setExpandedFAQs] = useState({
        1: true, // First FAQ is expanded by default
        2: false,
        3: false,
        4: false,
        5: false
    });

    const toggleFAQ = (faqId) => {
        setExpandedFAQs(prev => ({
            ...prev,
            [faqId]: !prev[faqId]
        }));
    };

    return (
        <ThemeProvider theme={themeNeutral}>
            <Box>
                {/* Hero Section */}
                <HeroSection>
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'center',
                            color: 'white',
                            maxWidth: '800px',
                            px: { xs: 3, md: 4 },
                        }}
                    >
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                                fontWeight: 'bold',
                                lineHeight: 1.2,
                                mb: 4,
                                color: 'white',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            }}
                        >
                            The finest choice in modular solutions
                        </Typography>

                        <Button
                            component={Link}
                            to="/offerings/book-online-consultation"
                            variant="contained"
                            size="medium"
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                px: { xs: 3, md: 4 },
                                py: { xs: 1.5, md: 2 },
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                borderRadius: '50px',
                                boxShadow: `0 4px 16px ${theme.palette.secondary.main}30`,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.light,
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 6px 20px ${theme.palette.secondary.main}40`,
                                },
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            Book Online Consultation
                        </Button>
                    </Box>
                </HeroSection>

                {/* Main Content Section */}
                <Container maxWidth="lg" sx={{ py: 4 }}>
                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        sx={{ mb: 4 }}
                    >
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none',
                                color: theme.palette.secondary.main,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            <HomeIcon fontSize="small" />
                            Home
                        </Link>
                        <Link
                            to="/offerings"
                            style={{
                                textDecoration: 'none',
                                color: theme.palette.secondary.main
                            }}
                        >
                            Offerings
                        </Link>
                        <Typography color="text.primary">Modular Interiors</Typography>
                    </Breadcrumbs>

                    {/* Main Heading */}
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontWeight: 'bold',
                            color: theme.palette.text.primary,
                            mb: 3,
                            lineHeight: 1.2
                        }}
                    >
                        Modular Interior Solutions
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: theme.palette.text.secondary,
                            lineHeight: 1.6,
                            mb: 3,
                            maxWidth: '1000px'
                        }}
                    >
                        Transform your spaces with our premium modular interior solutions. From custom kitchens to smart wardrobes,
                        we create functional and beautiful storage solutions tailored to your lifestyle.
                    </Typography>

                    {/* What we offer section */}
                    <Box sx={{
                        mt: 1,
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 2,
                        p: 4
                    }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,
                                mb: 4
                            }}
                        >
                            What we offer
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                flexWrap: { xs: 'wrap', md: 'nowrap' },
                                '& > *': {
                                    flex: '1 1 300px',
                                    maxWidth: '350px',
                                    minWidth: '280px'
                                }
                            }}
                        >
                            {/* Service Card 1 - Design */}
                            <Card
                                sx={{
                                    height: '400px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Interior Design"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            Interior Design
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                        >
                                            Expert design consultation and space planning to create your dream home.
                                        </Typography>

                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Service Card 2 - Construction */}
                            <Card
                                sx={{
                                    height: '400px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Construction & Installation"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            Construction & Installation
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                        >
                                            Professional construction and installation services for all your interior needs.
                                        </Typography>

                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Service Card 3 - Kitchen */}
                            <Card
                                sx={{
                                    height: '400px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Kitchen Design"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            Kitchen Design
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                        >
                                            Modern kitchen designs with premium materials and smart storage solutions.
                                        </Typography>

                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Description below cards */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                color: theme.palette.text.secondary,
                                lineHeight: 1.3,
                                mt: 4,
                                textAlign: 'left',
                                maxWidth: '100%'
                            }}
                        >
                            Does your project scope require services like electrical or plumbing? We'll take care of it. Happen to need services beyond the scope of your project? With KalaKruti's excellent partner network it's easy to find the right people for your job.
                        </Typography>
                    </Box>





                    {/* What goes into crafting the best section */}
                    <Box sx={{ mt: 8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                            <Box sx={{ flex: 1, maxWidth: '600px' }}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                        fontSize: { xs: '1.8rem', md: '2.2rem' },
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 3
                                    }}
                                >
                                    What goes into crafting the best
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6
                                    }}
                                >
                                    Thanks to our precision engineered manufacturing technology with 4-sigma (99%) accuracy, all KalaKruti modular furniture proudly comes with a FLAT 10-year warranty*.
                                </Typography>
                            </Box>


                        </Box>

                        {/* Cards Layout */}
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                            justifyContent: 'center'
                        }}>
                            {/* Card 1 - Design */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Design"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Tailored for you, applying the actual science of making living easy and beautiful.
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Card 2 - Core Materials */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Core Materials"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Core Materials
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Ethically sourced and sized up against the fierce tests of NABL certified labs.
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Card 3 - Manufacturing */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Manufacturing"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Manufacturing
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Precision engineered and fully automated for zero 'whoops' moments.
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Card 4 - Quality Checks */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Quality Checks"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Quality Checks
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Hardware and drop tests ensure our DuraBuild cabinets withstand wear and tear.
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Card 5 - Packaging */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Packaging"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Packaging
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Protected well, all modules reach your home in pristine condition.
                                    </Typography>
                                </Box>
                            </Card>

                            {/* Card 6 - Delivery & Installation */}
                            <Card
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    height: '230px',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Delivery & Installation"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        p: 3
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'white',
                                            mb: 1,
                                            fontSize: '1.2rem'
                                        }}
                                    >
                                        Delivery & Installation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'white',
                                            lineHeight: 1.4,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Your finished modules are installed by certified and trained KalaKruti professionals.
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Box>

                    {/* Technology that makes our products long lasting section */}
                    <Box sx={{ mt: 8 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,
                                mb: 4,
                                textAlign: 'center'
                            }}
                        >
                            Technology that makes our products long lasting
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 4,
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}>
                            {/* DuraBuild Card */}
                            <Box sx={{
                                width: { xs: '100%', md: '300px' },
                                textAlign: 'center',
                                p: 3
                            }}>
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.secondary.main,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        boxShadow: '0 4px 16px rgba(177, 182, 184, 0.3)'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            border: '2px solid white',
                                            borderRadius: 1,
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: -8,
                                                right: -8,
                                                width: 12,
                                                height: 12,
                                                backgroundColor: 'white',
                                                borderRadius: '50%',
                                                border: `2px solid ${theme.palette.secondary.main}`
                                            }
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    DuraBuild
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem',
                                        mb: 2,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Cabinets
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Has a robust, sturdy build. Designed to avoid moisture-related damage.
                                </Typography>
                            </Box>

                            {/* AntiBubble Card */}
                            <Box sx={{
                                width: { xs: '100%', md: '300px' },
                                textAlign: 'center',
                                p: 3
                            }}>
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.secondary.main,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        boxShadow: '0 4px 16px rgba(177, 182, 184, 0.3)'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{ width: 8, height: 8, backgroundColor: 'white', borderRadius: '50%' }} />
                                        <Box sx={{ width: 6, height: 6, backgroundColor: 'white', borderRadius: '50%' }} />
                                        <Box sx={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: '50%' }} />
                                        <Box sx={{ width: 7, height: 7, backgroundColor: 'white', borderRadius: '50%' }} />
                                        <Box sx={{ width: 5, height: 5, backgroundColor: 'white', borderRadius: '50%' }} />
                                        <Box sx={{ width: 9, height: 9, backgroundColor: 'white', borderRadius: '50%' }} />
                                    </Box>
                                </Box>

                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    AntiBubble
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem',
                                        mb: 2,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Technology
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Ensures the panels are smooth and bubble-free.
                                </Typography>
                            </Box>

                            {/* AquaBloc Card */}
                            <Box sx={{
                                width: { xs: '100%', md: '300px' },
                                textAlign: 'center',
                                p: 3
                            }}>
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.secondary.main,
                                        borderRadius: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        boxShadow: '0 4px 16px rgba(177, 182, 184, 0.3)'
                                    }}
                                >
                                    <Box sx={{ position: 'relative', width: 40, height: 40 }}>
                                        {/* Droplets */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 5,
                                            left: 8,
                                            width: 6,
                                            height: 8,
                                            backgroundColor: 'white',
                                            borderRadius: '50% 50% 50% 0',
                                            transform: 'rotate(-45deg)'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 8,
                                            left: 16,
                                            width: 5,
                                            height: 7,
                                            backgroundColor: 'white',
                                            borderRadius: '50% 50% 50% 0',
                                            transform: 'rotate(-45deg)'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 6,
                                            left: 24,
                                            width: 7,
                                            height: 9,
                                            backgroundColor: 'white',
                                            borderRadius: '50% 50% 50% 0',
                                            transform: 'rotate(-45deg)'
                                        }} />

                                        {/* Surface line */}
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 8,
                                            left: 4,
                                            right: 4,
                                            height: 2,
                                            backgroundColor: 'white',
                                            borderRadius: 1
                                        }} />

                                        {/* Reflection arrows */}
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 12,
                                            left: 10,
                                            width: 8,
                                            height: 2,
                                            backgroundColor: 'white',
                                            borderRadius: 1,
                                            transform: 'rotate(15deg)'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 12,
                                            right: 10,
                                            width: 8,
                                            height: 2,
                                            backgroundColor: 'white',
                                            borderRadius: 1,
                                            transform: 'rotate(-15deg)'
                                        }} />
                                    </Box>
                                </Box>

                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        fontSize: '1.5rem'
                                    }}
                                >
                                    AquaBloc
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem',
                                        mb: 2,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Technology
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Guarantees moisture-resistant cabinets.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* How it works section */}
                    <Box sx={{
                        mt: 8,
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 2,
                        p: 4,
                        mb: 3
                    }}>
                        <Box sx={{ textAlign: 'left', mb: 6 }}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary,
                                    mb: 2
                                }}
                            >
                                Your journey in a snapshot
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    maxWidth: '800px'
                                }}
                            >
                                At KalaKruti, we make setting up your home a process as comfortable as living in it.
                            </Typography>
                        </Box>

                        <Grid container spacing={6} sx={{ alignItems: 'flex-start' }}>
                            {/* Left Column - Process Steps */}
                            <Grid item xs={12} md={6}>
                                <Stack spacing={3}>
                                    {/* Step 1: Booking */}
                                    <Paper
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flexShrink: 0
                                                }}
                                            >
                                                1
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1
                                                    }}
                                                >
                                                    Booking
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, mb: 1 }}
                                                >
                                                    Typically 2 weeks*
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: theme.palette.text.secondary }}
                                                    >
                                                        You pay 5%**
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: theme.palette.primary.main,
                                                            color: 'white',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: '12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 'bold',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        MILESTONE
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>

                                    {/* Step 2: Design Phase */}
                                    <Paper
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flexShrink: 0
                                                }}
                                            >
                                                2
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1
                                                    }}
                                                >
                                                    Design Phase
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, mb: 1 }}
                                                >
                                                    Typically 2 months*
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: theme.palette.text.secondary }}
                                                    >
                                                        You pay 60%
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: theme.palette.primary.main,
                                                            color: 'white',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: '12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 'bold',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        MILESTONE
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>

                                    {/* Step 3: Manufacturing & Installation */}
                                    <Paper
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flexShrink: 0
                                                }}
                                            >
                                                3
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1
                                                    }}
                                                >
                                                    Manufacturing & Installation
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, mb: 1 }}
                                                >
                                                    Typically 3 months*
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: theme.palette.text.secondary }}
                                                    >
                                                        You pay 100%
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: theme.palette.primary.main,
                                                            color: 'white',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: '12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 'bold',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        MILESTONE
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>

                                    {/* Step 4: Move-in */}
                                    <Paper
                                        sx={{
                                            p: 3,
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                            position: 'relative'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    flexShrink: 0
                                                }}
                                            >
                                                4
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1
                                                    }}
                                                >
                                                    Move-in
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Stack>
                            </Grid>

                            {/* Right Column - Process Details */}
                            <Grid item xs={12} md={6}>
                                <Box sx={{ pl: { xs: 0, md: 4 } }}>
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{
                                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 3
                                        }}
                                    >
                                        Booking
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            mb: 4,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Say hi to your designer and kick-start your dream with a design proposal.
                                    </Typography>

                                    <Stack spacing={3}>
                                        {/* Step 1 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Fill form
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    Share your basic information and property details in a quiz.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 2 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Get a call
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    A KalaKruti executive connects with you to understand your requirements.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 3 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Share your floor plan
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    We match you to a KalaKruti designer based on your requirements.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 4 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Speak to your designer
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    Your designer takes the time to understand you and your family's needs.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 5 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Design proposal
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    A design proposal and a tentative quote are created based on your budget.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 6 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Visit an Experience Centre
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    Get a presentation on your home interiors at an EC or via an online call.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 7 */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        mb: 1,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Revised quote
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    Share your feedback and receive a revised proposal.
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Step 8 - Book with us */}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            color: theme.palette.text.primary,
                                                            fontSize: '1rem'
                                                        }}
                                                    >
                                                        Book with us
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            backgroundColor: theme.palette.primary.main,
                                                            color: 'white',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            borderRadius: '12px',
                                                            fontSize: '0.7rem',
                                                            fontWeight: 'bold',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        MILESTONE
                                                    </Box>
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}
                                                >
                                                    You pay 10% or Rs.25,000 (whichever is higher) to book with KalaKruti
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                    <Container maxWidth="lg" sx={{ py: 4 }}>
                        <Box sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 2,
                            p: 4,
                            mb: 3
                        }}>
                            <Box sx={{ textAlign: 'left', mb: 6 }}>
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 2
                                    }}
                                >
                                    The team behind your dream
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        maxWidth: '800px'
                                    }}
                                >
                                    It takes having the right people to bring dreams to life - and we make sure you get the best.
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 4,
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                                    '& > *': {
                                        flex: '1 1 400px',
                                        maxWidth: '500px',
                                        minWidth: '350px'
                                    }
                                }}
                            >
                                {/* Your Designer Card */}
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.background.paper,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                mx: 'auto',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '1.5rem'
                                                }}
                                            >
                                                👩‍🎨
                                            </Box>
                                        </Box>

                                        {/* Title and Subtitle */}
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                textAlign: 'center'
                                            }}
                                        >
                                            Your Designer
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                mb: 2,
                                                textAlign: 'center',
                                                fontSize: '1rem',
                                                fontWeight: 'normal'
                                            }}
                                        >
                                            An expert in full home design
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                mb: 3,
                                                textAlign: 'center'
                                            }}
                                        >
                                            Your designer will translate your family's personality and needs into a wholesome design.
                                        </Typography>

                                        {/* Details */}
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Education:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    Masters / Bachelors in Interior Design
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Typical Experience:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    6+ years
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Projects Managed:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    Over 15 homes
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 1 }}>
                                                    Top Skills:
                                                </Typography>
                                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Experienced in designing across styles & themes
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Space planning
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Civil/core materials know-how
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                        Furniture & furnishing
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>

                                {/* Your Operations Lead Card */}
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {/* Icon */}
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.background.paper,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 3,
                                                mx: 'auto',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '50%',
                                                    backgroundColor: theme.palette.secondary.main,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: '1.5rem'
                                                }}
                                            >
                                                👷‍♂️
                                            </Box>
                                        </Box>

                                        {/* Title and Subtitle */}
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                textAlign: 'center'
                                            }}
                                        >
                                            Your Operations Lead
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                mb: 2,
                                                textAlign: 'center',
                                                fontSize: '1rem',
                                                fontWeight: 'normal'
                                            }}
                                        >
                                            An expert in project management
                                        </Typography>

                                        {/* Description */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                mb: 3,
                                                textAlign: 'center'
                                            }}
                                        >
                                            Your rep on site, your operations lead will ensure a perfect and complete home transformation.
                                        </Typography>

                                        {/* Details */}
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Education:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    Civil Engineer
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Typical Experience:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    4+ years
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 3 }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 0.5 }}>
                                                    Projects Managed:
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                    Over 40 homes
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.text.primary, mb: 1 }}>
                                                    Top Skills:
                                                </Typography>
                                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Project planning
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Onsite progress & tracking
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary, mb: 0.5 }}>
                                                        Custom work/services audit
                                                    </Typography>
                                                    <Typography component="li" variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                                        Quality adherence
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Container>

                    {/* Testimonials Section */}
                    <Container maxWidth="lg" sx={{ py: 4 }}>
                        <Box sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 2,
                            p: 4,
                            mb: 3
                        }}>
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 2
                                    }}
                                >
                                    Here's what our homeowners have to say
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 4,
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                                    '& > *': {
                                        flex: '1 1 300px',
                                        maxWidth: '400px',
                                        minWidth: '280px'
                                    }
                                }}
                            >
                                {/* Testimonial Card 1 */}
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                            alt="Customer testimonial"
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 12,
                                                right: 12,
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'white',
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: `12px solid ${theme.palette.secondary.main}`,
                                                    borderTop: '8px solid transparent',
                                                    borderBottom: '8px solid transparent',
                                                    marginLeft: '3px'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                mb: 3,
                                                fontStyle: 'italic',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            "Hats off to the entire team at KalaKruti. They finished the project ahead of time. They said 45 days but finished it much earlier."
                                        </Typography>
                                        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 0.5,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Rohit Paul & Shveta
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}
                                            >
                                                Modular kitchen, Gurugram
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                {/* Testimonial Card 2 */}
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                            alt="Customer testimonial"
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 12,
                                                right: 12,
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'white',
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: `12px solid ${theme.palette.secondary.main}`,
                                                    borderTop: '8px solid transparent',
                                                    borderBottom: '8px solid transparent',
                                                    marginLeft: '3px'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                mb: 3,
                                                fontStyle: 'italic',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            "Our experience with KalaKruti was nice - thanks to the project managers. They worked so much on this project, and finished it on time."
                                        </Typography>
                                        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 0.5,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Swati & Gaurav
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}
                                            >
                                                2 BHK, Bangalore
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                {/* Testimonial Card 3 */}
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <Box sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                            alt="Customer testimonial"
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 12,
                                                right: 12,
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: 'white',
                                                    transform: 'scale(1.1)',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: `12px solid ${theme.palette.secondary.main}`,
                                                    borderTop: '8px solid transparent',
                                                    borderBottom: '8px solid transparent',
                                                    marginLeft: '3px'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                lineHeight: 1.6,
                                                mb: 3,
                                                fontStyle: 'italic',
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            "This house is a part of me. We reached out to KalaKruti and they designed the house that we really wanted."
                                        </Typography>
                                        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 0.5,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Priya Sharma
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}
                                            >
                                                4 BHK interiors, Gurugram
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Container>

                    {/* 45-day Move-in Guarantee Section */}
                    <Box sx={{
                        mt: 4,
                        mb: 8
                    }}>
                        <Container maxWidth="lg">
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                gap: 6
                            }}>
                                {/* Left Column - Text Content */}
                                <Box sx={{
                                    flex: 1,
                                    pr: { xs: 0, md: 4 }
                                }}>
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        sx={{
                                            fontSize: { xs: '2rem', md: '2.5rem' },
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 3,
                                            lineHeight: 1.2
                                        }}
                                    >
                                        All we need is 45 days
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            mb: 4
                                        }}
                                    >
                                        With the KalaKruti Move-in Guarantee, you can plan your house warming with confidence.
                                        Though unlikely, if your home is not done in 45 days, we'll pay you rent for every day of delay.
                                    </Typography>

                                    <Typography
                                        component={Link}
                                        to="/guarantee-policy"
                                        sx={{
                                            color: theme.palette.secondary.main,
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            fontWeight: '500',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Read the entire policy →
                                    </Typography>
                                </Box>

                                {/* Right Column - Image */}
                                <Box sx={{
                                    flex: 1,
                                    minWidth: { xs: '100%', md: '400px' }
                                }}>
                                    <Box sx={{
                                        position: 'relative',
                                        height: '400px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Box sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '350px',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Modern Living Room"
                                                sx={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                            />

                                            {/* Guarantee Badge */}
                                            <Box sx={{
                                                position: 'absolute',
                                                top: 20,
                                                right: 20,
                                                width: 80,
                                                height: 80,
                                                backgroundColor: theme.palette.secondary.main,
                                                borderRadius: '50%',
                                                border: '3px solid white',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 16px rgba(177, 182, 184, 0.3)'
                                            }}>
                                                <Typography sx={{
                                                    color: 'white',
                                                    fontSize: '0.6rem',
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase',
                                                    lineHeight: 1
                                                }}>
                                                    MOVE IN
                                                </Typography>
                                                <Typography sx={{
                                                    color: 'white',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 'bold',
                                                    lineHeight: 1
                                                }}>
                                                    45 DAY
                                                </Typography>
                                                <Typography sx={{
                                                    color: 'white',
                                                    fontSize: '0.5rem',
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase',
                                                    lineHeight: 1
                                                }}>
                                                    GUARANTEE
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                    {/* FAQ Section */}
                    <Box sx={{
                        mt: 8,
                        mb: 8
                    }}>
                        <Container maxWidth="lg">
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary,
                                    mb: 4
                                }}
                            >
                                FAQs
                            </Typography>

                            <Box sx={{ width: '100%' }}>
                                {/* FAQ Item 1 */}
                                <Box sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 2,
                                    mb: 2,
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                        onClick={() => toggleFAQ(1)}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '500',
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem',
                                                pr: 2
                                            }}
                                        >
                                            What is the difference between KalaKruti Select and KalaKruti Vesta?
                                        </Typography>
                                        <Typography sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            minWidth: '24px',
                                            textAlign: 'center'
                                        }}>
                                            {expandedFAQs[1] ? '−' : '+'}
                                        </Typography>
                                    </Box>
                                    {expandedFAQs[1] && (
                                        <Box sx={{ px: 3, pb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                It's kind of like a personal pizza to a large one. Same quality, different portion sizes.
                                                KalaKruti Select offers you the convenience of setting up different areas of your home quickly.
                                                We do this using modular solutions for sections like kitchens, wardrobes and storage customised
                                                to meet your requirements. KalaKruti Vesta on the other hand is ideal for customers looking
                                                for a complete makeover, starting from scratch and creating a wholesome design for the entire home.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* FAQ Item 2 */}
                                <Box sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 2,
                                    mb: 2,
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                        onClick={() => toggleFAQ(2)}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '500',
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem',
                                                pr: 2
                                            }}
                                        >
                                            What can I expect to spend if I were to choose KalaKruti Select?
                                        </Typography>
                                        <Typography sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            minWidth: '24px',
                                            textAlign: 'center'
                                        }}>
                                            {expandedFAQs[2] ? '−' : '+'}
                                        </Typography>
                                    </Box>
                                    {expandedFAQs[2] && (
                                        <Box sx={{ px: 3, pb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                KalaKruti Select pricing varies based on the specific areas you want to design and the materials you choose.
                                                Our modular solutions for kitchens typically start from ₹2-3 lakhs, wardrobes from ₹1-2 lakhs, and storage solutions
                                                from ₹50,000-1 lakh. We provide detailed quotes after understanding your specific requirements and space measurements.
                                                All our pricing is transparent with no hidden costs.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* FAQ Item 3 */}
                                <Box sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 2,
                                    mb: 2,
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                        onClick={() => toggleFAQ(3)}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '500',
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem',
                                                pr: 2
                                            }}
                                        >
                                            Is this a safe time to do my home interiors?
                                        </Typography>
                                        <Typography sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            minWidth: '24px',
                                            textAlign: 'center'
                                        }}>
                                            {expandedFAQs[3] ? '−' : '+'}
                                        </Typography>
                                    </Box>
                                    {expandedFAQs[3] && (
                                        <Box sx={{ px: 3, pb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                Absolutely! We follow all safety protocols and guidelines. Our team is fully vaccinated and follows strict
                                                hygiene practices. We also offer virtual consultations and 3D design presentations so you can plan your
                                                interiors from the comfort of your home. Our modular approach means faster installation with minimal disruption
                                                to your daily routine.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* FAQ Item 4 */}
                                <Box sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 2,
                                    mb: 2,
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                        onClick={() => toggleFAQ(4)}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '500',
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem',
                                                pr: 2
                                            }}
                                        >
                                            How is KalaKruti different from contractors/individual designers/studios?
                                        </Typography>
                                        <Typography sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            minWidth: '24px',
                                            textAlign: 'center'
                                        }}>
                                            {expandedFAQs[4] ? '−' : '+'}
                                        </Typography>
                                    </Box>
                                    {expandedFAQs[4] && (
                                        <Box sx={{ px: 3, pb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                KalaKruti offers a complete end-to-end solution with standardized processes, quality assurance, and warranty.
                                                Unlike individual contractors, we have a dedicated project management team, in-house manufacturing, and a network
                                                of skilled craftsmen. We provide 3D visualizations, transparent pricing, and timely delivery with post-installation
                                                support. Our modular approach ensures consistency and quality across all projects.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* FAQ Item 5 */}
                                <Box sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: 2,
                                    mb: 2,
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover
                                            }
                                        }}
                                        onClick={() => toggleFAQ(5)}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '500',
                                                color: theme.palette.text.primary,
                                                fontSize: '1rem',
                                                pr: 2
                                            }}
                                        >
                                            What are the cities that KalaKruti currently operates in?
                                        </Typography>
                                        <Typography sx={{
                                            color: theme.palette.text.primary,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            minWidth: '24px',
                                            textAlign: 'center'
                                        }}>
                                            {expandedFAQs[5] ? '−' : '+'}
                                        </Typography>
                                    </Box>
                                    {expandedFAQs[5] && (
                                        <Box sx={{ px: 3, pb: 3 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.6,
                                                    fontSize: '0.95rem'
                                                }}
                                            >
                                                KalaKruti currently operates in major metropolitan cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad,
                                                Pune, Kolkata, and Ahmedabad. We are continuously expanding our presence to serve more cities. If your city is not
                                                currently listed, please contact us and we'll inform you as soon as we start operations in your area. We also offer
                                                virtual consultations for customers in other cities.
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Container>
                    </Box>

                    {/* Floating Chat Widget */}
                    <FloatingWidget
                        sx={{
                            bottom: 20,
                            right: 20,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Speech Bubble */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '100%',
                                    right: 0,
                                    mb: 1,
                                    backgroundColor: 'white',
                                    color: theme.palette.text.primary,
                                    padding: '8px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '500',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                    whiteSpace: 'nowrap',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '100%',
                                        right: '20px',
                                        width: 0,
                                        height: 0,
                                        borderLeft: '8px solid transparent',
                                        borderRight: '8px solid transparent',
                                        borderTop: '8px solid white',
                                    }
                                }}
                            >
                                Need help with modular interiors?
                            </Box>

                            {/* Chat Icon */}
                            <IconButton
                                sx={{
                                    width: 60,
                                    height: 60,
                                    backgroundColor: theme.palette.secondary.main,
                                    color: 'white',
                                    borderRadius: '50%',
                                    boxShadow: `0 4px 16px ${theme.palette.secondary.main}30`,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.light,
                                        transform: 'scale(1.05)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <ChatIcon sx={{ fontSize: '1.5rem' }} />
                            </IconButton>
                        </Box>
                    </FloatingWidget>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default ModularInteriors
