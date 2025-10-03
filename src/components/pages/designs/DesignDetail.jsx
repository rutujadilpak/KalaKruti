import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Breadcrumbs, Link, useTheme } from '@mui/material';
import { ArrowBack, Favorite, Share, ShoppingCart, Home } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { masterBedroomDesignDetails } from './master-bedroom';
import { kitchenDesignDetails } from './kitchen';
import { bathroomDesignDetails } from './bathroom';
import { livingroomDesignDetails } from './living-room';
import { wardrobeDesignDetails } from './wardrobe';
import { poojaroomDesignDetails } from './pooja-room';
import { tvunitDesignDetails } from './tv-unit';
import { falseceilingDesignDetails } from './false-ceiling';
import { kidsbedroomDesignDetails } from './kids-bedroom';
import { balconyDesignDetails } from './balcony';
import { diningroomDesignDetails } from './dining-room';
import { foyerDesignDetails } from './foyer';
import { homeslivspaceDesignDetails } from './homes-livspace';
import { homeofficeDesignDetails } from './home-office';
import { guestbedroomDesignDetails } from './guest-bedroom';
import { windowDesignDetails } from './window';
import { flooringDesignDetails } from './flooring';
import { walldecorDesignDetails } from './wall-decor';
import { wallpaintDesignDetails } from './wall-paint';
import { wallpaperDesignDetails } from './wallpaper';
import { tileDesignDetails } from './tile';
import { studyroomDesignDetails } from './study-room';
import { kitchensinksDesignDetails } from './kitchen-sinks';
import { spacesavingDesignDetails } from './space-saving';
import { doorDesignDetails } from './door';
import { staircaseDesignDetails } from './staircase';
import { crockeryunitDesignDetails } from './crockery-unit';
import { homebarDesignDetails } from './home-bar';

export default function DesignDetail() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    // Comprehensive design data - in real app, this would come from API
    const designsData = {
        "master-bedroom": masterBedroomDesignDetails,
        "kitchen": kitchenDesignDetails,
        "bathroom": bathroomDesignDetails,
        "living-room": livingroomDesignDetails,
        "wardrobe": wardrobeDesignDetails,
        "pooja-room": poojaroomDesignDetails,
        "tv-unit": tvunitDesignDetails,
        "false-ceiling": falseceilingDesignDetails,
        "kids-bedroom": kidsbedroomDesignDetails,
        "balcony": balconyDesignDetails,
        "dining-room": diningroomDesignDetails,
        "foyer": foyerDesignDetails,
        "homes-livspace": homeslivspaceDesignDetails,
        "home-office": homeofficeDesignDetails,
        "guest-bedroom": guestbedroomDesignDetails,
        "window": windowDesignDetails,
        "flooring": flooringDesignDetails,
        "wall-decor": walldecorDesignDetails,
        "wall-paint": wallpaintDesignDetails,
        "wallpaper": wallpaperDesignDetails,
        "tile": tileDesignDetails,
        "study-room": studyroomDesignDetails,
        "kitchen-sinks": kitchensinksDesignDetails,
        "space-saving": spacesavingDesignDetails,
        "door": doorDesignDetails,
        "staircase": staircaseDesignDetails,
        "crockery-unit": crockeryunitDesignDetails,
        "home-bar": homebarDesignDetails,
    };

    const design = designsData[category]?.[id] || {
        id: id,
        title: 'Design Not Found',
        category: category,
        style: 'Unknown',
        price: 'N/A',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'This design could not be found.',
        longDescription: 'The requested design is not available.',
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'],
        features: [],
        specifications: {
            area: 'N/A',
            style: 'N/A',
            colorScheme: 'N/A',
            materials: 'N/A',
            lighting: 'N/A',
            furniture: 'N/A'
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Breadcrumbs */}
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link
                    color="inherit"
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                    <Home fontSize="small" />
                    Home
                </Link>
                <Link
                    color="inherit"
                    href="/designs"
                    onClick={(e) => { e.preventDefault(); navigate('/designs'); }}
                    sx={{ cursor: 'pointer' }}
                >
                    Designs
                </Link>
                <Link
                    color="inherit"
                    href={`/designs/${category}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/designs/${category}`); }}
                    sx={{ cursor: 'pointer' }}
                >
                    {category?.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
                <Typography color="text.primary">{design.title}</Typography>
            </Breadcrumbs>

            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(`/designs/${category}`)}
                sx={{ mb: 3 }}
            >
                Back to {category?.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())} Designs
            </Button>

            {/* Design Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: theme.palette.text.primary }}>
                    {design.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <Chip
                        label={design.style}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText
                        }}
                    />
                    <Chip
                        label={design.price}
                        variant="outlined"
                        sx={{
                            borderColor: theme.palette.secondary.main,
                            color: theme.palette.secondary.main
                        }}
                    />
                </Box>
            </Box>

            {/* Main Image */}
            <Card sx={{ mb: 4 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={design.image}
                    alt={design.title}
                />
            </Card>

            {/* Design Details Grid */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        Design Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {design.description}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {design.longDescription}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Design Specifications
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Area
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.area}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Style
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.style}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Color Scheme
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.colorScheme}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Materials
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.materials}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Lighting
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.lighting}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        Furniture
                                    </Typography>
                                    <Typography variant="body1">
                                        {design.specifications.furniture}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Features */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Key Features
                </Typography>
                <Grid container spacing={2}>
                    {design.features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="body1">
                                        {feature}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Gallery */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Design Gallery
                </Typography>
                <Grid container spacing={2}>
                    {design.images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image}
                                    alt={`${design.title} - Image ${index + 1}`}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCart />}
                    onClick={() => navigate('/contact')}
                    sx={{
                        px: 4,
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        }
                    }}
                >
                    Get This Design
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Favorite />}
                    sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                            borderColor: theme.palette.primary.dark,
                            backgroundColor: theme.palette.action.hover,
                        }
                    }}
                >
                    Save to Favorites
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Share />}
                    sx={{
                        borderColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.main,
                        '&:hover': {
                            borderColor: theme.palette.secondary.dark,
                            backgroundColor: theme.palette.action.hover,
                        }
                    }}
                >
                    Share
                </Button>
            </Box>

            {/* CTA */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: 4,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text.primary }}>
                    Want to customize this design?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    We can adapt this design to fit your specific space and requirements.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{
                        px: 4,
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        }
                    }}
                >
                    Request Customization
                </Button>
            </Box>
        </Container>
    );
}

