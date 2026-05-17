import { Box, Container, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ShapeCircle from '../../assets/image/section-bg-shape-6.png'

const experienceData = [
    {
        company: 'Logix Built Solutions Limited',
        role: 'Web Design Lead',
        period: '2020 – Present',
        badge: 'Current',
        badgeBg: 'rgba(229,153,125,0.13)',
        badgeColor: '#e5997d',
        accent: '#e5997d',
        barWidth: '100%',
        iconBg: 'rgba(229,153,125,0.1)',
    },
    {
        company: 'Tecocraft Infusion PVT LTD.',
        role: 'Sr. Web Designer',
        period: '2019 – 2020',
        badge: '1 yr',
        badgeBg: 'rgba(55,138,221,0.1)',
        badgeColor: '#7ec8ff',
        accent: '#378ADD',
        barWidth: '14%',
        iconBg: 'rgba(55,138,221,0.1)',
    },
    {
        company: 'Deep Technologies',
        role: 'Web Designer',
        period: '2018 – 2019',
        badge: '1 yr',
        badgeBg: 'rgba(29,158,117,0.1)',
        badgeColor: '#4dd4a8',
        accent: '#1D9E75',
        barWidth: '14%',
        iconBg: 'rgba(29,158,117,0.1)',
    },
]

const BriefcaseIcon = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
)



const MyExperience = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))



    return (

        <>

            <Box sx={{

                background: '#0f1217',

                padding: { lg: '100px 0', md: '80px 0', sm: '60px 0', xs: '50px 0' },

                position: 'relative',

                zIndex: '1',

                '&:after': {

                    content: "''",

                    backgroundImage: `url(${ShapeCircle})`,

                    width: '250px',

                    height: '250px',

                    display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },

                    position: 'absolute',

                    top: '-150px',

                    left: '60px',

                    zIndex: '-1',

                    opacity: '0.1',

                    backgroundPosition: 'left top',

                    backgroundSize: 'contain',

                    backgroundRepeat: 'no-repeat',

                    animation: 'stonerotate 10s infinite linear',

                    animationDirection: 'alternate',

                },

            }}>

                <Container maxWidth="lg">

                    <Grid2 container spacing={{ xs: 4, sm: 4, md: 4, lg: 6 }} alignItems="flex-start">



                        {/* ── Left: Stat blob + mini cards ── */}

                        <Grid2 size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>

                            <Box sx={{

                                display: 'flex',

                                flexDirection: 'column',

                                alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },

                                gap: '16px',

                            }}>



                                {/* Years blob */}

                                <Box sx={{

                                    background: 'linear-gradient(180deg, #083537 0%, #000 100%)',

                                    border: '0.5px solid rgba(29,158,117,0.22)',

                                    borderRadius: '1000px',

                                    padding: {

                                        lg: '60px 50px 56px',

                                        md: '56px 44px 50px',

                                        sm: '56px 44px 50px',

                                        xs: '44px 36px 40px',

                                    },

                                    textAlign: 'center',

                                    width: { lg: '100%', md: '100%', sm: '320px', xs: '240px' },

                                    position: 'relative',

                                    overflow: 'hidden',

                                    '&:before': {

                                        content: "''",

                                        position: 'absolute',

                                        top: '-30%',

                                        left: '50%',

                                        transform: 'translateX(-50%)',

                                        width: '140%',

                                        height: '60%',

                                        background: 'radial-gradient(ellipse, rgba(7,180,187,0.12) 0%, transparent 70%)',

                                        pointerEvents: 'none',

                                    },

                                }}>

                                    <Typography sx={{

                                        color: '#e5997d',

                                        fontWeight: '700',

                                        fontSize: { lg: '96px', md: '88px', sm: '80px', xs: '72px' },

                                        lineHeight: 1,

                                        letterSpacing: '-3px',

                                    }}>

                                        8+

                                    </Typography>

                                    <Typography sx={{

                                        color: 'rgba(255,255,255,0.7)',

                                        fontSize: { lg: '20px', md: '18px', sm: '18px', xs: '16px' },

                                        lineHeight: 1.5,

                                        mt: '10px',

                                    }}>

                                        Years of<br />Experience

                                    </Typography>

                                </Box>



                                {/* Mini stat cards */}

                                <Box sx={{

                                    display: 'flex',

                                    flexDirection: { xs: 'row', sm: 'row', md: 'column' },

                                    gap: '10px',

                                    width: { lg: '100%', md: '100%', sm: '320px', xs: '100%' },

                                    justifyContent: 'center',

                                }}>

                                    {[

                                        { dot: '#e5997d', val: '3', lbl: 'Companies' },

                                        { dot: '#378ADD', val: '80+', lbl: 'Projects delivered' },

                                        { dot: '#1D9E75', val: 'Lead', lbl: 'Current role level' },

                                    ].map((s, i) => (

                                        <Box key={i} sx={{

                                            flex: { xs: 1, sm: 1, md: 'unset' },

                                            background: 'rgba(255,255,255,0.03)',

                                            border: '0.5px solid rgba(255,255,255,0.07)',

                                            borderRadius: '10px',

                                            padding: { xs: '12px 10px', sm: '14px 16px' },

                                            display: 'flex',

                                            alignItems: 'center',

                                            gap: '12px',

                                            transition: 'border-color 0.2s, background 0.2s',

                                            '&:hover': {

                                                background: 'rgba(255,255,255,0.055)',

                                                borderColor: `${s.dot}55`,

                                            },

                                        }}>

                                            <Box sx={{

                                                width: '8px',

                                                height: '8px',

                                                borderRadius: '50%',

                                                background: s.dot,

                                                flexShrink: 0,

                                                boxShadow: `0 0 6px ${s.dot}88`,

                                            }} />

                                            <Box>

                                                <Typography sx={{

                                                    fontSize: { xs: '16px', sm: '18px' },

                                                    fontWeight: '700',

                                                    color: '#fff',

                                                    lineHeight: 1,

                                                }}>

                                                    {s.val}

                                                </Typography>

                                                <Typography sx={{

                                                    fontSize: '11px',

                                                    color: 'rgba(255,255,255,0.35)',

                                                    mt: '2px',

                                                    letterSpacing: '0.04em',

                                                }}>

                                                    {s.lbl}

                                                </Typography>

                                            </Box>

                                        </Box>

                                    ))}

                                </Box>

                            </Box>

                        </Grid2>



                        {/* ── Right: Header + Job list ── */}

                        <Grid2 size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>

                            <Box sx={{

                                paddingLeft: { lg: '40px', md: '24px', sm: '0', xs: '0' },

                            }}>



                                {/* Header */}

                                <Box sx={{

                                    textAlign: { xs: 'center', sm: 'center', md: 'left' },

                                    mb: { lg: '48px', md: '40px', sm: '36px', xs: '28px' },

                                }}>

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

                                        Career Timeline

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

                                            Experience

                                        </Box>

                                    </Typography>

                                    {/* dash decorations */}

                                    <Box sx={{

                                        display: 'flex',

                                        alignItems: 'center',

                                        justifyContent: { lg: 'start', md: 'start', sm: 'center', xs: 'center' },

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



                                {/* Job list */}

                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                    {experienceData.map((job, index) => (

                                        <Box

                                            key={index}

                                            sx={{

                                                display: 'flex',

                                                alignItems: 'flex-start',

                                                gap: { xs: '10px', sm: '16px' },

                                                padding: index === 0

                                                    ? { xs: '0 0 20px', sm: '0 0 24px' }

                                                    : { xs: '20px 0', sm: '24px 0' },

                                                borderBottom: index === experienceData.length - 1

                                                    ? 'none'

                                                    : '0.5px solid rgba(255,255,255,0.07)',

                                                position: 'relative',

                                                cursor: 'default',

                                                borderRadius: '8px',

                                                transition: 'padding-left 0.3s',

                                                '&:hover': {

                                                    '& .job-company': {

                                                        color: job.accent,

                                                    },

                                                    '& .job-bar': {

                                                        opacity: 1,

                                                    },

                                                    '& .job-icon-box': {

                                                        borderColor: `${job.accent}55`,

                                                    },

                                                },

                                            }}

                                        >

                                            {/* Icon */}

                                            <Box className="job-icon-box" sx={{

                                                width: { xs: '33px', sm: '42px' },

                                                height: { xs: '33px', sm: '42px' },

                                                borderRadius: '10px',

                                                background: job.iconBg,

                                                border: `0.5px solid rgba(255,255,255,0.07)`,

                                                display: 'flex',

                                                alignItems: 'center',

                                                justifyContent: 'center',

                                                flexShrink: 0,

                                                mt: '2px',

                                                transition: 'border-color 0.25s',

                                            }}>

                                                <BriefcaseIcon color={job.accent} />

                                            </Box>



                                            {/* Body */}

                                            <Box sx={{ flex: 1, minWidth: 0 }}>

                                                {/* Top row */}

                                                <Box sx={{

                                                    display: 'flex',

                                                    alignItems: 'flex-start',

                                                    justifyContent: 'space-between',

                                                    gap: '8px',

                                                    mb: '4px',

                                                    flexWrap: { xs: 'wrap', sm: 'nowrap' },

                                                }}>

                                                    <Typography className="job-company" sx={{

                                                        fontSize: { xs: '14px', sm: '16px', md: '17px' },

                                                        fontWeight: '600',

                                                        color: '#fff',

                                                        transition: 'color 0.25s',

                                                        lineHeight: 1.3,

                                                    }}>

                                                        {job.company}

                                                    </Typography>



                                                    <Box sx={{

                                                        display: 'flex',

                                                        flexDirection: 'column',

                                                        alignItems: 'flex-end',

                                                        flexShrink: 0,

                                                        gap: '4px',

                                                    }}>

                                                        <Typography sx={{

                                                            fontSize: '12px',

                                                            color: 'rgba(255,255,255,0.3)',

                                                            whiteSpace: 'nowrap',

                                                        }}>

                                                            {job.period}

                                                        </Typography>

                                                        <Box sx={{

                                                            display: 'inline-block',

                                                            fontSize: '10px',

                                                            fontWeight: '500',

                                                            padding: '2px 8px',

                                                            borderRadius: '20px',

                                                            background: job.badgeBg,

                                                            color: job.badgeColor,

                                                        }}>

                                                            {job.badge}

                                                        </Box>

                                                    </Box>

                                                </Box>



                                                {/* Role */}

                                                <Typography sx={{

                                                    fontSize: '13px',

                                                    color: 'rgba(255,255,255,0.42)',

                                                    mb: '10px',

                                                }}>

                                                    {job.role}

                                                </Typography>



                                                {/* Tenure bar */}

                                                <Box sx={{

                                                    height: '2px',

                                                    background: 'rgba(255,255,255,0.06)',

                                                    borderRadius: '1px',

                                                    overflow: 'hidden',

                                                }}>

                                                    <Box className="job-bar" sx={{

                                                        width: job.barWidth,

                                                        height: '100%',

                                                        background: job.accent,

                                                        borderRadius: '1px',

                                                        opacity: 0.6,

                                                        transition: 'opacity 0.25s',

                                                    }} />

                                                </Box>

                                            </Box>

                                        </Box>

                                    ))}

                                </Box>

                            </Box>

                        </Grid2>



                    </Grid2>

                </Container>

            </Box>

        </>

    )

}



export default MyExperience