import React, { useState } from 'react'
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import BrandLogo from '../../assets/image/brand-logo.svg';
import BrandLogo from '../../assets/image/Logo.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Services', 'Portfolio', 'Contact'];



const Header = () => {
    const [mobileOpen, setMobileOpen] = useState();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <Link to="/">
                            {item}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Box sx={{
                padding: "15px 20px",
                borderLeft: '1px solid #414141',
                '& button': {
                    background: "transparent",
                    color: "#07B4BB",
                    border: "1px solid #07B4BB",
                    borderRadius: "0",
                    fontSize: '16px',
                    fontWeight: 600,
                    boxShadow: 'none',
                    padding: "8px 20px",
                    width: "100%",
                    boxShadow: 'none',
                    transition: 'all 0.4s',
                    textTransform: 'capitalize',
                    transitionTimingFunction: 'cubic-bezier(0.5, 3, 0, 1)',
                    '&:hover': {
                        color: '#fff',
                        background: '#07B4BB',
                        transform: 'skewX(-15deg)',
                    },
                },
            }} className='cotnact-btn'>
                <Button variant="contained" color="success" className='theme-btn'>
                    Hire Me!
                </Button>
            </Box>
        </Box>
    );
    return (
        <>
            <Box sx={{
                '& nav': {
                    boxShadow: 'none',
                    background: '#000',
                    position: 'inherit',
                    '& .MuiToolbar-root': {
                        minHeight: 'auto',
                        padding: { lg: '0 60px', md: '0 20px', sm: '0 20px', xs: '0 20px' },
                        borderBottom: '1px solid #414141',
                        height: { lg: "98px", md: "75px", },
                    },
                },
            }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <Box sx={{
                            display: { md: 'none', sm: 'flex', xs: 'flex', },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '15px 0',
                        }}>
                            <Box sx={{
                                '& a': {
                                    display: 'block',
                                    lineHeight: '0',
                                    width: { lg: '160px', md: '140px', sm: '120px', xs: '110px', },
                                    '& img': {
                                        width: '100%',
                                    },
                                },
                            }} className='logo'>
                                <Link to="/"><img src={BrandLogo} alt="Logo" /> </Link>
                            </Box>
                            <IconButton
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: { md: 'none' },
                                    color: "#fff",
                                    padding: "0",
                                    '& svg': {
                                        fontSize: "32px"
                                    },
                                }}
                            >
                                <MenuRoundedIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "100%" } }}>
                            <Box sx={{
                                padding: { lg: "30px 30px 30px 0", md: "20px 20px 20px 0" },
                                borderRight: '1px solid #414141',
                                '& a': {
                                    display: 'block',
                                    lineHeight: '0',
                                    width: { lg: '160px', md: '140px', sm: '140px', xs: '140px', },
                                    '& img': {
                                        width: '100%',
                                    },
                                },
                            }} className='logo'>
                                <Link to="/"><img src={BrandLogo} alt="Logo" /> </Link>
                            </Box>
                            <Box sx={{
                                '& a': {
                                    color: '#fff',
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    padding: '10px',
                                    marginRight: { lg: '20px', md: '10px', },
                                    '&:hover': {
                                        color: '#EB9C7F',
                                    },
                                },
                            }} className='menu'>
                                {navItems.map((item) => (
                                    <Link to="/" key={item}>
                                        {item}
                                    </Link>
                                ))}
                            </Box>
                            <Box sx={{
                                padding: { lg: "24px 0px 24px 30px", md: "17px 0px 17px 20px" },
                                borderLeft: '1px solid #414141',
                                '& button': {
                                    background: "transparent",
                                    color: "#07B4BB",
                                    border: "1px solid #07B4BB",
                                    borderRadius: "0",
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
                                },
                            }} className='cotnact-btn'>
                                <Button variant="contained" color="success" className='theme-btn'>
                                    Hire Me!
                                </Button>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            background: '#181A1C',
                            color: "#fff",
                            '& ul': {
                                padding: '0',
                                '& li': {
                                    borderBottom: "1px solid #414141",
                                    padding: "0",
                                    '& a': {
                                        color: '#fff',
                                        padding: "15px 20px",
                                        width: "100%",
                                    },
                                },
                            },

                        },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
        </>
    )
}

export default Header