import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePageFeatured() {
    const navigate = useNavigate();
    const theme = useTheme();

    const featuredProjects = [
        {
            id: 1,
            title: 'Modern Living Room',
            image: 'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Contemporary design with clean lines and natural materials'
        },
        {
            id: 2,
            title: 'Luxury Bedroom',
            image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Elegant bedroom design with premium finishes'
        },
        {
            id: 3,
            title: 'Kitchen Renovation',
            image: 'https://i.pinimg.com/1200x/54/51/fd/5451fd5d13214a66a036c3133fa8f1a6.jpg',
            description: 'Modern kitchen with smart storage solutions'
        }
    ];

    return (
        <>
            <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{
                        fontSize: { xs: '1.8rem', md: '3rem' } // 👈 smaller text for mobile
                    }}>
                        Featured Projects
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
                        {featuredProjects.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        minHeight: '400px',
                                        width: '100%'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%'
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="h6" gutterBottom>
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {project.description}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/projects')}
                        >
                            View All Projects
                        </Button>
                    </Box>
                </Container>
            </Box>

        </>
    );
}
