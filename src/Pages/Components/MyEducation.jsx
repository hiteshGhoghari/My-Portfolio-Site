import React from 'react'
import { Box, Container, Grid2, Typography } from '@mui/material'



const MyEducation = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                zIndex: "1",
                background: "#0f1217",
                padding: { lg: '100px 0', md: '100px 0', sm: '50px 0', xs: '50px 0', },

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
                        }} variant="span">Education</Typography></Typography>
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
                    <Box>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: "0px",
                                    width: "100%",
                                    height: '200px',
                                    zIndex: "9",
                                    padding: "25px",
                                    color: "#fff",
                                    '& h3': {
                                        color: '#07B4BB',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                    },
                                    '& h4': {
                                        fontSize: { lg: '24px', md: '24px', sm: '20px', xs: '20px', },
                                        fontWeight: "bold",
                                        textTransform: 'uppercase',
                                        padding: "20px 0",
                                    },
                                    '& p': {

                                    },
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        inset: '2px',
                                        background: '#000',
                                        borderRadius: '0px',
                                        zIndex: '-1',
                                    },
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        transform: 'translate(-50%, -50%)',
                                        background: 'radial-gradient(#07B4BB, transparent, transparent)',
                                        width: '200%',
                                        height: '200%',
                                        opacity: '1',
                                        transition: '0.5s, top 0s, left 0s',
                                        borderRadius: '0px',
                                        zIndex: '-1',

                                    },
                                    '&:hover': {
                                        '&:before': {
                                            background: 'radial-gradient(#e5997d, transparent, transparent)',
                                        },
                                        '& h3': {
                                            color: '#e5997d',
                                        },
                                    },
                                }}>
                                    <Typography variant="h3">2015 - 2017</Typography>
                                    <Typography variant="h4">MCA - Gujarat University</Typography>
                                    <Typography>Surat, India</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: "0px",
                                    width: "100%",
                                    height: '200px',
                                    zIndex: "9",
                                    padding: "25px",
                                    color: "#fff",
                                    '& h3': {
                                        color: '#07B4BB',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                    },
                                    '& h4': {
                                        fontSize: { lg: '24px', md: '24px', sm: '20px', xs: '20px', },
                                        fontWeight: "bold",
                                        textTransform: 'uppercase',
                                        padding: "20px 0",
                                    },
                                    '& p': {

                                    },
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        inset: '2px',
                                        background: '#000',
                                        borderRadius: '0px',
                                        zIndex: '-1',
                                    },
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        top: '0',
                                        left: { lg: '570px', md: '570px', sm: '350px', xs: '350px', },
                                        transform: 'translate(-50%, -50%)',
                                        background: 'radial-gradient(#07B4BB, transparent, transparent)',
                                        width: '200%',
                                        height: '200%',
                                        opacity: '1',
                                        transition: '0.5s, top 0s, left 0s',
                                        borderRadius: '0px',
                                        zIndex: '-1',

                                    },
                                    '&:hover': {
                                        '&:before': {
                                            background: 'radial-gradient(#e5997d, transparent, transparent)',
                                        },
                                        '& h3': {
                                            color: '#e5997d',
                                        },
                                    },
                                }}>
                                    <Typography variant="h3">2012 - 2015</Typography>
                                    <Typography variant="h4">BCA - VNSGU</Typography>
                                    <Typography>Surat, India</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: "0px",
                                    width: "100%",
                                    height: '200px',
                                    zIndex: "9",
                                    padding: "25px",
                                    color: "#fff",
                                    '& h3': {
                                        color: '#07B4BB',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                    },
                                    '& h4': {
                                        fontSize: { lg: '24px', md: '24px', sm: '20px', xs: '20px', },
                                        fontWeight: "bold",
                                        textTransform: 'uppercase',
                                        padding: "20px 0",
                                    },
                                    '& p': {

                                    },
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        inset: '2px',
                                        background: '#000',
                                        borderRadius: '0px',
                                        zIndex: '-1',
                                    },
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0px',
                                        transform: 'translate(-50%, 50%)',
                                        background: 'radial-gradient(#07B4BB, transparent, transparent)',
                                        width: '200%',
                                        height: '200%',
                                        opacity: '1',
                                        transition: '0.5s, top 0s, left 0s',
                                        borderRadius: '0px',
                                        zIndex: '-1',

                                    },
                                    '&:hover': {
                                        '&:before': {
                                            background: 'radial-gradient(#e5997d, transparent, transparent)',
                                        },
                                        '& h3': {
                                            color: '#e5997d',
                                        },
                                    },
                                }}>
                                    <Typography variant="h3">2012</Typography>
                                    <Typography variant="h4">HSC - Gujarat</Typography>
                                    <Typography>Surat, India</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <Box sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: "0px",
                                    width: "100%",
                                    height: '200px',
                                    zIndex: "9",
                                    padding: "25px",
                                    color: "#fff",
                                    '& h3': {
                                        color: '#07B4BB',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                    },
                                    '& h4': {
                                        fontSize: { lg: '24px', md: '24px', sm: '20px', xs: '20px', },
                                        fontWeight: "bold",
                                        textTransform: 'uppercase',
                                        padding: "20px 0",
                                    },
                                    '& p': {

                                    },
                                    '&:after': {
                                        content: "''",
                                        position: 'absolute',
                                        inset: '2px',
                                        background: '#000',
                                        borderRadius: '0px',
                                        zIndex: '-1',
                                    },
                                    '&:before': {
                                        content: "''",
                                        position: 'absolute',
                                        bottom: '0',
                                        left: { lg: '570px', md: '570px', sm: '350px', xs: '350px', },
                                        transform: 'translate(-50%, 50%)',
                                        background: 'radial-gradient(#07B4BB, transparent, transparent)',
                                        width: '200%',
                                        height: '200%',
                                        opacity: '1',
                                        transition: '0.5s, top 0s, left 0s',
                                        borderRadius: '0px',
                                        zIndex: '-1',
                                    },
                                    '&:hover': {
                                        '&:before': {
                                            background: 'radial-gradient(#e5997d, transparent, transparent)',
                                        },
                                        '& h3': {
                                            color: '#e5997d',
                                        },
                                    },
                                }}>
                                    <Typography variant="h3">2010</Typography>
                                    <Typography variant="h4">SSC - Gujarat</Typography>
                                    <Typography>Surat, India</Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Container >
            </Box >
        </>
    )
}

export default MyEducation