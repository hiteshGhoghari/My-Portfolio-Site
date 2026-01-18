import React from 'react'
import { Box, Button, Container, Grid2, Typography } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HeroBg from '../../assets/image/hero-bg.jpg';
import HandImg from '../../assets/image/hand.png';
import MypicImg from '../../assets/image/my-pic.png';

const HeroSection = () => {
    return (
        <>
            <Box sx={{
                background: '#0f1217',
                position: 'relative',
                // height: { lg: "Calc(100vh - 98px)", md: "Calc(100vh - 75px)", sm: "auto" },
                paddingTop: { lg: '100px', md: '80px', sm: '60px', xs: '20px', },
                zIndex: '1',
                color: "#fff",
                overflow: 'hidden',
                '&:after': {
                    content: "''",
                    backgroundImage: `url(${HeroBg})`,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: '-1',
                    opacity: '0.1',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                },
            }}>
                <Box sx={{
                    position: 'relative',
                }}>
                    <Container >
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ lg: 7, md: 7, sm: 6, xs: 12 }}>
                                <Box sx={{
                                    paddingTop: { lg: '50px', md: '50px', sm: '50px', xs: '20px', },
                                }}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: "10px", color: '#05AEB5' }} variant="body1">Hi there! <img src={HandImg} alt="" /> I'm Hitesh</Typography>
                                    <Box sx={{
                                        '& h1': {
                                            fontSize: { lg: '80px', md: '60px', sm: '50px', xs: '40px', },
                                        },
                                    }}>
                                        <Typography sx={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "10px", fontWeight: '500',
                                            '& img': {
                                                width: "150px",
                                                borderRadius: "50px",
                                                opacity: '0.5',
                                            },
                                        }} variant="h1">Innovative</Typography>
                                        <Typography sx={{ textAlign: 'right', fontWeight: '500', position: 'relative' }} variant="h1"><Typography sx={{ color: '#e5997d' }} variant="span">Designer</Typography> and</Typography>
                                        <Typography sx={{ fontWeight: '500', }} variant="h1">Web Developer</Typography>
                                    </Box>
                                    <Box sx={{
                                        margin: { lg: '40px 0 0 0', md: '40px 0 0 0', sm: '40px 0 0 0', xs: '40px 0 30px 0', },
                                        textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center', },
                                        '& button': {
                                            background: "transparent",
                                            color: "#07B4BB",
                                            borderRadius: "0px",
                                            border: "1px solid #07B4BB",
                                            padding: { lg: "10px 28px", md: "6px 22px" },
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            boxShadow: 'none',
                                            transition: 'all 0.4s',
                                            transitionTimingFunction: 'cubic-bezier(0.5, 3, 0, 1)',
                                            '&:hover': {
                                                color: '#fff',
                                                background: '#07B4BB',
                                                transform: 'skewX(-15deg)',
                                            },
                                        },
                                    }} className='cotnact-btn'>
                                        <Button variant="contained" color="success" className='theme-btn'>
                                            Download CV <FileDownloadOutlinedIcon sx={{ marginLeft: '5px' }} />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ lg: 5, md: 5, sm: 6, xs: 12 }}>
                                <Box sx={{
                                    textAlign: 'center',
                                    width: { lg: '400px', md: '300px', sm: '100%', xs: '100%', },
                                    margin: '0 auto',
                                    height: { lg: '600px', md: '500px', sm: '500px', xs: '450px', },
                                    position: 'relative',
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        zIndex: '0',
                                        width: '100%',
                                        height: 'calc(100% - 130px)',
                                        right: { lg: '-13px', md: '0', sm: '0', xs: '0', },
                                        left: 'auto',
                                        bottom: '0',
                                        background: 'rgb(5 163 170 / 13%)',
                                        boxShadow: '15px 0 48px 0px #000000, -10px -10px 19px rgb(0 0 0 / 45%)',
                                        borderRadius: '1000px 1000px 0 0',
                                    },
                                    '& img': {
                                        width: "100%",
                                        objectFit: 'contain',
                                        zIndex: '1',
                                        position: 'relative',
                                        marginLeft: { lg: '0', md: '-25px', sm: '-25px', xs: '-18px', },
                                    },
                                }}>
                                    <img src={MypicImg} alt="" />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
            </Box >
        </>
    )
}

export default HeroSection