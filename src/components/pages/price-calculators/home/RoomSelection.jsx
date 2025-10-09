import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, IconButton, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const roomTypes = [
    { id: 'livingRoom', label: 'Living Room', defaultCount: 1 },
    { id: 'kitchen', label: 'Kitchen', defaultCount: 1 },
    { id: 'bedroom', label: 'Bedroom', defaultCount: 2 },
    { id: 'bathroom', label: 'Bathroom', defaultCount: 2 },
    { id: 'dining', label: 'Dining', defaultCount: 1 }
];

export default function RoomSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [roomCounts, setRoomCounts] = useState(() => {
        const searchParams = new URLSearchParams(location.search);
        const counts = {};
        roomTypes.forEach(room => {
            counts[room.id] = parseInt(searchParams.get(room.id)) || room.defaultCount;
        });
        return counts;
    });

    const handleIncrement = (roomId) => {
        setRoomCounts(prev => ({
            ...prev,
            [roomId]: Math.min(prev[roomId] + 1, 10) // Max 10 rooms per type
        }));
    };

    const handleDecrement = (roomId) => {
        setRoomCounts(prev => ({
            ...prev,
            [roomId]: Math.max(prev[roomId] - 1, 0) // Min 0 rooms
        }));
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            bhk: searchParams.get('bhk'),
            size: searchParams.get('size'),
            ...roomCounts
        });
        navigate(`/price-calculators/home/calculator/package?${queryParams.toString()}`);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            bhk: searchParams.get('bhk'),
            size: searchParams.get('size')
        });
        navigate(`/price-calculators/home/calculator/bhk?${queryParams.toString()}`);
    };

    const totalRooms = Object.values(roomCounts).reduce((sum, count) => sum + count, 0);

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Select the rooms you'd like us to design
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary
                }}
            >
                To know more about this,{' '}
                <Typography
                    component="span"
                    sx={{
                        color: theme.palette.primary.main,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    click here
                </Typography>
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                {roomTypes.map((room) => (
                    <Card
                        key={room.id}
                        sx={{
                            border: '1px solid',
                            borderColor: theme.palette.grey[300],
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                borderColor: theme.palette.primary.main,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    {room.label}
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2
                                }}>
                                    <IconButton
                                        onClick={() => handleDecrement(room.id)}
                                        disabled={roomCounts[room.id] <= 0}
                                        sx={{
                                            color: theme.palette.primary.main,
                                            border: '1px solid',
                                            borderColor: theme.palette.primary.main,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            minWidth: 40,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        {roomCounts[room.id]}
                                    </Typography>

                                    <IconButton
                                        onClick={() => handleIncrement(room.id)}
                                        disabled={roomCounts[room.id] >= 10}
                                        sx={{
                                            color: theme.palette.primary.main,
                                            border: '1px solid',
                                            borderColor: theme.palette.primary.main,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Total Rooms Summary */}
            <Card sx={{
                backgroundColor: theme.palette.primary.light + '20',
                border: '1px solid',
                borderColor: theme.palette.primary.main + '30',
                mb: 4
            }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.main,
                            mb: 1
                        }}
                    >
                        Total Rooms Selected: {totalRooms}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                    >
                        {Object.entries(roomCounts)
                            .filter(([_, count]) => count > 0)
                            .map(([roomId, count]) => {
                                const room = roomTypes.find(r => r.id === roomId);
                                return `${count} ${room?.label}${count > 1 ? 's' : ''}`;
                            })
                            .join(', ')
                        }
                    </Typography>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={totalRooms === 0}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
