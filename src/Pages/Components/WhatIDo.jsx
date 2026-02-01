import React from 'react'
import { Box, Container, Grid2, Typography } from '@mui/material';
import DataCodeImg from '../../assets/image/datacode.svg';
import WebCodeImg from '../../assets/image/webcode.svg';
import PenToolImg from '../../assets/image/pen-ruler.svg';
import WebIdeaImg from '../../assets/image/web-idea.svg';



const WhatIDo = () => {
    return (
        <>
            <Box sx={{
                background: "#0f1217",
                padding: { lg: '100px 0', md: '100px 0', sm: '50px 0', xs: '50px 0', },
            }}>
                <Container>
                    <Box sx={{
                        textAlign: 'center',
                        paddingBottom: '60px',
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
                        }} variant="span">Specializations</Typography></Typography>
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
                        '& .whatdobox': {
                            backgroundColor: '#000',
                            padding: '25px',
                            borderRadius: '0px',
                            position: 'relative',
                            zIndex: '1',
                            transition: 'all 0.4s',
                            overflow: 'hidden',
                            minHeight: "300px",
                            '&:before': {
                                content: "''",
                                position: 'absolute',
                                inset: '0',
                                padding: '1px',
                                background: 'linear-gradient(0deg, rgba(174, 255, 53, 0) 50%, hsl(182.33deg 92.78% 38.04%) 100%)',
                                borderRadius: '0px',
                                mask: 'conic-gradient(#000 0 0) content-box exclude, conic-gradient(#000 0 0)',
                                zIndex: '-1',
                            },
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                left: '0',
                                width: '100%',
                                height: '0%',
                                background: 'linear-gradient(0deg, hsl(182.33deg 80.31% 2.62%) -8.96%, hsl(182.33deg 50.07% 26.76%) 100%)',
                                zIndex: '-1',
                                transition: 'all 0.7s',
                                top: '0',
                            },
                            '&.topreverse': {
                                '&:before': {
                                    background: 'linear-gradient(180deg, rgba(174, 255, 53, 0) 50%, hsl(182.33deg 92.78% 38.04%) 100%)',
                                },
                                '&:after': {
                                    bottom: "0",
                                    top: "auto",
                                    background: 'linear-gradient(0deg, hsl(182.33deg 50.07% 26.76%) -8.96%, hsl(182.33deg 80.31% 2.62%) 100%)',
                                },
                            },
                            '& span': {
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: "0",
                                background: "#04383b",
                                transition: 'all 0.4s',
                            },
                            '& h3': {
                                color: '#fff',
                                fontSize: '24px',
                                fontWeight: "600",
                                position: 'relative',
                                marginBottom: "12px",
                                marginTop: "20px",
                                transition: 'all 0.4s',
                            },
                            '& p': {
                                color: '#ADADAD',
                                fontSize: '16px',
                                fontWeight: '300',
                                display: 'block',
                                transition: 'all 0.4s',

                            },
                            '& svg': {
                                color: '#e5997d',
                                fontSize: '46px',
                            },
                            '&:hover': {
                                '&:after': {
                                    height: "100%",
                                },
                                '& h3': {
                                    color: "#fff",
                                },
                                '& p': {
                                    color: "#fff",
                                },
                            },
                        },
                    }}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                                <Box className='whatdobox'>
                                    <Typography variant="span">
                                        <img src={WebIdeaImg} alt="" />
                                    </Typography>
                                    <Typography variant="h3">Web Research</Typography>
                                    <Typography>I analyze business goals, target audiences, competitors, and industry trends to build a strong foundation for every project. This research-driven approach ensures the design is purposeful, user-focused, and aligned with real-world needs.</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                                <Box className='whatdobox topreverse' sx={{ marginTop: { lg: '40px', md: '40px', sm: '40px', xs: '0', }, }}>
                                    <Typography variant="span">
                                        <img src={PenToolImg} alt="" />
                                    </Typography>
                                    <Typography variant="h3">Ui/Ux Design</Typography>
                                    <Typography>I design intuitive user experiences and visually engaging interfaces that guide users effortlessly. Every layout, interaction, and flow is crafted to improve usability, clarity, and conversion while maintaining a modern aesthetic.</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                                <Box className='whatdobox'>
                                    <Typography variant="span">
                                        <img src={WebCodeImg} alt="" />
                                    </Typography>
                                    <Typography variant="h3">Web Design</Typography>
                                    <Typography>I create clean, responsive, and visually compelling website designs that reflect brand identity. My designs balance creativity with consistency, ensuring your website looks professional and performs seamlessly across all devices.</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                                <Box className='whatdobox topreverse' sx={{ marginTop: { lg: '40px', md: '40px', sm: '40px', xs: '0', }, }}>
                                    <Typography variant="span">
                                        <img src={DataCodeImg} alt="" />
                                    </Typography>
                                    <Typography variant="h3">Web Development</Typography>
                                    <Typography>I transform designs into fast, functional, and scalable websites using modern technologies. With clean code and performance-focused development, I ensure smooth interactions, responsiveness, and long-term maintainability.</Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default WhatIDo