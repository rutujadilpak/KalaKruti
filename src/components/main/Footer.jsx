import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    IconButton,
    Button,
    useTheme
} from '@mui/material';
import {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn,
    YouTube,
    Pinterest,
    Phone,
    Email
} from '@mui/icons-material';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ mt: 'auto' }}>
            {/* "Your dream home is just a click away" Section */}
            <Box
                sx={{
                    backgroundColor: theme.palette.background.default,
                    py: { xs: 10, md: 12 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: theme.palette.text.primary,
                                fontWeight: 700,
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                mb: 4,
                                maxWidth: '800px',
                                lineHeight: 1.2,
                            }}
                        >
                            Your dream home is just a click away
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                px: 6,
                                py: 2,
                                fontSize: '1.3rem',
                                fontWeight: 600,
                                borderRadius: 3,
                                minWidth: '200px',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            GET STARTED
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Main Footer */}
            <Box
                sx={{
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                    py: { xs: 8, md: 10 },
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        {/* Logo and Social Media */}
                        <Grid item xs={12} md={3}>
                            <Box sx={{ mb: 5 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2.2rem', md: '2.5rem' },
                                        letterSpacing: '0.1em',
                                        mb: 2,
                                    }}
                                >
                                    KALAKRUTI
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                                        letterSpacing: '0.2em',
                                        opacity: 0.8,
                                    }}
                                >
                                    STUDIO
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Twitter />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <YouTube />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: '1.5rem',
                                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                                    }}
                                >
                                    <Pinterest />
                                </IconButton>
                            </Box>

                        </Grid>

                        {/* OFFERINGS */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                OFFERINGS
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Interiors
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Furnishings
                                </Link>
                            </Box>
                        </Grid>

                        {/* GET INSPIRED */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                GET INSPIRED
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    href="/designs"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Design Ideas
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Magazine
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    KalaKruti TV
                                </Link>
                            </Box>
                        </Grid>

                        {/* COMPANY */}
                        <Grid item xs={12} sm={6} md={2}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                COMPANY
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Refer a friend
                                </Link>
                                <Link
                                    href="/how-it-works"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    How it works
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Policies
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Terms and conditions
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    About us
                                </Link>
                                <Link
                                    href="#"
                                    sx={{
                                        color: theme.palette.secondary.contrastText,
                                        textDecoration: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        opacity: 0.8,
                                        py: 0.5,
                                        '&:hover': { opacity: 1, textDecoration: 'underline' }
                                    }}
                                >
                                    Store Locator
                                </Link>
                            </Box>
                        </Grid>

                        {/* CONTACT US */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.secondary.contrastText,
                                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                                    fontWeight: 600,
                                    mb: 3,
                                    letterSpacing: '0.05em',
                                }}
                            >
                                CONTACT US
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Phone sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                    <Link
                                        href="tel:+91-9876543210"
                                        sx={{
                                            color: theme.palette.secondary.contrastText,
                                            textDecoration: 'none',
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            opacity: 0.8,
                                            py: 0.5,
                                            '&:hover': { opacity: 1, textDecoration: 'underline' }
                                        }}
                                    >
                                        +91-9876543210
                                    </Link>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Email sx={{ fontSize: '1.3rem', opacity: 0.8 }} />
                                    <Link
                                        href="mailto:care@kalakruti.com"
                                        sx={{
                                            color: theme.palette.secondary.contrastText,
                                            textDecoration: 'none',
                                            fontSize: { xs: '1rem', md: '1.1rem' },
                                            opacity: 0.8,
                                            py: 0.5,
                                            '&:hover': { opacity: 1, textDecoration: 'underline' }
                                        }}
                                    >
                                        care@kalakruti.com
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Copyright */}
                    <Box
                        sx={{
                            borderTop: 1,
                            borderColor: 'rgba(255,255,255,0.2)',
                            mt: 6,
                            pt: 5,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                opacity: 0.8,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                        >
                            © 2024 KalaKruti. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

