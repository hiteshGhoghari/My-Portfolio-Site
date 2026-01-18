import React from 'react';
import { Box, Container, Button, Grid2, Typography } from '@mui/material'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import HeroIcCover from '../../assets/image/heroic-cover.png';
import OmiDyCover from '../../assets/image/omiday-cover.png';
import OFCover from '../../assets/image/optifly-cover.png';
import RBCover from '../../assets/image/royalbatch-cover.png';
import ChevronLeft from '../../assets/image/left-chevron.png';
import ChevronRight from '../../assets/image/right-chevron.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MyRecentWorks = () => {



    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "80px",
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",

                }
            },
        ],
    };
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
                    '& .slick-slider': {
                        paddingBottom: "50px",
                    },
                    '& .slick-arrow': {
                        zIndex: '9',
                        background: '#07B4BB',
                        borderRadius: '0',
                        width: '50px',
                        height: '50px',
                    },
                    '& .slick-prev': {
                        left: '0px',
                        '&:before': {
                            content: "''",
                            opacity: "1",
                            backgroundImage: `url(${ChevronLeft})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: '40px',
                            height: "40px",
                            position: 'absolute',
                            top: "50%",
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            filter: 'invert(1)',
                        },
                    },
                    '& .slick-next': {
                        right: '0px',
                        '&:before': {
                            content: "''",
                            opacity: "1",
                            backgroundImage: `url(${ChevronRight})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            width: '40px',
                            height: "40px",
                            position: 'absolute',
                            top: "50%",
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            filter: 'invert(1)',
                        },
                    },
                    '& .slick-slide': {
                        transition: '0.8s all',
                        opacity: { lg: '0.2', md: '0.2', sm: '0.2', xs: '0.6', },
                        transform: 'scale(0.90)',
                    },
                    '& .slick-slide.slick-active': {
                        opacity: "0.4",
                        transform: 'scale(0.95)',
                    },
                    '& .slick-slide.slick-active.slick-center.slick-current': {
                        opacity: "1",
                        transform: 'scale(1)',
                    },
                    '& .slick-dots': {
                        bottom: "0",
                        '& li': {
                            width: "5px",
                            height: "5px",
                            lineHeight: "2px",
                            transition: '0.5s ease',
                            '& button': {
                                width: "5px",
                                height: "5px",
                                lineHeight: "2px",
                                transition: '0.5s ease',
                                '&:before': {
                                    content: "''",
                                    opacity: "0.5",
                                    background: '#fff',
                                    width: "5px",
                                    height: "5px",
                                    lineHeight: "2px",
                                    borderRadius: "100px",
                                    transition: '0.5s ease',
                                },
                            },
                            '&.slick-active': {
                                width: "24px",
                                height: "5px",
                                lineHeight: "2px",
                                '& button': {
                                    width: "24px",
                                    height: "5px",
                                    lineHeight: "2px",
                                    '&:before': {
                                        opacity: "0.8",
                                        background: '#e5997d',
                                        width: "24px",
                                        height: "5px",
                                        lineHeight: "2px",
                                    },
                                },
                            },
                        },

                    },



                    '& .workitem': {
                        padding: '0 5px',
                    },
                    '& .workbox': {
                        background: '#000',
                        color: '#fff',
                        borderRadius: "0px",
                        padding: { lg: '25px', md: '25px', sm: '25px', xs: '15px', },
                        position: "relative",
                        cursor: 'pointer',
                        border: '1px solid rgb(7 180 187 / 30%)',
                        '& .workboximg': {
                            overflow: 'hidden',
                            position: "relative",
                            height: { lg: '350px', md: '350px', sm: '180px', xs: '180px', },
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
                            },
                        },
                        '& .workboxtext': {
                            marginTop: '20px',
                            position: 'relative',
                            '& h5': {
                                color: "#fff",
                                fontWeight: '500',
                                fontSize: { lg: '26px', md: '26px', sm: '26px', xs: '16px', },
                            },
                            '& p': {
                                color: '#07B4BB',
                                fontSize: { lg: '14px', md: '14px', sm: '14px', xs: '12px', },
                                fontWeight: '500',
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                            },
                            '& span': {
                                color: '#FFF',
                                position: 'absolute',
                                top: '50%',
                                right: '0',
                                transform: 'translateY(-50%)',
                                width: '40px',
                                height: '40px',
                                border: '1px solid rgb(229 153 125 / 21%)',
                                borderRadius: '0px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: "0.5s ease",
                            },
                        },
                        '&:hover': {
                            '& img': {
                                transform: 'scale(1.03)',
                            },
                            '& span': {
                                background: '#e5997d',
                            },
                        },
                    },
                }}>
                    <Slider {...settings}>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={HeroIcCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (PHP)</Typography>
                                    <Typography variant="h5">Heroic</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={OmiDyCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (React JS)</Typography>
                                    <Typography variant="h5">Omi Day</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={OFCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (wordpress)</Typography>
                                    <Typography variant="h5">Optifly</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={RBCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (YII)</Typography>
                                    <Typography variant="h5">Royalbatch</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={HeroIcCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (PHP)</Typography>
                                    <Typography variant="h5">Heroic</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={OmiDyCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (React JS)</Typography>
                                    <Typography variant="h5">Omi Day</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={OFCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (wordpress)</Typography>
                                    <Typography variant="h5">Optifly</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='workitem'>
                            <Box className='workbox'>
                                <Box className='workboximg'>
                                    <img src={RBCover} alt="" />
                                </Box>
                                <Box className='workboxtext'>
                                    <Typography variant="body1">web design (YII)</Typography>
                                    <Typography variant="h5">Royalbatch</Typography>
                                    <Typography variant="span">
                                        <CallMadeRoundedIcon />
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Slider>
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