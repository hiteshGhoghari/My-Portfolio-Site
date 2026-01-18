import { Box, Container, Grid2, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import ShapeCircle from '../../assets/image/section-bg-shape-6.png';


const MyExperience = () => {
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
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
                            <Box sx={{
                                background: 'linear-gradient(180deg, #083537 0%, #000000 100%)',
                                borderRadius: '1000px',
                                padding: { lg: '150px 60px', md: '150px 60px', sm: '150px 25px', xs: '100px 25px', },
                                textAlign: 'center',
                                width: { lg: 'auto', md: 'auto', sm: '400px', xs: '270px', },
                                margin: { lg: '0', md: '0', sm: '0 auto', xs: '0 auto 30px', },

                            }}>
                                <Typography sx={{
                                    color: '#e5997d',
                                    fontWeight: '700',
                                    fontSize: { lg: '120px', md: '120px', sm: '90px', xs: '90px', },
                                }} variant="h3">7+</Typography>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: { lg: '40px', md: '40px', sm: '36px', xs: '32px', },
                                    lineHeight: 'normal',
                                }} variant="body1">Years Of <br />
                                    experience</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
                            <Box sx={{
                                paddingLeft: { lg: '150px', md: '50px', sm: '0px', xs: '0px', },
                                '& h4': {
                                    color: "#07B4BB",
                                    fontSize: "26px",
                                    fontWeight: '600',
                                },
                            }}>
                                <Box sx={{
                                    textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'center', },
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
                                    <Typography variant="h2">My  <Typography sx={{
                                        color: "#fff",
                                    }} variant="span">Experience</Typography></Typography>
                                    <Box sx={{
                                        position: 'relative',
                                        display: 'block',
                                        width: '24px',
                                        height: '2px',
                                        backgroundColor: '#e5997d',
                                        margin: '20px 0 0 33px',
                                        margin: { lg: '20px 0 0 33px', md: '20px 0 0 33px', sm: '20px auto', xs: '20px auto', },
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
                                    paddingTop: { lg: '50px', md: '50px', sm: '50px', xs: '30px', },
                                    '& ul': {
                                        padding: '0',
                                        margin: '0',
                                        '& li': {
                                            justifyContent: 'space-between',
                                            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column', },
                                            padding: "20px 0",
                                            color: "#fff",
                                            alignItems: 'flex-start',
                                            borderBottom: "1px solid rgb(7 180 187 / 30%)",
                                            '&:after': {
                                                content: "''",
                                                position: 'absolute',
                                                left: 0,
                                                bottom: 0,
                                                width: 0,
                                                backgroundColor: '#07B4BB',
                                                height: '1px',
                                                opacity: 0,
                                                transition: 'all .5s ease',
                                            },
                                            '& h5': {
                                                fontSize: "20px",
                                                marginBottom: "10px",
                                                transition: '1s',
                                                position: 'relative',
                                                left: '0',
                                            },
                                            '& p': {
                                                color: "#9f9f9f",
                                            },
                                            '& span': {
                                                color: "#9f9f9f",
                                                transition: '1s',
                                                position: 'relative',
                                                right: '0',
                                            },
                                            '&:hover': {
                                                '&:after': {
                                                    width: '100%',
                                                    opacity: 1,
                                                },
                                                '& h5': {
                                                    left: { lg: '1.5rem', md: '1.5rem', sm: '1.5rem', xs: '0', },
                                                },
                                                '& span': {
                                                    right: { lg: '1.5rem', md: '1.5rem', sm: '1.5rem', xs: '0', },
                                                },
                                            },
                                        },
                                    },
                                }}>
                                    <List>
                                        <ListItem>
                                            <Box><Typography variant="h5">Logix Built Solutions Limited</Typography>
                                                <Typography variant="body1">Web Design Lead</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="span">2020 - Present</Typography>
                                            </Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box><Typography variant="h5">Tecocraft Infusion PVT LTD.</Typography>
                                                <Typography variant="body1">Sr. Web Design</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="span">2019 - 2020</Typography>
                                            </Box>
                                        </ListItem>
                                        <ListItem>
                                            <Box><Typography variant="h5">Deep Technologies</Typography>
                                                <Typography variant="body1">Web Designer</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="span">2018 - 2019</Typography>
                                            </Box>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box >
        </>
    )
}

export default MyExperience