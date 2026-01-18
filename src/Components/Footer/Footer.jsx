import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LinkedinIcon from '../../assets/image/linkedin.svg';
import InstagramIcon from '../../assets/image/instagram.svg';
import FacebookIcon from '../../assets/image/facebook.svg';
import BrandLogo from '../../assets/image/Logo.svg';

const navItems = ['Home', 'About Us', 'Services', 'Portfolio', 'Contact'];
const useFul = ['Help Center', 'Privacy Policy', 'Terms of Services'];
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Box sx={{
            background: "#000",

        }}>
            <Box sx={{
                padding: { lg: '80px 0', md: '80px 0', sm: '50px 0', xs: '50px 0', },
                position: 'relative',
                zIndex: '1',

            }}>
                <Container>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                            <Box sx={{
                                marginBottom: { lg: '40px', md: '40px', sm: '40px', xs: '20px', },
                                textAlign: 'center',
                                '& a': {
                                    display: 'block',
                                    margin: "0 auto",
                                    lineHeight: '0',
                                    width: { lg: '160px', md: '140px', sm: '120px', xs: '110px', },
                                    '& img': {
                                        width: '100%',
                                    },
                                },
                            }} className='logo'>
                                <Link to="/"><img src={BrandLogo} alt="Logo" /> </Link>
                            </Box>

                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <Box className='footerwidget'>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    justifyContent: 'center',
                                    flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column', },
                                    '& a': {
                                        color: '#ADADAD',
                                        fontSize: '16px',
                                        fontWeight: '300',
                                        display: 'block',
                                        '&:hover': {
                                            color: '#e5997d',
                                        },
                                    },
                                }} className='menu'>
                                    {navItems.map((item) => (
                                        <Link to="/" key={item}>
                                            {item}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid2>

                    </Grid2>
                </Container>
            </Box>
            <Box sx={{
                borderTop: "1px solid rgb(229 153 125 / 21%)",
                padding: "20px 0",
            }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column-reverse', },
                    }}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#fff",
                                fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px', },
                                "& a": {
                                    color: "#e5997d",
                                    display: { lg: 'inline-block', md: 'inline-block', sm: 'inline-block', xs: 'block', },
                                },
                            }}
                        >
                            © {currentYear} All rights reserved by{" "}
                            <Link to="/">Hitesh Ghoghari</Link>
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column', },
                            marginBottom: { lg: '0', md: '0', sm: '0', xs: '20px', },
                        }} className='footerwidget'>
                            <Typography sx={{
                                textTransform: 'uppercase',
                                color: '#07B4BB',
                                fontSize: "16px",
                                fontWeight: '500',
                            }} variant="h3">FIND WITH ME</Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: "center",
                                gap: "10px",
                                '& a': {
                                    width: '40px',
                                    height: '40px',
                                    border: '1px solid #011010',
                                    background: '#161818',
                                    borderRadius: '0x',
                                    transition: '0.4s all',
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        borderColor: 'rgb(7 173 180 / 41%)',
                                    },
                                },
                            }}>
                                <Link to="/" target='_blank' title="Linkedin"><img src={LinkedinIcon} /></Link>
                                <Link to="/" target='_blank' title="Instagram"><img src={InstagramIcon} /></Link>
                                <Link to="/" target='_blank' title="Facebook"><img src={FacebookIcon} /></Link>
                            </Box>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Box>
    )
}

export default Footer