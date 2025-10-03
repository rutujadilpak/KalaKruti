import React, { useState } from 'react';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Container,
    Grid
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const inspirationItems = [
    { title: 'Living Room', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Master Bedroom', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'False Ceiling', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80' },
    { title: 'Homes by Livspace', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Kitchen', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Wardrobe', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Kids Room', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Home Office', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Guest Bedroom', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Foyer', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Dining Room', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Bathroom', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
];

export default function HomeInspiration() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 6;

    const handleNext = () => {
        if (startIndex + itemsPerPage < inspirationItems.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    const visibleItems = inspirationItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" fontWeight={700} mb={2}>
                    Inspiration for home interior designs
                </Typography>
                <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
                    Give your home a new look with these interior design ideas curated for you
                </Typography>

                {isMobile ? (
                    // Mobile: horizontal scroll
                    <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, px: 2 }}>
                        {inspirationItems.map((item, i) => (
                            <Box key={i} sx={{
                                minWidth: '70%',
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                flexShrink: 0,
                                gap: 1,
                            }}>
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                                />
                                <Box sx={{ p: 2, background: '#fff' }}>
                                    <Typography fontWeight={600}>{item.title}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    // Desktop: Perfect fit container layout
                    <Box sx={{ position: 'relative', height: 500 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                gridTemplateRows: '1fr 1fr',
                                gap: 1,
                                height: '100%',
                                width: '100%',
                                transition: 'all 0.5s ease-in-out',
                            }}
                        >
                            {visibleItems.map((item, i) => {
                                let gridArea;

                                // Perfect fit layout for 6 items
                                if (i === 0) {
                                    gridArea = '1 / 1 / 3 / 3'; // Top-left, spans 2 rows and 2 columns
                                } else if (i === 1) {
                                    gridArea = '1 / 3 / 2 / 4'; // Top row, 3rd column
                                } else if (i === 2) {
                                    gridArea = '1 / 4 / 2 / 5'; // Top row, 4th column
                                } else if (i === 3) {
                                    gridArea = '1 / 5 / 2 / 6'; // Top row, 5th column
                                } else if (i === 4) {
                                    gridArea = '2 / 3 / 3 / 5'; // Bottom row, spans 2 columns
                                } else if (i === 5) {
                                    gridArea = '2 / 5 / 3 / 6'; // Bottom row, last column
                                }

                                return (
                                    <Box
                                        key={`${startIndex}-${i}`}
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            gridArea: gridArea,
                                            width: '100%',
                                            height: '100%',
                                            transition: 'all 0.5s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                                zIndex: 2,
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                display: 'block',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                color: 'white',
                                                p: 2,
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                minHeight: '50px',
                                            }}
                                        >
                                            <Typography
                                                fontWeight={600}
                                                variant={i === 0 ? "h5" : "h6"}
                                                sx={{
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                                                    fontSize: i === 0 ? '1.4rem' : '1rem',
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Navigation Arrows */}
                        {startIndex > 0 && (
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: -30,
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    width: 56,
                                    height: 56,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                <ChevronLeftIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        )}

                        {startIndex + itemsPerPage < inspirationItems.length && (
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: -30,
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    width: 56,
                                    height: 56,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                <ChevronRightIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
}