import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';

const cards = [
    {
        id: 1,
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 18v4M12 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9 9.5C9 9.5 7 11 7 13c0 2 2 3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M23 9.5C23 9.5 25 11 25 13c0 2-2 3-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        number: '01',
        title: 'Web Research',
        tagline: 'Strategy before design.',
        description: 'I analyze business goals, target audiences, competitors, and industry trends to build a strong foundation for every project. This research-driven approach ensures the design is purposeful, user-focused, and aligned with real-world needs.',
        accent: '#0abf8e',
        gradFrom: 'hsl(162deg 90% 6%)',
        gradTo: 'hsl(162deg 60% 20%)',
        borderGrad: 'linear-gradient(160deg, hsl(162deg 92% 38%) 0%, transparent 60%)',
    },
    {
        id: 2,
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 28h12M16 20v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 10l4 4-4 4M18 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        number: '02',
        title: 'UI/UX Design',
        tagline: 'Interfaces that feel alive.',
        description: 'I design intuitive user experiences and visually engaging interfaces that guide users effortlessly. Every layout, interaction, and flow is crafted to improve usability, clarity, and conversion while maintaining a modern aesthetic.',
        accent: '#e5997d',
        gradFrom: 'hsl(20deg 50% 6%)',
        gradTo: 'hsl(20deg 50% 22%)',
        borderGrad: 'linear-gradient(200deg, hsl(20deg 80% 65%) 0%, transparent 60%)',
    },
    {
        id: 3,
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 9h26" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="7" cy="7" r="1" fill="currentColor" />
                <circle cx="11" cy="7" r="1" fill="currentColor" />
                <circle cx="15" cy="7" r="1" fill="currentColor" />
                <path d="M9 15l3 3-3 3M14 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 23l5 4h13l5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        number: '03',
        title: 'Web Design',
        tagline: 'Beauty meets function.',
        description: 'I create clean, responsive, and visually compelling website designs that reflect brand identity. My designs balance creativity with consistency, ensuring your website looks professional and performs seamlessly across all devices.',
        accent: '#7b6af5',
        gradFrom: 'hsl(248deg 50% 6%)',
        gradTo: 'hsl(248deg 40% 22%)',
        borderGrad: 'linear-gradient(160deg, hsl(248deg 85% 68%) 0%, transparent 60%)',
    },
    {
        id: 4,
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10l-3 6 3 6M26 10l3 6-3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 26l8-20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        number: '04',
        title: 'Web Development',
        tagline: 'Code that scales.',
        description: 'I transform designs into fast, functional, and scalable websites using modern technologies. With clean code and performance-focused development, I ensure smooth interactions, responsiveness, and long-term maintainability.',
        accent: '#4db8d4',
        gradFrom: 'hsl(192deg 60% 6%)',
        gradTo: 'hsl(192deg 50% 20%)',
        borderGrad: 'linear-gradient(200deg, hsl(192deg 75% 55%) 0%, transparent 60%)',
    },
];

const SpecCard = ({ card, index }) => {
    const [hovered, setHovered] = useState(true);
    const isOffset = index % 2 !== 0;

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(true)}
            sx={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                padding: '2px',
                marginTop: { lg: isOffset ? '48px' : '0', md: isOffset ? '48px' : '0', sm: '0', xs: '0' },
                cursor: 'default',
                '&::before': {
                    content: "''",
                    position: 'absolute',
                    inset: 0,
                    background: card.borderGrad,
                    borderRadius: '4px',
                    opacity: hovered ? 1 : 0.5,
                    transition: 'opacity 0.5s ease',
                    zIndex: 0,
                },
            }}
        >
            {/* inner card */}
            <Box sx={{
                position: 'relative',
                zIndex: 1,
                background: hovered
                    ? `linear-gradient(160deg, ${card.gradFrom} 0%, ${card.gradTo} 100%)`
                    : '#080b0f',
                borderRadius: '3px',
                padding: { lg: '36px 28px', md: '32px 24px', sm: '28px 20px', xs: '24px 16px' },
                minHeight: { lg: '340px', md: '300px', sm: 'auto', xs: 'auto' },
                transition: 'background 0.6s ease',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* top row: number + icon */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                    <Typography sx={{
                        fontFamily: '"DM Mono", monospace',
                        fontSize: '13px',
                        color: card.accent,
                        letterSpacing: '0.08em',
                        opacity: 0.8,
                    }}>
                        {card.number}
                    </Typography>
                    <Box sx={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '4px',
                        background: `${card.accent}18`,
                        border: `1px solid ${card.accent}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.accent,
                        transition: 'all 0.4s ease',
                        transform: hovered ? 'rotate(-6deg) scale(1.08)' : 'rotate(0deg) scale(1)',
                    }}>
                        {card.icon}
                    </Box>
                </Box>

                {/* title + tagline */}
                <Box sx={{ marginBottom: '16px' }}>
                    <Typography sx={{
                        color: '#fff',
                        fontSize: { lg: '22px', md: '20px', sm: '20px', xs: '18px' },
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        lineHeight: 1.2,
                        marginBottom: '6px',
                    }}>
                        {card.title}
                    </Typography>
                    <Typography sx={{
                        color: card.accent,
                        fontSize: '13px',
                        fontFamily: '"DM Mono", monospace',
                        opacity: 0.85,
                    }}>
                        {card.tagline}
                    </Typography>
                </Box>

                {/* divider */}
                <Box sx={{
                    width: hovered ? '100%' : '32px',
                    height: '1px',
                    background: `linear-gradient(90deg, ${card.accent}80, transparent)`,
                    marginBottom: '16px',
                    transition: 'width 0.5s ease',
                }} />

                {/* description */}
                <Typography sx={{
                    color: hovered ? 'rgba(255,255,255,0.85)' : '#6b7280',
                    fontSize: '14.5px',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    transition: 'color 0.4s ease',
                    flex: 1,
                }}>
                    {card.description}
                </Typography>

                {/* corner arrow */}
                <Box sx={{
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    opacity: hovered ? 1 : 0,
                    transform: hovered ? 'translate(0, 0)' : 'translate(6px, 6px)',
                    transition: 'all 0.4s ease',
                }}>
                    <Box sx={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: `1px solid ${card.accent}60`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: card.accent,
                    }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const WhatIDo = () => {
    return (
        <>
            {/* Font imports */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

            <Box sx={{
                background: '#080b0f',
                padding: { lg: '120px 0', md: '100px 0', sm: '70px 0', xs: '60px 0' },
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: "''",
                    position: 'absolute',
                    top: '-200px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(10,191,142,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                },
            }}>
                <Container maxWidth="xl">

                    {/* Heading */}
                    <Box sx={{ textAlign: 'center', marginBottom: { lg: '80px', md: '60px', sm: '48px', xs: '40px' } }}>
                        {/* eyebrow */}
                        <Typography sx={{
                            fontFamily: '"DM Mono", monospace',
                            fontSize: '12px',
                            letterSpacing: '0.2em',
                            color: '#555',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            display: 'block',
                        }}>
                            What I Do
                        </Typography>

                        <Typography variant="h2" sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { lg: '54px', md: '46px', sm: '38px', xs: '30px' },
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            color: 'transparent',
                            WebkitTextStroke: '1px #de9b7e',
                        }}>
                            My{' '}
                            <Box component="span" sx={{
                                position: 'relative',
                                color: 'transparent',
                                WebkitTextStroke: '1px #0abf8e',
                            }}>
                                Specializations
                            </Box>
                        </Typography>

                        {/* dash decorations */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}>
                            {[28, 14, 28].map((w, i) => (
                                <Box key={i} sx={{
                                    width: `${w}px`,
                                    height: '2px',
                                    borderRadius: '2px',
                                    background: i === 1 ? '#e5997d' : '#0abf8e',
                                }} />
                            ))}
                        </Box>
                    </Box>

                    {/* Cards grid */}
                    <Grid2 container spacing={{ lg: 3, md: 2.5, sm: 2, xs: 2 }}>
                        {cards.map((card, i) => (
                            <Grid2 key={card.id} size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                                <SpecCard card={card} index={i} />
                            </Grid2>
                        ))}
                    </Grid2>

                </Container>
            </Box>
        </>
    );
};

export default WhatIDo;