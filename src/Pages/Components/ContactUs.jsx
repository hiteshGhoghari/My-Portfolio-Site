import { useState } from "react";
import { Box, Container, Button, Grid2, Link, Typography, TextField } from '@mui/material'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import HomeImg from '../../assets/image/home-img.svg';
import MailImg from '../../assets/image/mail-img.svg';
import PhoneImg from '../../assets/image/phone-img.svg';
import ShapeCircle from '../../assets/image/section-bg-shape-8.png';
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            let val = value;

            // Allow only digits and +
            val = val.replace(/[^\d+]/g, '');

            // Allow + only at start and only once
            if (val.includes('+')) {
                val = '+' + val.replace(/\+/g, '');
            }

            // Limit digits to 15 (ignore +)
            const digits = val.replace(/\D/g, '');
            if (digits.length > 15) {
                val = val.startsWith('+')
                    ? '+' + digits.slice(0, 15)
                    : digits.slice(0, 15);
            }

            setFormData(prev => ({
                ...prev,
                phone: val,
            }));

            // Clear error on typing
            if (val.length > 0) {
                setErrors(prev => ({ ...prev, phone: '' }));
            }

            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        if (value.trim()) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };




    const validateForm = () => {
        let tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = "Subject is required";
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            tempErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone)) {
            tempErrors.phone = "Enter a valid phone number";
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message is required";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };


    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // ❌ stop if validation fails
        }

        setLoading(true);

        emailjs
            .send(
                "service_r0k0nuo",
                "template_45x21o1",
                {
                    name: formData.name,
                    subject: formData.subject,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                "QEXNybz-zt3Ix4ane"
            )
            .then(() => {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    subject: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setErrors({});
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message!");
                setLoading(false);
            });
    };

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
                            flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'row', },
                            background: { lg: 'transparent', md: 'transparent', sm: 'transparent', xs: '#000', },
                            padding: { lg: '0', md: '0', sm: '0', xs: '15px 15px', },
                            border: { lg: '0', md: '0', sm: '0', xs: '1px solid rgb(7 180 187 / 30%)', },

                            '& span': {
                                width: { lg: '60px', md: '60px', sm: '60px', xs: '40px', },
                                flex: { lg: '0 0 60px', md: '0 0 60px', sm: '0 0 60px', xs: '0 0 40px', },
                                height: { lg: '60px', md: '60px', sm: '60px', xs: '40px', },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #07B4BB',
                                borderRadius: "0px",
                                background: '#00191a',
                            },
                            '& h4': {
                                color: '#FFF',
                                fontSize: { lg: '22px', md: '22px', sm: '20px', xs: '20px', },
                                fontWeight: '400',
                                marginBottom: { lg: '8px', md: '8px', sm: '8px', xs: '0', },
                                textAlign: { lg: 'left', md: 'left', sm: 'center', xs: 'left', },
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
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'transparent',

                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },

                                    '&.Mui-focused': {
                                        backgroundColor: 'transparent',
                                    },

                                    '& input': {
                                        color: '#ADADAD',

                                        '&:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px #000 inset',
                                            WebkitTextFillColor: '#ADADAD',
                                            transition: 'background-color 5000s ease-in-out 0s',
                                        },
                                    },
                                },
                                '& .MuiFormHelperText-root': {
                                    marginInline: '0',
                                },
                            }}>
                                <Grid2 container spacing={4}>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                variant="filled"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                error={!!errors.name}
                                                helperText={errors.name}
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                variant="filled"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                error={!!errors.subject}
                                                helperText={errors.subject}
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                variant="filled"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                                helperText={errors.email}
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                label="Phone"
                                                variant="filled"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                error={!!errors.phone}
                                                helperText={errors.phone}
                                                type="tel" // 👈 IMPORTANT
                                                inputProps={{
                                                    inputMode: 'numeric',
                                                    pattern: '[0-9]*',
                                                }}
                                                sx={{
                                                    '& input': {
                                                        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                                            WebkitAppearance: 'none',
                                                            margin: 0,
                                                        },
                                                        MozAppearance: 'textfield',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                        <Box className='contactfiled'>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={5}
                                                label="Message..."
                                                variant="filled"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={!!errors.message}
                                                helperText={errors.message}
                                            />
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Button
                                                onClick={handleSubmit}
                                                disabled={loading}
                                                sx={{
                                                    background: "transparent",
                                                    color: "#e5997d",
                                                    border: "1px solid #e5997d",
                                                    borderRadius: "0",
                                                    padding: { lg: "10px 28px", md: "6px 22px" },
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    textTransform: "capitalize",
                                                    boxShadow: "none",
                                                    transition: "all 0.4s",
                                                    transitionTimingFunction:
                                                        "cubic-bezier(0.5, 3, 0, 1)",
                                                    "&:hover": {
                                                        color: "#fff",
                                                        background: "#e5997d",
                                                        transform: "skewX(-15deg)",
                                                    },
                                                    '&.Mui-disabled': {
                                                        color: '#fff',
                                                    },
                                                }}
                                            >
                                                {loading ? "Sending..." : "Send Message"}
                                                <CallMadeRoundedIcon sx={{ ml: 1 }} />
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