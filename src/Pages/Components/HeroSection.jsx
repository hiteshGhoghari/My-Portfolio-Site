import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Chip, IconButton, Grid2, Container } from '@mui/material';
import { Download, ArrowForward, Code, Palette, Rocket, Star, TrendingUp } from '@mui/icons-material';
import Hitesh from '../../assets/image/hitesh.png';

const HeroSection = () => {
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [particlePositions, setParticlePositions] = useState([]);
    const [countedStats, setCountedStats] = useState({ exp: 0, projects: 0, clients: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const statsRef = useRef(null);
    
    const words = ['Designer', 'Developer', 'Creator', 'Innovator'];
    const targetStats = { exp: 8, projects: 80, clients: 50 };
    const skills = [
        { name: 'UI/UX Design', icon: <Palette />, color: '#e5997d' },
        { name: 'Frontend Dev', icon: <Code />, color: '#0abf8e' },
        { name: 'Innovation', icon: <Rocket />, color: '#7c3aed' },
        { name: 'Excellence', icon: <Star />, color: '#f59e0b' },
    ];
    
    // Generate random particles
    useEffect(() => {
        const particles = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 15,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 10 + 10,
        }));
        setParticlePositions(particles);
    }, []);
    
    // Typing effect
    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        
        const handleTyping = () => {
            setTypedText(prev => {
                if (!isDeleting) {
                    if (prev === currentWord) {
                        setTimeout(() => setIsDeleting(true), 1500);
                        return prev;
                    }
                    return currentWord.slice(0, prev.length + 1);
                } else {
                    if (prev === '') {
                        setIsDeleting(false);
                        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                        return prev;
                    }
                    return currentWord.slice(0, prev.length - 1);
                }
            });
        };
        
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, currentWordIndex, isDeleting, words]);
    
    // Animated counter for stats
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
        
        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);
    
    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const increment = {
            exp: targetStats.exp / steps,
            projects: targetStats.projects / steps,
            clients: targetStats.clients / steps,
        };
        
        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            setCountedStats({
                exp: Math.min(Math.floor(currentStep * increment.exp), targetStats.exp),
                projects: Math.min(Math.floor(currentStep * increment.projects), targetStats.projects),
                clients: Math.min(Math.floor(currentStep * increment.clients), targetStats.clients),
            });
            
            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, duration / steps);
    };
    
    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0d1117 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding:"50px 0",
        }}>
            
            {/* Animated Background Elements */}
            {particlePositions.map((particle) => (
                <Box
                    key={particle.id}
                    className="particle"
                    sx={{
                        position: 'absolute',
                        left: `${particle.left}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: `radial-gradient(circle, rgba(10,191,142,0.6) 0%, rgba(229,153,125,0.4) 50%, transparent 70%)`,
                        borderRadius: '50%',
                        animationDelay: `${particle.animationDelay}s`,
                        animationDuration: `${particle.duration}s`,
                        top: '100%',
                    }}
                />
            ))}
            
            {/* Floating Geometric Shapes */}
            <Box className="morph-shape" sx={{
                position: 'absolute',
                top: '10%',
                right: '15%',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(45deg, rgba(10,191,142,0.1), rgba(229,153,125,0.1))',
                filter: 'blur(40px)',
            }} />
            
            <Box className="morph-shape" sx={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(10,191,142,0.1))',
                filter: 'blur(30px)',
                animationDelay: '2s',
            }} />
            
            {/* Main Content */}
             <Container maxWidth="xl">   
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                mx: 'auto',
                
            }}>
                
               
                <Grid2 container spacing={4} alignItems="center">
                    {/* Left Column - Text Content */}
                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box className="hero-slide-top" sx={{ mb: 4 }}>
                            {/* Status Badge */}
                            <Chip
                                icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#0abf8e', ml: 1 }} />}
                                label="Available for Projects"
                                sx={{
                                    background: 'rgba(10, 191, 142, 0.1)',
                                    color: '#0abf8e',
                                    border: '1px solid rgba(10, 191, 142, 0.3)',
                                    fontWeight: 600,
                                    fontSize: '12px',
                                    mb: 3,
                                    '& .MuiChip-icon': {
                                        color: '#0abf8e',
                                    },
                                }}
                            />
                            
                            {/* Main Heading */}
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: { lg: '72px', md: '56px', sm: '48px', xs: '36px' },
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    color: '#fff',
                                    mb: 2,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                Hi, I'm
                                <Box component="span" className="gradient-text" sx={{ ml: 2, color:'#07B4BB' }}>
                                    Hitesh
                                </Box>
                            </Typography>
                            
                            {/* Dynamic Role */}
                            <Typography
                                variant="h2"
                                component="div"
                                sx={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: { lg: '48px', md: '38px', sm: '32px', xs: '28px' },
                                    fontWeight: 700,
                                    color: '#e5997d',
                                    mb: 3,
                                    minHeight: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Box component="span" className="neon-text">
                                    {typedText}
                                </Box>
                                <Box component="span" sx={{
                                    width: '3px',
                                    height: '40px',
                                    background: '#0abf8e',
                                    ml: 1,
                                    animation: 'blink 0.75s step-end infinite',
                                }} />
                            </Typography>
                            
                            {/* Description */}
                            <Typography
                                variant="body1"
                                className="hero-slide-bottom"
                                sx={{
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: { md: '18px', sm: '16px', xs: '15px' },
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    lineHeight: 1.6,
                                    mb: 4,
                                    maxWidth: '500px',
                                    animationDelay: '0.2s',
                                }}
                            >
                                Passionate about creating exceptional digital experiences that blend creativity with cutting-edge technology. Let's build something amazing together.
                            </Typography>
                            
                            {/* CTA Buttons */}
                            <Box className="hero-scale-in" sx={{ 
                                display: 'flex', 
                                gap: 1, 
                                mb: 4,
                                animationDelay: '0.4s',
                            }}>
                                <Box
                                    component="a"
                                    href="#"
                                    className="btn-cv"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 2,
                                        background: '#07B4BB',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        transition: 'all 0.3s ease',
                                        border: 'none',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 10px 30px rgba(10, 191, 142, 0.4)',
                                        },
                                    }}
                                >
                                    <Download sx={{ fontSize: 20 }} />
                                    Download CV
                                </Box>
                                
                                <Box
                                    component="a"
                                    href="#"
                                    className="btn-work glass-card"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 2,
                                        color: '#fff',
                                        borderRadius: '12px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            background: '#e5997d',
                                            color: '#fff',
                                            border: '1px solid #e5997d',
                                        },
                                    }}
                                >
                                    View Projects
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Box>
                            </Box>
                            
                            {/* Skills Pills */}
                            <Box className="hero-slide-bottom" sx={{ 
                                display: 'flex', 
                                gap: 2, 
                                flexWrap: 'wrap',
                                animationDelay: '0.6s',
                            }}>
                                {skills.map((skill, index) => (
                                    <Box
                                        key={skill.name}
                                        onMouseEnter={() => setHoveredSkill(index)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            px: 2,
                                            py: 1,
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: `1px solid ${skill.color}20`,
                                            borderRadius: '20px',
                                            color: skill.color,
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            transition: 'all 0.3s ease',
                                            cursor: 'default',
                                            transform: hoveredSkill === index ? 'translateY(-2px)' : 'translateY(0)',
                                            boxShadow: hoveredSkill === index ? `0 5px 15px ${skill.color}30` : 'none',
                                        }}
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid2>
                    
                    {/* Right Column - Stats & Visual */}
                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <Box className="hero-rotate-in" 
                        sx={{ 
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column-reverse',
                            alignItems: 'center',
                            gap: 4,
                         }}

                        >
                            {/* Stats Cards */}
                            <Box ref={statsRef} sx={{ mb: 4 }}>
                                <Grid2 container spacing={3}>
                                    {[
                                        { value: countedStats.exp, label: 'Years Experience', icon: <TrendingUp />, color: '#0abf8e' },
                                        { value: countedStats.projects, label: 'Projects Completed', icon: <Rocket />, color: '#e5997d' },
                                        { value: countedStats.clients, label: 'Happy Clients', icon: <Star />, color: '#7c3aed' },
                                    ].map((stat, index) => (
                                        <Grid2 item xs={12} sm={4} sx={{ width: { xs: '100%', sm: 'auto' } }} key={stat.label}>
                                            <Box
                                                className="glass-card hero-scale-in"
                                                sx={{
                                                    p: 3,
                                                    minHeight: { xs: 'auto', sm: '165px' },
                                                    width: '100%',
                                                    borderRadius: '16px',
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease',
                                                    animationDelay: `${0.8 + index * 0.1}s`,
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)',
                                                        background: 'rgba(255, 255, 255, 0.08)',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ color: stat.color, mb: 1 }}>
                                                    {stat.icon}
                                                </Box>
                                                <Typography
                                                    variant="h3"
                                                    component="div"
                                                    className="stat-number"
                                                    sx={{
                                                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                                                        fontSize: { lg: '36px', md: '32px', xs: '28px' },
                                                        fontWeight: 800,
                                                        color: '#fff',
                                                        lineHeight: 1,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {stat.value}+
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontFamily: '"DM Mono", monospace',
                                                        fontSize: '11px',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                    }}
                                                >
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        </Grid2>
                                    ))}
                                </Grid2>
                            </Box>
                            
                            {/* Profile Image with Creative Frame */}
                            <Box className="hero-scale-in" sx={{ 
                                mt: 4,
                                animationDelay: '1.1s',
                                position: 'relative',
                                display: 'inline-block',
                            }}>
                                <Box sx={{
                                    position: 'relative',
                                    width: { lg: '300px', md: '250px', sm: '200px', xs: '180px' },
                                    height: { lg: '300px', md: '250px', sm: '200px', xs: '180px' },
                                    mx: 'auto',
                                }}>
                                    {/* Animated Border */}
                                    <Box className="glow-effect" sx={{
                                        position: 'absolute',
                                        inset: '-4px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(45deg, #0abf8e, #e5997d, #7c3aed, #0abf8e)',
                                        backgroundSize: '400% 400%',
                                        animation: 'gradientShift 4s ease-in-out infinite',
                                    }} />
                                    
                                    {/* Image Container */}
                                    <Box sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '4px solid #0d1117',
                                        '& img': {
                                            filter: 'grayscale(100%)',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                        }
                                    }}>
                                        <img
                                            src={Hitesh}
                                            alt="Hitesh"
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
                </Container>
        </Box>
    );
};

export default HeroSection;