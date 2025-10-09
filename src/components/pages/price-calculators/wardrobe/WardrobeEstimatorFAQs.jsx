import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    useTheme,
} from '@mui/material';
import { ExpandMore, QuestionAnswer } from '@mui/icons-material';

export default function WardrobeEstimatorFAQs() {
    const theme = useTheme();

    // Wardrobe Estimator FAQ data
    const wardrobeEstimatorFAQs = [
        {
            id: 'wardrobe-faq-1',
            question: 'Will the wardrobe price calculator throw up the cost based on location?',
            answer:
                'Locations may be different, but the modular wardrobe price remains the same! All Livspace products have the same cost across India.',
        },
        {
            id: 'wardrobe-faq-2',
            question: 'How will the wardrobe price calculator make assumptions on materials, accessories & other products?',
            answer:
                "It's an easy process. Let's tell you how. Our modular wardrobe price calculator uses a smart algorithm that auto-calculates the cost of a modular wardrobe. This is usually done by mapping it to the most essential units that a functional wardrobe would require. Our expertise helps us understand the Indian landscape thoroughly and we know just the kind of basic units you need to ensure a smooth experience.",
        },
        {
            id: 'wardrobe-faq-3',
            question: 'How accurate is this? Can I expect my designer to share a similar quote?',
            answer:
                "Don't worry, our wardrobe price calculator uses a smart algorithm to calculate the wardrobe cost in real time, making the quote fairly precise. No doubts there, we promise! Moreover, the essential units available for selection are based on price points and your convenience. So the cost our wardrobe price estimator calculates would be similar to the quote you might receive after a consultation with your designer. Apart from your requirements, the final quote for the modular wardrobe also depends on the exact site measurements, whose area can impact pricing. Having considered these factors, the quote shared by our wardrobe price calculator can certainly be considered for any directional pricing guide.",
        },
        {
            id: 'wardrobe-faq-4',
            question: 'What if I want to change the style of my wardrobe? How will the estimator factor in the cost of demolition?',
            answer:
                'The style of a wardrobe can certainly be modified at your convenience. We understand such requirements and to solve this, we offer demolition services to alter the style of the wardrobe at an extra cost. This cost will depend on the style, finish type, core material, and other add-ons or accessories that you choose.',
        },
        {
            id: 'wardrobe-faq-5',
            question: 'Can I customise my wardrobe and get a cost basis?',
            answer:
                "You can definitely customise it, but our expert team would be happy to design your modular wardrobe just the way you want it. Customization is usually applicable to the primary guiding factors for any modular wardrobe selection - core materials, finish types, and accessories. Once you are done customising, our team brings their years of expertise in providing modular design solutions to create what's best for you and your lifestyle while implementing your choices.",
        },
    ];

    return (
        <Box sx={{ mt: 8, px: { xs: 2, md: 20 } }}>
            {/* Title Section */}
            <Box sx={{ textAlign: 'left', mb: 4 }}>
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                >
                    FAQs
                </Typography>

                <Chip
                    icon={<QuestionAnswer />}
                    label="Wardrobe Calculator FAQs"
                    color="primary"
                    variant="outlined"
                    sx={{ mb: 3 }}
                />
            </Box>

            {/* FAQ Accordions */}
            <Box sx={{ width: '100%' }}>
                {wardrobeEstimatorFAQs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        sx={{
                            mb: 2,
                            '&:before': { display: 'none' },
                            boxShadow: theme.shadows[2],
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                '&:hover': {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                backgroundColor: theme.palette.background.default,
                                borderTop: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ lineHeight: 1.7 }}
                            >
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            {/* Contact CTA */}
            <Box sx={{ textAlign: 'center', py: 6, mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Still have questions?
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}
                >
                    Our wardrobe design experts are here to help you with any specific
                    questions about your modular wardrobe project.
                </Typography>
                <Chip
                    label="Contact Us"
                    color="primary"
                    variant="outlined"
                    sx={{
                        cursor: 'pointer',
                        fontWeight: 500,
                    }}
                    onClick={() => (window.location.href = '/contact')}
                />
            </Box>
        </Box>
    );
}
