import { Box, Container, Grid2, Typography, TextField, Button, Fab } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedinIcon from '../../assets/image/linkedin.svg';
import InstagramIcon from '../../assets/image/instagram.svg';
import FacebookIcon from '../../assets/image/facebook.svg';
import BrandLogo from '../../assets/image/Logo.svg';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
];

const useFul = [
    { name: 'Help Center', path: '/help' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Services', path: '/terms' }
];

const socialLinks = [
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/hitesh-ghoghari-97b497135' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        
        // Validate email
        if (!email.trim()) {
            setStatus('error');
            setMessage('Please enter your email address');
            return;
        }
        
        if (!validateEmail(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address');
            return;
        }

        // Set loading state
        setStatus('loading');
        setMessage('');

        // Simulate API call (replace with actual API integration)
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Here you would make an actual API call
            // const response = await fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
            
            // For demo, we'll just simulate success
            setStatus('success');
            setMessage('Successfully subscribed! Check your inbox.');
            setEmail('');
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
            
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    // Handle scroll to show/hide back to top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{
            background: "#000",
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #e5997d, transparent)',
            }
        }}>
            <Box sx={{
                padding: { lg: '80px 0', md: '60px 0', sm: '50px 0', xs: '40px 0' },
                position: 'relative',
                zIndex: '1',
            }}>
                <Container maxWidth="xl">
                    <Grid2 container spacing={{ lg: 4, md: 3, sm: 3, xs: 2 }}>
                        {/* Logo and Description */}
                        <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                            <Box sx={{
                                marginBottom: { lg: '30px', md: '25px', sm: '20px', xs: '20px' },
                            }}>
                                <Box sx={{
                                    marginBottom: '20px',
                                    '& a': {
                                        display: 'inline-block',
                                        lineHeight: '0',
                                        width: { lg: '160px', md: '140px', sm: '120px', xs: '110px' },
                                        '& img': {
                                            width: '100%',
                                            transition: 'transform 0.3s ease',
                                        },
                                        '&:hover img': {
                                            transform: 'scale(1.05)',
                                        },
                                    },
                                }} className='logo'>
                                    <Link to="/" aria-label="Home"><img src={BrandLogo} alt="Hitesh Ghoghari Logo" /></Link>
                                </Box>
                                <Typography sx={{
                                    color: '#ADADAD',
                                    fontSize: { lg: '15px', md: '14px', sm: '14px', xs: '13px' },
                                    lineHeight: '1.8',
                                    fontWeight: '300',
                                    maxWidth: '350px',
                                }}>
                                    Creating digital experiences that matter. Let's build something amazing together.
                                </Typography>
                            </Box>
                        </Grid2>

                        {/* Quick Links */}
                        <Grid2 size={{ lg: 2, md: 2, sm: 6, xs: 6 }}>
                            <Box sx={{
                                marginBottom: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }
                            }}>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: { lg: '18px', md: '17px', sm: '16px', xs: '15px' },
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    position: 'relative',
                                    paddingBottom: '10px',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '40px',
                                        height: '2px',
                                        background: '#e5997d',
                                    },
                                }} variant="h6">
                                    Quick Links
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    '& a': {
                                        color: '#ADADAD',
                                        fontSize: { lg: '15px', md: '14px', sm: '14px', xs: '13px' },
                                        fontWeight: '300',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        width: 'fit-content',
                                        '&:hover': {
                                            color: '#e5997d',
                                            transform: 'translateX(5px)',
                                        },
                                    },
                                }} className='menu'>
                                    {navItems.map((item) => (
                                        <Link to={item.path} key={item.name}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid2>

                        {/* Useful Links */}
                        <Grid2 size={{ lg: 2, md: 2, sm: 6, xs: 6 }}>
                            <Box sx={{
                                marginBottom: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }
                            }}>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: { lg: '18px', md: '17px', sm: '16px', xs: '15px' },
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    position: 'relative',
                                    paddingBottom: '10px',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '40px',
                                        height: '2px',
                                        background: '#e5997d',
                                    },
                                }} variant="h6">
                                    Resources
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    '& a': {
                                        color: '#ADADAD',
                                        fontSize: { lg: '15px', md: '14px', sm: '14px', xs: '13px' },
                                        fontWeight: '300',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        width: 'fit-content',
                                        '&:hover': {
                                            color: '#e5997d',
                                            transform: 'translateX(5px)',
                                        },
                                    },
                                }}>
                                    {useFul.map((item) => (
                                        <Link to={item.path} key={item.name}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid2>

                        {/* Newsletter */}
                        <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                            <Box sx={{
                                marginBottom: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }
                            }}>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: { lg: '18px', md: '17px', sm: '16px', xs: '15px' },
                                    fontWeight: '600',
                                    marginBottom: '15px',
                                    position: 'relative',
                                    paddingBottom: '10px',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '40px',
                                        height: '2px',
                                        background: '#e5997d',
                                    },
                                }} variant="h6">
                                    Newsletter
                                </Typography>
                                <Typography sx={{
                                    color: '#ADADAD',
                                    fontSize: { lg: '14px', md: '13px', sm: '13px', xs: '12px' },
                                    lineHeight: '1.6',
                                    fontWeight: '300',
                                    marginBottom: '20px',
                                }}>
                                    Subscribe to get updates on new projects and insights.
                                </Typography>
                                <Box component="form" onSubmit={handleNewsletterSubmit} sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
                                    }}>
                                        <TextField
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={status === 'loading'}
                                            error={status === 'error'}
                                            sx={{
                                                flex: 1,
                                                '& .MuiOutlinedInput-root': {
                                                    color: '#fff',
                                                    fontSize: '14px',
                                                    '& fieldset': {
                                                        borderColor: status === 'error' ? '#ef4444' : 'rgba(229, 153, 125, 0.3)',
                                                        borderRadius: '4px',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: status === 'error' ? '#ef4444' : 'rgba(229, 153, 125, 0.5)',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: status === 'error' ? '#ef4444' : '#e5997d',
                                                    },
                                                },
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: '#ADADAD',
                                                    opacity: 0.7,
                                                },
                                            }}
                                            size="small"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            sx={{
                                                background: status === 'loading' ? '#e5997d' : '#e5997d',
                                                color: '#000',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                padding: '8px 20px',
                                                borderRadius: '4px',
                                                textTransform: 'none',
                                                transition: 'all 0.3s ease',
                                                minWidth: '120px',
                                                '&:hover': {
                                                    background: status === 'loading' ? '#e5997d' : '#d48a6e',
                                                    transform: status === 'loading' ? 'none' : 'translateY(-2px)',
                                                    boxShadow: status === 'loading' ? 'none' : '0 4px 12px rgba(229, 153, 125, 0.3)',
                                                },
                                                '&:disabled': {
                                                    background: '#e5997d',
                                                    color: '#000',
                                                    opacity: 0.7,
                                                },
                                            }}
                                        >
                                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                        </Button>
                                    </Box>
                                    
                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <Typography sx={{
                                            color: '#ef4444',
                                            fontSize: '12px',
                                            fontWeight: '400',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}>
                                            ⚠ {message}
                                        </Typography>
                                    )}
                                    
                                    {/* Success Message */}
                                    {status === 'success' && (
                                        <Typography sx={{
                                            color: '#10b981',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            animation: 'fadeIn 0.3s ease',
                                            '@keyframes fadeIn': {
                                                from: { opacity: 0, transform: 'translateY(-10px)' },
                                                to: { opacity: 1, transform: 'translateY(0)' },
                                            },
                                        }}>
                                            ✓ {message}
                                        </Typography>
                                    )}
                            </Box>
                        </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* Bottom Footer */}
            <Box sx={{
                borderTop: "1px solid rgba(229, 153, 125, 0.2)",
                padding: { lg: '25px 0', md: '20px 0', sm: '20px 0', xs: '20px 0' },
                background: 'rgba(0, 0, 0, 0.5)',
            }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
                        gap: { lg: 0, md: 0, sm: '20px', xs: '20px' },
                    }}>
                        <Typography
                            sx={{
                                color: "#ADADAD",
                                fontSize: { lg: '14px', md: '14px', sm: '13px', xs: '12px' },
                                fontWeight: '300',
                                textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center' },
                                "& a": {
                                    color: "#e5997d",
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                },
                            }}
                        >
                            © {currentYear} All rights reserved by{" "}
                            <Link to="/">Hitesh Ghoghari</Link>
                        </Typography>

                        {/* Social Links */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <Typography sx={{
                                textTransform: 'uppercase',
                                color: '#07B4BB',
                                fontSize: { lg: '14px', md: '13px', sm: '13px', xs: '12px' },
                                fontWeight: '600',
                                marginRight: '8px',
                                letterSpacing: '0.5px',
                            }}>
                                Connect
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: "center",
                                gap: "8px",
                                '& a': {
                                    width: { lg: '38px', md: '36px', sm: '34px', xs: '32px' },
                                    height: { lg: '38px', md: '36px', sm: '34px', xs: '32px' },
                                    border: '1px solid rgba(7, 180, 187, 0.3)',
                                    background: 'rgba(22, 24, 24, 0.8)',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    '& img': {
                                        width: '18px',
                                        height: '18px',
                                        filter: 'brightness(0) invert(1)',
                                        transition: 'filter 0.3s ease',
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        borderColor: '#07B4BB',
                                        background: 'rgba(7, 180, 187, 0.1)',
                                        boxShadow: '0 4px 12px rgba(7, 180, 187, 0.2)',
                                        '& img': {
                                            filter: 'brightness(0) invert(1) drop-shadow(0 0 2px #07B4BB)',
                                        },
                                    },
                                },
                            }}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                    >
                                        <img src={social.icon} alt={social.name} />
                                    </a>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Back to Top Button */}
            <Fab
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    background: '#e5997d',
                    color: '#000',
                    width: { lg: '56px', md: '52px', sm: '48px', xs: '44px' },
                    height: { lg: '56px', md: '52px', sm: '48px', xs: '44px' },
                    opacity: showBackToTop ? 1 : 0,
                    visibility: showBackToTop ? 'visible' : 'hidden',
                    transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: '#d48a6e',
                        transform: showBackToTop ? 'translateY(-5px)' : 'translateY(20px)',
                        boxShadow: '0 6px 20px rgba(229, 153, 125, 0.4)',
                    },
                    '&:active': {
                        transform: showBackToTop ? 'translateY(-2px)' : 'translateY(20px)',
                    },
                    zIndex: 1000,
                }}
                aria-label="Back to top"
            >
                <KeyboardArrowUpIcon sx={{ fontSize: { lg: '28px', md: '26px', sm: '24px', xs: '22px' } }} />
            </Fab>
        </Box>
    )
}

export default Footer