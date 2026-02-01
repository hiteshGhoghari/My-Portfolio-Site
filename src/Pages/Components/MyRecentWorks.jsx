import React from 'react';
import { Box, Container, Button, Grid2, Typography } from '@mui/material'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import Yaoweliness from '../../assets/image/yaoweliness.png';
import Bookfreelancer from '../../assets/image/bookfreelancer.png';
import Nextmatchup from '../../assets/image/nextmatchup.png';
import Vinhuset from '../../assets/image/vinhuset.png';
import Rosswaldhuette from '../../assets/image/rosswaldhuette.png';
import Longlife from '../../assets/image/longlife.png';




const MyRecentWorks = () => {

    return (
        <>
            <Box sx={{
                position: 'relative',
                zIndex: "1",
                background: "#0f1217",
                padding: { lg: '100px 0px', md: '100px 0px', sm: '50px 0px', xs: '50px 0px', },

            }}>

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
                    }} variant="span">Recent Works</Typography></Typography>
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
                    '& .workitem': {
                    },
                    '& .workbox': {
                        background: '#000',
                        color: '#fff',
                        borderRadius: "0px",
                        padding: { lg: '25px', md: '25px', sm: '15px', xs: '15px', },
                        height: { lg: 'auto', md: 'auto', sm: '262px', xs: 'auto', },
                        position: "relative",
                        cursor: 'pointer',
                        border: { lg: '1px solid rgb(7 180 187 / 30%)', md: '1px solid rgb(7 180 187 / 30%)', sm: '1px solid rgb(7 180 187 / 30%)', xs: '0', },
                        '& .workboximg': {
                            overflow: 'hidden',
                            position: "relative",
                            height: { lg: '230px', md: '200px', sm: '116px', xs: '180px', },
                            borderRadius: "0px",
                            '&:after': {
                                content: "''",
                                width: '100%',
                                height: '100%',
                                display: 'block',
                                position: 'absolute',
                                inset: '0',
                                background: '#000000',
                                opacity: '0.2',
                            },
                            '& img': {
                                width: "100%",
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: "0px",
                                transition: "0.5s ease",
                                objectPosition: 'top',
                            },
                        },
                        '& .workboxtext': {
                            position: 'relative',
                            height: { lg: '230px', md: '200px', sm: '230px', xs: '180px', },
                            '& h5': {
                                color: "#fff",
                                fontWeight: '500',
                                fontSize: { lg: '26px', md: '26px', sm: '26px', xs: '16px', },
                            },
                            '& p': {
                                color: '#fff',
                                opacity: "0.5",
                                fontSize: { lg: '14px', md: '14px', sm: '14px', xs: '12px', },
                                fontWeight: '400',
                                marginBottom: '10px',
                                textTransform: 'capitalize',
                            },
                            '& h6': {
                                color: '#07B4BB',
                                fontSize: { lg: '12px', md: '12px', sm: '12px', xs: '12px', },
                                fontWeight: '500',
                                textTransform: 'uppercase',
                            },
                            '& span': {
                                color: '#FFF',
                                width: '40px',
                                height: '40px',
                                border: '1px solid transparent',
                                borderRadius: '0px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "0.5s ease",
                            },
                        },
                        '&:hover': {
                            '& img': {
                                transform: 'scale(1.01)',
                            },
                            '& span': {
                                background: '#e5997d',
                            },
                        },
                    },
                }}>
                    <Container>
                        <Grid2 onClick={() => window.open('https://yaowellness.com', '_blank')} sx={{ marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', }, border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', }, }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{
                                    marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', },
                                }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Yaoweliness} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">yaowellness</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>Yao Wellness blends Traditional Chinese Massage techniques with modern wellness practices to create a calm, effective, and approachable experience. Our goal is simple: help you feel better in your body and more balanced in your life.</Typography>
                                            {/* <Typography variant="h6">Wordpress</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 onClick={() => window.open('https://bookfreelancer.net/', '_blank')} sx={{
                            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column-reverse', },
                            marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', },
                            border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', },
                        }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: "-1px", marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">Bookfreelancer</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>Book Freelancer is a digital platform designed to connect individuals and businesses with independent service providers across a wide range of lifestyle, hospitality, real estate and professional industries. </Typography>
                                            {/* <Typography variant="h6">Wordpress</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Bookfreelancer} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 onClick={() => window.open('https://www.rosswaldhuette.at/de/', '_blank')} sx={{ marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', }, border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', }, }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Rosswaldhuette} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">Rosswaldhuette</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>We look forward to your visit!
                                                The Hasenauer family and the Rosswaldhütte team</Typography>
                                            {/* <Typography variant="h6">VueJs</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 onClick={() => window.open('https://www.longlife.at/de/', '_blank')} sx={{
                            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column-reverse', },
                            marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', },
                            border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', },
                        }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">Longlife</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>Thanks to its uniquely high content of natural magnesium, Long Life mineral water serves as a valuable source of energy and increases performance in work, school and sports.</Typography>
                                            {/* <Typography variant="h6">VueJs</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Longlife} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 onClick={() => window.open('https://nextmatchup.com/', '_blank')} sx={{ marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', }, border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', }, }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Nextmatchup} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">Nextmatchup</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>We currently host meetups in 11 cities, with more cities being added as our community grows. Whether you are looking to spark a romantic connection, share a meal through Dinner with Strangers, or exchange ideas at a Meetup with Creatives, NextMatchup creates spaces where people can connect beyond the screen.</Typography>
                                            {/* <Typography variant="h6">Wordpress</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Grid2 onClick={() => window.open('https://vinhuset.dk/', '_blank')} sx={{
                            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column-reverse', },
                            marginBottom: { lg: '0px', md: '0px', sm: '0px', xs: '15px', },
                            border: { lg: '0px', md: '0px', sm: '0px', xs: '1px solid rgba(7, 180, 187, 0.3)', },
                        }} container>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, marginRight: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboxtext'>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                                paddingBottom: "20px",
                                                marginBottom: "10px",
                                            }}>
                                                <Typography variant="h5">Vinhuset</Typography>
                                                <Typography variant="span">
                                                    <CallMadeRoundedIcon />
                                                </Typography>
                                            </Box>
                                            <Typography>At Vinhuset, it's not just about wine. It's about creating community, coziness and small moments of luxury in everyday life. </Typography>
                                            {/* <Typography variant="h6">Shopify</Typography> */}

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{ marginTop: { lg: '-1px', md: '-1px', sm: '-1px', xs: '0', }, }} className='workitem'>
                                    <Box className='workbox'>
                                        <Box className='workboximg'>
                                            <img src={Vinhuset} alt="" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Container>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    marginTop: '50px',
                }}>
                    <Button sx={{
                        background: "transparent",
                        color: "#07B4BB",
                        border: "1px solid #07B4BB",
                        borderRadius: "0px",
                        padding: { lg: "10px 28px", md: "6px 22px" },
                        fontSize: '16px',
                        fontWeight: 600,
                        boxShadow: 'none',
                        transition: 'all 0.4s',
                        textTransform: 'capitalize',
                        transitionTimingFunction: 'cubic-bezier(0.5, 3, 0, 1)',
                        '&:hover': {
                            color: '#fff',
                            background: '#07B4BB',
                            transform: 'skewX(-15deg)',
                        },
                    }} variant="contained" className='theme-btn'>
                        Explore More  <CallMadeRoundedIcon sx={{ marginLeft: '4px' }} />
                    </Button>
                </Box>

            </Box >
        </>
    )
}

export default MyRecentWorks