import React from 'react'

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'



const educationData = [

    {

        year: '2015 – 2017',

        degree: 'MCA',

        institution: 'Gujarat University',

        location: 'Surat, India',

        level: 'Postgraduate',

        accent: '#378ADD',

        badgeBg: 'rgba(55,138,221,0.12)',

        badgeColor: '#7ec8ff',

        borderColor: 'rgba(55,138,221,0.35)',

    },

    {

        year: '2012 – 2015',

        degree: 'BCA',

        institution: 'VNSGU',

        location: 'Surat, India',

        level: 'Undergraduate',

        accent: '#1D9E75',

        badgeBg: 'rgba(29,158,117,0.12)',

        badgeColor: '#4dd4a8',

        borderColor: 'rgba(29,158,117,0.35)',

    },

    {

        year: '2012',

        degree: 'HSC',

        institution: 'Gujarat Board',

        location: 'Surat, India',

        level: 'Higher Secondary',

        accent: '#BA7517',

        badgeBg: 'rgba(186,117,23,0.12)',

        badgeColor: '#f0a030',

        borderColor: 'rgba(186,117,23,0.35)',

    },

    {

        year: '2010',

        degree: 'SSC',

        institution: 'Gujarat Board',

        location: 'Surat, India',

        level: 'Secondary',

        accent: '#D4537E',

        badgeBg: 'rgba(212,83,126,0.12)',

        badgeColor: '#f07aaa',

        borderColor: 'rgba(212,83,126,0.35)',

    },

]



/* ── Location pin SVG ── */

const LocationIcon = ({ color }) => (

    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>

        <circle cx="6" cy="5" r="2.2" stroke={color} strokeWidth="1.3" />

        <path

            d="M6 1C3.79 1 2 2.79 2 5c0 3 4 6.5 4 6.5S10 8 10 5c0-2.21-1.79-4-4-4z"

            stroke={color}

            strokeWidth="1.3"

            fill="none"

        />

    </svg>

)



/* ── Shared card used in both layouts ── */

const EduCard = ({ edu, accentSide = 'left' }) => (

    <Box

        sx={{

            position: 'relative',

            overflow: 'hidden',

            background: 'rgba(255,255,255,0.03)',

            border: `0.5px solid ${edu.borderColor}`,

            borderRadius: '12px',

            padding:

                accentSide === 'right'

                    ? { xs: '16px 16px 16px 18px', sm: '20px 26px 20px 20px' }

                    : { xs: '16px 16px 16px 18px', sm: '20px 20px 20px 26px' },

            transition: 'border-color 0.25s, background 0.25s',

            cursor: 'default',

            width: '100%',

            '&:hover': {

                background: 'rgba(255,255,255,0.055)',

                borderColor: edu.accent,

                '& .cab': { opacity: 1 },

                '& .cglow': { opacity: 0.08 },

            },

        }}

    >

        {/* Accent bar */}

        <Box

            className="cab"

            sx={{

                position: 'absolute',

                ...(accentSide === 'right'

                    ? { right: 0, borderRadius: '2px 0 0 2px' }

                    : { left: 0, borderRadius: '0 2px 2px 0' }),

                top: '10px',

                height: 'calc(100% - 20px)',

                width: '3px',

                background: edu.accent,

                opacity: 0.55,

                transition: 'opacity 0.25s',

            }}

        />



        {/* Radial glow on hover */}

        <Box

            className="cglow"

            sx={{

                position: 'absolute',

                inset: 0,

                background: `radial-gradient(ellipse at ${accentSide === 'right' ? 'top right' : 'top left'}, ${edu.accent}, transparent 65%)`,

                opacity: 0.025,

                transition: 'opacity 0.3s',

                pointerEvents: 'none',

                zIndex: 0,

            }}

        />



        <Box sx={{ position: 'relative', zIndex: 1 }}>

            {/* Level badge */}

            <Box

                sx={{

                    display: 'inline-block',

                    fontSize: { xs: '9px', sm: '10px' },

                    fontWeight: '500',

                    letterSpacing: '0.05em',

                    padding: { xs: '2px 8px', sm: '3px 10px' },

                    borderRadius: '20px',

                    background: edu.badgeBg,

                    color: edu.badgeColor,

                    mb: '8px',

                }}

            >

                {edu.level}

            </Box>



            {/* Year */}

            <Typography

                sx={{

                    fontSize: { xs: '10px', sm: '11px' },

                    fontWeight: '500',

                    letterSpacing: '0.1em',

                    color: edu.accent,

                    mb: '5px',

                }}

            >

                {edu.year}

            </Typography>



            {/* Degree */}

            <Typography

                sx={{

                    fontSize: { xs: '16px', sm: '18px', md: '20px' },

                    fontWeight: '700',

                    color: '#fff',

                    textTransform: 'uppercase',

                    letterSpacing: '0.04em',

                    mb: '3px',

                    lineHeight: 1.2,

                }}

            >

                {edu.degree}

            </Typography>



            {/* Institution */}

            <Typography

                sx={{

                    fontSize: { xs: '13px', sm: '14px' },

                    fontWeight: '500',

                    color: 'rgba(255,255,255,0.5)',

                    mb: '10px',

                }}

            >

                {edu.institution}

            </Typography>



            {/* Location */}

            <Box

                sx={{

                    display: 'flex',

                    alignItems: 'center',

                    gap: '5px',

                    color: 'rgba(255,255,255,0.28)',

                    fontSize: '12px',

                }}

            >

                <LocationIcon color="rgba(255,255,255,0.28)" />

                {edu.location}

            </Box>

        </Box>

    </Box>

)



/* ─────────────────────────────────────────

   MOBILE layout  (xs / sm)

   Left-side vertical line with dots

───────────────────────────────────────── */

const MobileTimeline = () => (

    <Box sx={{ position: 'relative', pl: { xs: '28px', sm: '36px' } }}>

        {/* Vertical line */}

        <Box

            sx={{

                position: 'absolute',

                left: { xs: '6px', sm: '8px' },

                top: '14px',

                bottom: '14px',

                width: '1px',

                background:

                    'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 8%, rgba(255,255,255,0.1) 92%, transparent)',

            }}

        />



        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '16px', sm: '20px' } }}>

            {educationData.map((edu, index) => (

                <Box key={index} sx={{ position: 'relative' }}>

                    {/* Dot */}

                    <Box

                        sx={{

                            position: 'absolute',

                            left: { xs: '-24px', sm: '-30px' },

                            top: '20px',

                            width: { xs: '10px', sm: '12px' },

                            height: { xs: '10px', sm: '12px' },

                            borderRadius: '50%',

                            background: edu.accent,

                            boxShadow: `0 0 8px ${edu.accent}66`,

                        }}

                    />

                    <EduCard edu={edu} accentSide="left" />

                </Box>

            ))}

        </Box>

    </Box>

)



/* ─────────────────────────────────────────

   DESKTOP layout  (md+)

   Center alternating timeline

───────────────────────────────────────── */

const DesktopTimeline = () => (

    <Box sx={{ position: 'relative' }}>

        {/* Center line */}

        <Box

            sx={{

                position: 'absolute',

                left: '50%',

                top: 0,

                bottom: 0,

                width: '1px',

                background:

                    'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.08) 85%, transparent)',

                transform: 'translateX(-50%)',

                zIndex: 0,

            }}

        />



        <Box

            sx={{

                display: 'flex',

                flexDirection: 'column',

                gap: '32px',

                position: 'relative',

                zIndex: 1,

            }}

        >

            {educationData.map((edu, index) => {

                const isRight = index % 2 !== 0

                return (

                    <Box

                        key={index}

                        sx={{

                            display: 'flex',

                            alignItems: 'center',

                            flexDirection: isRight ? 'row-reverse' : 'row',

                        }}

                    >

                        {/* Card */}

                        <Box sx={{ flex: 1, px: { md: '24px', lg: '32px' } }}>

                            <EduCard edu={edu} accentSide={isRight ? 'right' : 'left'} />

                        </Box>



                        {/* Center dot */}

                        <Box

                            sx={{

                                flexShrink: 0,

                                display: 'flex',

                                alignItems: 'center',

                                justifyContent: 'center',

                                width: '20px',

                            }}

                        >

                            <Box

                                sx={{

                                    width: '13px',

                                    height: '13px',

                                    borderRadius: '50%',

                                    background: edu.accent,

                                    boxShadow: `0 0 12px ${edu.accent}88`,

                                }}

                            />

                        </Box>



                        {/* Empty opposite half */}

                        <Box sx={{ flex: 1, px: { md: '24px', lg: '32px' } }} />

                    </Box>

                )

            })}

        </Box>

    </Box>

)



/* ─────────────────────────────────────────

   MAIN COMPONENT

───────────────────────────────────────── */

const MyEducation = () => {

    const theme = useTheme()

    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'))



    return (

        <Box

            sx={{

                position: 'relative',

                zIndex: '1',

                background: '#0f1217',

                padding: { lg: '100px 0', md: '80px 0', sm: '60px 0', xs: '50px 0' },

            }}

        >

            <Container maxWidth="lg">



                {/* ── Header ── */}

                <Box

                    sx={{

                        textAlign: 'center',

                        mb: { lg: '70px', md: '60px', sm: '50px', xs: '36px' },

                    }}

                >

                    <Typography

                        sx={{

                            fontFamily: '"DM Mono", monospace',

                            fontSize: '12px',

                            letterSpacing: '0.2em',

                            color: '#555',

                            textTransform: 'uppercase',

                            marginBottom: '16px',

                            display: 'block',

                        }}

                    >

                        Academic Journey

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

                            Education

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



                {/* ── Timeline switches by breakpoint ── */}

                {isMobileOrTablet ? <MobileTimeline /> : <DesktopTimeline />}



            </Container>

        </Box>

    )

}



export default MyEducation