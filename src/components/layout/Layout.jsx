import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '../main/Header';
import Footer from '../main/Footer';
import Headertwo from '../main/Headertwo';

export default function Layout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Headertwo - Desktop: at top, Mobile: at bottom */}
            {!isMobile && <Headertwo />}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: isMobile ? '110px' : '170px', // Mobile: only header, Desktop: both headers
                    pb: isMobile ? '80px' : 0, // Mobile: space for bottom Headertwo
                }}
            >
                <Outlet />
            </Box>

            <Footer />

            {/* Headertwo at bottom for mobile */}
            {isMobile && <Headertwo />}
        </Box>
    );
}

