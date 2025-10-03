import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material';

export default function AboutUsPage() {
    return (
        <Box sx={{ minHeight: '100vh', py: 8, backgroundColor: '#f8f9fa' }}>
            <Container maxWidth="lg">
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        gutterBottom 
                        sx={{ 
                            textAlign: 'center', 
                            color: '#B28E52',
                            fontWeight: 'bold',
                            mb: 4
                        }}
                    >
                        About KalaKruti Studio
                    </Typography>
                    
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            textAlign: 'center', 
                            color: '#666',
                            mb: 4,
                            lineHeight: 1.6
                        }}
                    >
                        Your trusted partner in creating beautiful, functional, and inspiring interior spaces.
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', p: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#B28E52', fontWeight: 'bold' }}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                        At KalaKruti Studio, we believe that every space has the potential to tell a story. 
                                        Our mission is to transform your vision into reality through innovative design, 
                                        quality craftsmanship, and personalized attention to detail.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <Card sx={{ height: '100%', p: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom sx={{ color: '#B28E52', fontWeight: 'bold' }}>
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                        To be the leading interior design studio that creates spaces that not only look 
                                        beautiful but also enhance the quality of life for our clients. We strive to 
                                        push the boundaries of design while maintaining functionality and sustainability.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Typography variant="h5" gutterBottom sx={{ color: '#B28E52', fontWeight: 'bold' }}>
                            Why Choose KalaKruti Studio?
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.7, maxWidth: '800px', mx: 'auto' }}>
                            With years of experience in interior design and a passion for creating exceptional spaces, 
                            we bring together creativity, functionality, and quality to deliver results that exceed expectations. 
                            Our team of skilled designers and craftsmen work closely with you to understand your needs and 
                            bring your dream space to life.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}