import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Alert,
    Snackbar,
    Paper,
    useTheme
} from '@mui/material';
import { Send as SendIcon, Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationIcon } from '@mui/icons-material';

export default function ContactForm() {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) {
            return 'Full name is required';
        }
        if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
            return 'Full name can only contain letters and spaces';
        }
        if (name.trim().length < 2) {
            return 'Full name must be at least 2 characters';
        }
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) {
            return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) {
            return 'Phone number is required';
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            return 'Phone number must be exactly 10 digits';
        }
        return '';
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return 'Message is required';
        }
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        // Filter phone input to only allow digits
        if (name === 'phone') {
            processedValue = value.replace(/\D/g, ''); // Remove all non-digits
        }

        setFormData({
            ...formData,
            [name]: processedValue
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            message: validateMessage(formData.message)
        };

        setErrors(newErrors);

        // Check if there are any validation errors
        const hasErrors = Object.values(newErrors).some(error => error !== '');

        if (hasErrors) {
            return; // Don't submit if there are validation errors
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                message: ''
            });

            // Clear errors
            setErrors({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            setShowSuccess(true);
        } catch (error) {
            setShowError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <PhoneIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Phone',
            details: '+1 (555) 123-4567'
        },
        {
            icon: <EmailIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Email',
            details: 'info@kalakruti.com'
        },
        {
            icon: <LocationIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Address',
            details: '123 Design Street, Creative City, CC 12345'
        }
    ];

    return (
        <>
            <Box sx={{
                minHeight: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' }
            }}>
                {/* Left Section - Contact Form */}
                <Box
                    sx={{
                        flex: { xs: 'none', lg: '0 0 50%' },
                        minHeight: { xs: 'auto', lg: 'auto' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 4 },
                        backgroundColor: theme.palette.background.default,
                        position: 'relative'
                    }}
                >
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            maxWidth: 600,
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: theme.shadows[4],
                            position: 'relative',
                            backgroundColor: theme.palette.background.paper,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -15,
                                right: -15,
                                width: 80,
                                height: 80,
                                background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                mb: 1,
                                fontWeight: 'bold',
                                color: theme.palette.text.primary
                            }}
                        >
                            We'd love to hear from you!
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{
                                mb: 3,
                                color: theme.palette.text.secondary,
                                fontWeight: 400
                            }}
                        >
                            Let's get in touch
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {/* Full Name and Email Fields - Side by Side */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    placeholder="olivia@untitledui.com"
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }
                                    }}
                                />
                            </Box>

                            {/* Phone Number and Address Fields - Side by Side */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                                <TextField
                                    fullWidth
                                    label="Phone number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    variant="outlined"
                                    placeholder="1234567890"
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    inputProps={{
                                        maxLength: 10,
                                        pattern: '[0-9]*'
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formData.address || ''}
                                    onChange={handleChange}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }
                                    }}
                                />
                            </Box>

                            {/* Message Field */}
                            <TextField
                                fullWidth
                                label="Your Message"
                                name="message"
                                multiline
                                rows={2}
                                value={formData.message}
                                onChange={handleChange}
                                variant="outlined"
                                placeholder="Type your message here"
                                error={!!errors.message}
                                helperText={errors.message}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: theme.palette.primary.main,
                                        }
                                    }
                                }}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={isSubmitting}
                                sx={{
                                    px: 4,
                                    py: 2,
                                    borderRadius: 2,
                                    backgroundColor: theme.palette.primary.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark
                                    },
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 600
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </Card>
                </Box>

                {/* Right Section - Contact Information with Theme Background */}
                <Box
                    sx={{
                        flex: { xs: 'none', lg: '0 0 50%' },
                        minHeight: { xs: 'auto', lg: 'auto' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 4 },
                        backgroundColor: theme.palette.background.default,
                        position: 'relative'
                    }}
                >
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            maxWidth: 600,
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: theme.shadows[4],
                            position: 'relative',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: -15,
                                right: -15,
                                width: 80,
                                height: 80,
                                background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}30 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.palette.primary.light}30 0%, transparent 50%)`,
                                pointerEvents: 'none',
                                borderRadius: 3
                            }
                        }}
                    >
                        <CardContent sx={{ position: 'relative', zIndex: 1, textAlign: 'left', color: theme.palette.primary.contrastText }}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                    color: theme.palette.primary.contrastText
                                }}
                            >
                                Contact Us
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    maxWidth: 350,
                                    lineHeight: 1.5,
                                    opacity: 0.9,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    color: theme.palette.primary.contrastText
                                }}
                            >
                                {/* Not sure what you need? The team at KalaKruti will be happy to listen to you and suggest design ideas you hadn't considered. */}
                            </Typography>

                            {/* Contact Details */}
                            <Box sx={{ textAlign: 'left', maxWidth: 350 }}>
                                {contactInfo.map((info, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box sx={{
                                            mr: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)'
                                        }}>
                                            {info.icon}
                                        </Box>
                                        <Typography variant="body2" sx={{ color: theme.palette.primary.contrastText, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                                            {info.details}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Consultation Hours */}
                            <Box sx={{ mt: 4, textAlign: 'left', maxWidth: 350 }}>
                                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.primary.contrastText }}>
                                    Consultation Hours
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.9, fontSize: { xs: '0.8rem', md: '0.85rem' }, color: theme.palette.primary.contrastText }}>
                                    Monday - Friday: 9:00 AM - 6:00 PM
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.9, fontSize: { xs: '0.8rem', md: '0.85rem' }, color: theme.palette.primary.contrastText }}>
                                    Saturday: 10:00 AM - 4:00 PM
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9, fontSize: { xs: '0.8rem', md: '0.85rem' }, color: theme.palette.primary.contrastText }}>
                                    Sunday: By Appointment
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* Success/Error Messages */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={6000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>

            <Snackbar
                open={showError}
                autoHideDuration={6000}
                onClose={() => setShowError(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setShowError(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to send message. Please try again.
                </Alert>
            </Snackbar>
        </>
    );
}