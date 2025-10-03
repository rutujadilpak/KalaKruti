// src/Theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#B28E52', // Lion
            light: '#D1BC98',
            dark: '#907341',
            contrastText: '#fff',
        },
        secondary: {
            main: '#505B5F', // Davy's gray
            light: '#919EA3',
            dark: '#2f3639',
            contrastText: '#fff',
        },
        neutral: {
            silver: '#B1B6B8',
            bone: '#CEC8B9',
            cadetGray: '#92A3AB',
        },
        background: {
            default: '#ECE9E3', // Bone light shade
            paper: '#fff',      // Card and modal background
        },
        text: {
            primary: '#505B5F', // Davy's gray
            secondary: '#92A3AB', // Cadet gray
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
        divider: '#e0e0e0',
        action: {
            hover: 'rgba(178, 142, 82, 0.08)',
            selected: 'rgba(178, 142, 82, 0.12)',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontWeight: 700 },
        h2: { fontWeight: 700 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 500 },
        h6: { fontWeight: 500 },
        button: { textTransform: 'none' },
        body1: { color: '#505B5F' },
        body2: { color: '#92A3AB' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: '8px 16px',
                },
                contained: {
                    backgroundColor: '#B28E52',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#907341',
                    },
                },
                outlined: {
                    borderColor: '#B28E52',
                    color: '#B28E52',
                    '&:hover': {
                        borderColor: '#907341',
                        backgroundColor: 'rgba(178, 142, 82, 0.08)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    backgroundColor: '#fff',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    color: '#505B5F',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#505B5F',
                },
                h1: {
                    color: '#505B5F',
                    fontWeight: 700,
                },
                h2: {
                    color: '#505B5F',
                    fontWeight: 700,
                },
                h3: {
                    color: '#505B5F',
                    fontWeight: 600,
                },
                h4: {
                    color: '#505B5F',
                    fontWeight: 600,
                },
                h5: {
                    color: '#505B5F',
                    fontWeight: 500,
                },
                h6: {
                    color: '#505B5F',
                    fontWeight: 500,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                },
            },
        },
    },
});

export default theme;
