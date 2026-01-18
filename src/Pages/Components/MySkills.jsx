import React from 'react'
import { Box, Container, Grid2, Typography } from '@mui/material'
import PSImg from '../../assets/image/adobe-photoshop.png';
import FigmaImg from '../../assets/image/figma.png';
import XDImg from '../../assets/image/xd.png';
import HTMLImg from '../../assets/image/html-5.png';
import CSSImg from '../../assets/image/css-3.png';
import BSImg from '../../assets/image/bootstrap.png';
import JQImg from '../../assets/image/jquery.png';
import JSImg from '../../assets/image/js.png';
import RJSImg from '../../assets/image/reactjs.png';
import VJSImg from '../../assets/image/vuejs.png';
import MuiImg from '../../assets/image/materialui.png';
import TailwindImg from '../../assets/image/tailwindcss.png';
import SASSImg from '../../assets/image/sass.png';
import AntImg from '../../assets/image/ant.png';
import ShapeCircle from '../../assets/image/section-bg-shape-1.png';
import AngularImg from '../../assets/image/angular.png';


const MySkills = () => {
    return (
        <>
            <Box sx={{
                background: "#0f1217",
                padding: { lg: '100px 0', md: '100px 0', sm: '50px 0', xs: '50px 0', },
                position: 'relative',
                zIndex: "1",
                '&:after': {
                    content: "''",
                    backgroundImage: `url(${ShapeCircle})`,
                    width: '250px',
                    height: '250px',
                    display: { lg: 'block', md: 'block', sm: 'block', xs: 'none', },
                    position: 'absolute',
                    top: '-150px',
                    right: '60px',
                    zIndex: '-1',
                    opacity: '0.1',
                    backgroundPosition: 'left top',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    animation: 'stonerotate 10s infinite linear',
                    animationDirection: 'alternate',
                },
            }}>
                <Container>
                    <Box sx={{
                        textAlign: 'center',
                        paddingBottom: { lg: '60px', md: '60px', sm: '60px', xs: '30px', },
                        position: 'relative',
                        '& h2': {
                            color: "#fff",
                            fontWeight: '500',
                            fontSize: { lg: '48px', md: '48px', sm: '40px', xs: '32px', },
                            position: 'relative',
                        },
                        '& p': {
                            color: "#fff",
                        },
                    }}>
                        <Typography variant="h2">My <Typography sx={{
                            color: "#fff",
                        }} variant="span">Skills</Typography></Typography>
                        <Box sx={{
                            position: 'relative',
                            display: 'block',
                            width: '24px',
                            height: '2px',
                            backgroundColor: '#e5997d',
                            margin: '20px auto',
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                left: 'calc(100% + 6px)',
                                top: '0',
                                width: '24px',
                                height: '2px',
                                backgroundColor: '#e5997d',
                                left: 'calc(100% + 6px)',
                            },
                            '&:before': {
                                content: "''",
                                position: 'absolute',
                                left: 'calc(100% + 6px)',
                                top: '0',
                                width: '24px',
                                height: '2px',
                                backgroundColor: '#e5997d',
                                left: 'auto',
                                right: 'calc(100% + 6px)',
                            },
                        }}></Box>

                    </Box>
                    <Box sx={{
                        '& .skillbox': {
                            background: "#000",
                            padding: "20px",
                            borderRadius: "0px",
                            border: "1px solid rgb(7 173 180 / 41%)",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            textAlign: "center",
                            gap: "20px",
                            transition: '0.5s all',
                            height: "100%",
                            '& img': {
                                width: "60px",
                                margin: '0 auto',
                                transform: 'scale(0.9)',
                                transition: '0.5s ease',
                            },
                            '& p': {
                                color: "#fff",
                                opacity: "0.5",
                                transition: '0.5s ease',
                            },
                            '&:hover': {
                                borderColor: '#e5997d',
                                '& img': {
                                    filter: 'none',
                                    transform: "scale(1)",
                                },
                                '& p': {
                                    opacity: "1",
                                },
                            },
                        },
                    }}>
                        <Grid2 container spacing={2} justifyContent={'center'}>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={PSImg} alt="Abode Photoshop" />
                                    <Typography>Adobe Photoshop</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={FigmaImg} alt="Abode Photoshop" />
                                    <Typography>Figma</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={XDImg} alt="Abode Photoshop" />
                                    <Typography>Adobe XD</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={HTMLImg} alt="Abode Photoshop" />
                                    <Typography>HTML</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={CSSImg} alt="Abode Photoshop" />
                                    <Typography>CSS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={BSImg} alt="Abode Photoshop" />
                                    <Typography>Boostrap</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={JQImg} alt="Abode Photoshop" />
                                    <Typography>Jquery</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={JSImg} alt="Abode Photoshop" />
                                    <Typography>Javascript</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={RJSImg} alt="Abode Photoshop" />
                                    <Typography>React JS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={VJSImg} alt="Abode Photoshop" />
                                    <Typography>Vue JS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={AngularImg} alt="Abode Photoshop" />
                                    <Typography>Angular JS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={MuiImg} alt="Abode Photoshop" />
                                    <Typography>Material UI</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={TailwindImg} alt="Abode Photoshop" />
                                    <Typography>Tailwind CSS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={SASSImg} alt="Abode Photoshop" />
                                    <Typography>SASS</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                                <Box className='skillbox'>
                                    <img src={AntImg} alt="Abode Photoshop" />
                                    <Typography>ANT Design</Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default MySkills