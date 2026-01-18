import React from 'react'
import { Box, Container, Button, Grid2, Link, Typography, TextField } from '@mui/material'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import HomeImg from '../../assets/image/home-img.svg';
import MailImg from '../../assets/image/mail-img.svg';
import PhoneImg from '../../assets/image/phone-img.svg';
import ShapeCircle from '../../assets/image/section-bg-shape-8.png';


const ContactUs = () => {
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
                        <Typography variant="h2">Lets Work <Typography sx={{
                            color: "#fff",
                        }} variant="span">Together!</Typography></Typography>
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
                        marginBottom: "50px",
                        '& .contact-info': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: "20px",
                            flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column', },
                            background: { lg: 'transparent', md: 'transparent', sm: 'transparent', xs: '#000', },
                            padding: { lg: '0', md: '0', sm: '0', xs: '40px 20px', },
                            border: { lg: '0', md: '0', sm: '0', xs: '1px solid rgb(7 180 187 / 30%)', },

                            '& span': {
                                width: "60px",
                                flex: "0 0 60px",
                                height: "60px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #07B4BB',
                                borderRadius: "0px",
                                background: '#00191a',
                            },
                            '& h4': {
                                color: '#FFF',
                                fontSize: '22px',
                                fontWeight: '400',
                                marginBottom: "8px",
                                textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center', },
                            },
                            '& p': {
                                color: '#ADADAD',
                                fontSize: '16px',
                                fontWeight: '300',
                                '& a': {
                                    color: '#ADADAD',
                                    textDecoration: "none",
                                },
                            },
                        },
                    }}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                                <Box className='contact-info'>
                                    <Typography variant="span">
                                        <img src={HomeImg} alt="" />
                                    </Typography>
                                    <Box>
                                        <Typography variant="h4">Contact Info</Typography>
                                        <Typography>Surat, Gujarat, India</Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                                <Box className='contact-info'>
                                    <Typography variant="span">
                                        <img src={MailImg} alt="" />
                                    </Typography>
                                    <Box>
                                        <Typography variant="h4">Email Address</Typography>
                                        <Typography><Link href="mailto:hitesh.ghoghari007@gmail.com">hitesh.ghoghari007@gmail.com</Link></Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
                                <Box className='contact-info'>
                                    <Typography variant="span">
                                        <img src={PhoneImg} alt="" />
                                    </Typography>
                                    <Box>
                                        <Typography variant="h4">Phone</Typography>
                                        <Typography><Link href="tel:+(91) 8530 309 370">+(91) 8530 309 370</Link></Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                    <Box sx={{
                        position: 'relative',
                    }}>
                        <Box sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: "0px",
                            border: "1px solid rgb(7 180 187 / 30%)",
                            width: "100%",
                            zIndex: "9",
                            padding: "32px",
                            color: "#fff",
                            background: "#000",
                        }}>
                            <Box sx={{
                                '& .MuiFormLabel-root': {
                                    color: '#fff',
                                    '&.Mui-focused': {
                                        color: '#fff',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    border: '1px solid rgb(7 173 180 / 41%)',
                                    borderRadius: "0px",
                                    '&:after': {
                                        display: 'none',
                                    },
                                    '&:before': {
                                        display: 'none',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#ADADAD',
                                    },
                                },
                            }}>
                                <Grid2 container spacing={4}>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                id="filled-basic"
                                                label="Name"
                                                variant="filled"
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                id="filled-basic"
                                                label="Subject"
                                                variant="filled"
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                id="filled-basic"
                                                label="Email"
                                                variant="filled"
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                id="filled-basic"
                                                label="Phone"
                                                variant="filled"
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={5}
                                                id="filled-basic"
                                                label="Message..."
                                                variant="filled"
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                        <Box sx={{
                                            textAlign: 'center',
                                        }}>
                                            <Button sx={{
                                                background: "transparent",
                                                color: "#e5997d",
                                                border: "1px solid #e5997d",
                                                borderRadius: "0",
                                                padding: { lg: "10px 28px", md: "6px 22px" },
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                textTransform: 'capitalize',
                                                boxShadow: 'none',
                                                transition: 'all 0.4s',
                                                transitionTimingFunction: 'cubic-bezier(0.5, 3, 0, 1)',
                                                '&:hover': {
                                                    color: '#fff',
                                                    background: '#e5997d',
                                                    transform: 'skewX(-15deg)',
                                                },
                                            }} variant="contained" className='theme-btn'>
                                                Send Message  <CallMadeRoundedIcon sx={{ marginLeft: '4px' }} />
                                            </Button>
                                        </Box>
                                    </Grid2>
                                </Grid2>
                            </Box>
                        </Box>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default ContactUs