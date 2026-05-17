import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Button, Grid2, Typography, Chip } from '@mui/material';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpaIcon from '@mui/icons-material/Spa';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Yaoweliness from '../../assets/image/yaoweliness.png';
import Bookfreelancer from '../../assets/image/bookfreelancer.png';
import Nextmatchup from '../../assets/image/nextmatchup.png';
import Vinhuset from '../../assets/image/vinhuset.png';
import Rosswaldhuette from '../../assets/image/rosswaldhuette.png';
import Longlife from '../../assets/image/longlife.png';

const MyRecentWorks = () => {
    const [hoveredProject, setHoveredProject] = useState(null)
    const [visibleProjects, setVisibleProjects] = useState(new Set())
    const projectRefs = useRef([])
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleProjects((prev) => new Set([...prev, entry.target.dataset.projectId]))
                    }
                })
            },
            { threshold: 0.1 }
        )
        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })
        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref)
            })
        }
    }, [])

    const projects = [
        {
            id: 'yaowellness',
            title: 'Yao Wellness',
            description: 'Yao Wellness blends Traditional Chinese Massage techniques with modern wellness practices to create a calm, effective, and approachable experience. Our goal is simple: help you feel better in your body and more balanced in your life.',
            image: Yaoweliness,
            url: 'https://yaowellness.com',
            category: 'Wellness Platform',
            icon: <SpaIcon />,
            tech: ['React', 'Node.js', 'MongoDB'],
            color: '#0abf8e'
        },
        {
            id: 'bookfreelancer',
            title: 'Book Freelancer',
            description: 'Book Freelancer is a digital platform designed to connect individuals and businesses with independent service providers across a wide range of lifestyle, hospitality, real estate and professional industries.',
            image: Bookfreelancer,
            url: 'https://bookfreelancer.net/',
            category: 'Service Marketplace',
            icon: <WebIcon />,
            tech: ['Vue.js', 'Laravel', 'MySQL'],
            color: '#e5997d'
        },
        {
            id: 'rosswaldhuette',
            title: 'Rosswaldhuette',
            description: 'We look forward to your visit! The Hasenauer family and the Rosswaldhütte team. An authentic Alpine experience with breathtaking mountain views and traditional Austrian hospitality.',
            image: Rosswaldhuette,
            url: 'https://www.rosswaldhuette.at/de/',
            category: 'Hospitality',
            icon: <SportsBarIcon />,
            tech: ['WordPress', 'PHP', 'MySQL'],
            color: '#7c3aed'
        },
        {
            id: 'longlife',
            title: 'Longlife',
            description: 'Thanks to its uniquely high content of natural magnesium, Long Life mineral water serves as a valuable source of energy and increases performance in work, school and sports.',
            image: Longlife,
            url: 'https://www.longlife.at/de/',
            category: 'E-commerce',
            icon: <ShoppingCartIcon />,
            tech: ['Shopify', 'Liquid', 'React'],
            color: '#f59e0b'
        },
        {
            id: 'nextmatchup',
            title: 'Nextmatchup',
            description: 'We currently host meetups in 11 cities, with more cities being added as our community grows. Whether you are looking to spark a romantic connection, share a meal through Dinner with Strangers, or exchange ideas at a Meetup with Creatives.',
            image: Nextmatchup,
            url: 'https://nextmatchup.com/',
            category: 'Social Platform',
            icon: <CodeIcon />,
            tech: ['React', 'Node.js', 'PostgreSQL'],
            color: '#06b6d4'
        },
        {
            id: 'vinhuset',
            title: 'Vinhuset',
            description: 'At Vinhuset, it\'s not just about wine. It\'s about creating community, coziness and small moments of luxury in everyday life.',
            image: Vinhuset,
            url: 'https://vinhuset.dk/',
            category: 'E-commerce',
            icon: <ShoppingCartIcon />,
            tech: ['Shopify', 'Liquid', 'JavaScript'],
            color: '#ec4899'
        }
    ]

    return (
        <>
            <Box id="projects" sx={{
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0d1117 100%)',
                padding: { lg: '120px 0px', md: '100px 0px', sm: '80px 0px', xs: '60px 0px' },
                overflow: 'hidden',
            }}>

                {/* Background decorative elements */}
                <Box className="morph-shape" sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(45deg, rgba(10,191,142,0.05), rgba(229,153,125,0.05))',
                    filter: 'blur(60px)',
                    animationDelay: '1s',
                }} />
                
                <Box className="morph-shape" sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(10,191,142,0.05))',
                    filter: 'blur(40px)',
                    animationDelay: '2s',
                }} />

                {/* Section Header */}
                <Container maxWidth="lg">
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
                            What I've Built
                        </Typography>

                        <Typography variant="h2" sx={{
                           fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { lg: '54px', md: '46px', sm: '38px', xs: '30px' },
                            fontWeight: 700,
                            color: 'transparent',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            WebkitTextStroke: '1px #de9b7e',
                        }}>
                            My{' '}
                            <Box component="span" sx={{
                                position: 'relative',
                                color: 'transparent',
                                WebkitTextStroke: '1px #0abf8e',
                            }}>
                                Recent Works
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

                        {/* Description */}
                        <Typography sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { md: '18px', sm: '16px', xs: '15px' },
                            color: 'rgba(255, 255, 255, 0.6)',
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            mx: 'auto',
                            mt: '20px',
                        }}>
                            Explore a curated selection of my latest projects, showcasing innovative design solutions and cutting-edge development across various industries.
                        </Typography>
                    </Box>
                </Container>
                {/* Projects Grid */}
                <Container maxWidth="lg">
                    <Grid2 container spacing={{ lg: 4, md: 3, sm: 3, xs: 2 }}>
                        {projects.map((project, index) => (
                            <Grid2 
                                key={project.id}
                                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                                ref={(el) => (projectRefs.current[index] = el)}
                                data-project-id={project.id}
                                className={`glass-card hero-scale-in ${visibleProjects.has(project.id) ? 'visible' : ''}`}
                                sx={{
                                    opacity: visibleProjects.has(project.id) ? 1 : 0,
                                    transform: visibleProjects.has(project.id) ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'all 0.6s ease-out',
                                    transitionDelay: `${index * 0.1}s`,
                                    border:'0',
                                    backgroundColor:'transparent'
                                }}
                            >
                                <Box
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => window.open(project.url, '_blank')}
                                    sx={{
                                        position: 'relative',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: `1px solid ${project.color}40`,
                                            '& .project-image': {
                                                transform: 'scale(1.05)',
                                            },
                                            '& .project-overlay': {
                                                opacity: 1,
                                            },
                                            '& .launch-icon': {
                                                transform: 'translate(4px, -4px)',
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                >
                                    {/* Project Image */}
                                    <Box className="project-image" sx={{
                                        position: 'relative',
                                        height: { lg: '200px', md: '180px', sm: '160px', xs: '180px' },
                                        overflow: 'hidden',
                                        transition: 'transform 0.5s ease',
                                    }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                        />
                                        
                                        {/* Image Overlay */}
                                        <Box className="project-overlay" sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        }} />

                                        

                                        {/* Launch Icon */}
                                        <Box className="launch-icon" sx={{
                                            position: 'absolute',
                                            top: '16px',
                                            right: '16px',
                                            width: '40px',
                                            height: '40px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            opacity: 0.7,
                                        }}>
                                            <LaunchIcon sx={{ fontSize: '18px', color: '#fff' }} />
                                        </Box>
                                    </Box>

                                    {/* Project Content */}
                                    <Box sx={{
                                        p: { lg: '24px', md: '20px', sm: '18px', xs: '20px' },
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                        {/* Project Title */}
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '18px' },
                                            fontWeight: 700,
                                            color: '#fff',
                                            mb: '12px',
                                            lineHeight: 1.3,
                                            letterSpacing: '-0.01em',
                                        }}>
                                            {project.title}
                                        </Typography>

                                        {/* Project Description */}
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            lineHeight: 1.6,
                                            mb: '16px',
                                            flex: 1,
                                        }}>
                                            {project.description}
                                        </Typography>
                                        {/* View Project Link */}
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: project.color,
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            alignSelf: 'flex-start',
                                            '&:hover': {
                                                gap: '12px',
                                            },
                                        }}>
                                            View Project
                                            <CallMadeRoundedIcon sx={{ fontSize: '16px' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
                {/* CTA Section */}
                <Box className="hero-slide-bottom" sx={{
                    textAlign: 'center',
                    mt: { lg: '80px', md: '60px', sm: '50px', xs: '40px' },
                    animationDelay: '0.8s',
                }}>
                    <Button
                        component="a"
                        href="#"
                        className="btn-cv glow-effect"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 4,
                            py: 2,
                            background: 'linear-gradient(135deg, #e5997d, #d17d5f)',
                            color: '#fff',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '15px',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'none',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 10px 30px rgba(229, 153, 125, 0.4)',
                            },
                        }}
                    >
                        Explore More Projects
                        <CallMadeRoundedIcon sx={{ fontSize: 18 }} />
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default MyRecentWorks