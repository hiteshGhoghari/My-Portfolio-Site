import React from 'react'
import { Box, Typography } from '@mui/material'
import FlareIcon from '@mui/icons-material/Flare';
const SliderSkill = () => {
    return (
        <>
            <Box sx={{
                background: "#000",
                padding: "50px 0 40px 0",
                overflow: 'hidden',
            }}>
                <Box sx={{
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    display: 'inline-block',
                    animation: 'marqueeanimation 45s linear infinite',

                    '& .sliderLogo': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',

                        '& .sliderLogoItem': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& p': {
                                color: 'transparent',
                                '-webkit-text-stroke': '1px #fff',
                                fontSize: "50px",
                                fontWeight: '700',
                                whiteSpace: 'nowrap',
                                textTransform: 'uppercase',
                            },
                            '& svg': {
                                color: '#fff',
                                fontSize: '40px',
                            },
                        },
                    }
                }}>
                    <Box className="sliderLogo">
                        <Box className="sliderLogoItem">
                            <Typography>Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Web Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>UI/UX Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Front-End Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Web Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>UI/UX Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Front-End Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Web Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>UI/UX Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Front-End Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Web Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>UI/UX Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Front-End Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Web Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>UI/UX Designer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                        <Box className="sliderLogoItem">
                            <Typography>Front-End Developer</Typography>
                        </Box>
                        <Box className="sliderLogoItem">
                            <FlareIcon />
                        </Box>
                    </Box>
                </Box >
            </Box>
        </>
    )
}
export default SliderSkill