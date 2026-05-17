import { useState } from "react"
import { Box, Container, Button, Grid2, Link, Typography, TextField } from '@mui/material'
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HomeImg from '../../assets/image/home-img.svg'
import MailImg from '../../assets/image/mail-img.svg'
import PhoneImg from '../../assets/image/phone-img.svg'
import ShapeCircle from '../../assets/image/section-bg-shape-8.png'
import emailjs from "@emailjs/browser"
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
        message: "",
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)



    // Handle input change

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'phone') {
            let val = value
            val = val.replace(/[^\d+]/g, '')
            if (val.includes('+')) {
                val = '+' + val.replace(/\+/g, '')
            }
            const digits = val.replace(/\D/g, '')
            if (digits.length > 15) {
                val = val.startsWith('+')
                    ? '+' + digits.slice(0, 15)
                    : digits.slice(0, 15)
            }
            setFormData(prev => ({
                ...prev,
                phone: val,
            }))
            if (val.length > 0) {
                setErrors(prev => ({ ...prev, phone: '' }))
            }
            return
        }
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
        if (value.trim()) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }









    const validateForm = () => {
        let tempErrors = {}
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required"
        }
        if (!formData.subject.trim()) {
            tempErrors.subject = "Subject is required"
        }
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required"
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            tempErrors.email = "Enter a valid email address"
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required"
        } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone)) {
            tempErrors.phone = "Enter a valid phone number"
        }
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required"
        }
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    };





    // Submit form

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        setLoading(true)
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
                alert("Message sent successfully!")
                setFormData({
                    name: "",
                    subject: "",
                    email: "",
                    phone: "",
                    message: "",
                })
                setErrors({})
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                alert("Failed to send message!")
                setLoading(false)
            })
    }



    return (

        <>

            <Box id="contact" sx={{

                background: '#080b0f',
                padding: { lg: '120px 0', md: '100px 0', sm: '80px 0', xs: '60px 0' },
                position: 'relative',
                zIndex: '1',
                overflow: 'hidden',
                
            }}>

                <Container>

                    <Box sx={{

                       textAlign: 'center', marginBottom: { lg: '80px', md: '60px', sm: '48px', xs: '40px' }

                    }}>

                        {/* eyebrow */}
                        <Typography sx={{
                            fontFamily: '"DM Mono", monospace',
                            fontSize: '12px',
                            letterSpacing: '0.2em',
                            color: '#555',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            display: 'block',
                        }}>
                            Get In Touch
                        </Typography>

                        <Typography variant="h2" sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { lg: '54px', md: '46px', sm: '38px', xs: '30px' },
                            fontWeight: 700,
                            color: 'transparent',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            WebkitTextStroke: '1px #de9b7e',
                        }}>
                            Let's{' '}
                            <Box component="span" sx={{
                                position: 'relative',
                                color: 'transparent',
                                WebkitTextStroke: '1px #0abf8e',
                            }}>
                                Work Together!
                            </Box>
                        </Typography>

                        {/* dash decorations */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                        }}>
                            {[28, 14, 28].map((w, i) => (
                                <Box key={i} sx={{
                                    width: `${w}px`,
                                    height: '2px',
                                    borderRadius: '2px',
                                    background: i === 1 ? '#e5997d' : '#0abf8e',
                                }} />
                            ))}
                        </Box>

                    </Box>

                    <Box sx={{

                        marginBottom: "50px",

                        '& .contact-info': {

                            display: 'flex',

                            alignItems: 'center',

                            gap: "12px",

                            flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'row', },

                            background: { lg: 'transparent', md: 'transparent', sm: 'transparent', xs: '#000', },

                            padding: { lg: '0', md: '0', sm: '0', xs: '15px 10px', },

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
                                marginBottom:"0",

                                '& a': {

                                    color: '#ADADAD',

                                    textDecoration: "none",

                                },

                            },

                        },

                    }}>

                        <Grid2 container spacing={{ lg: 3, md: 2.5, sm: 2, xs: 2 }}>
                            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                                <Box className='contact-info' sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: { lg: '32px 24px', md: '28px 20px', sm: '24px 16px', xs: '20px 16px' },
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '16px',
                                   
                                }}>
                                    <Box className="contact-icon" sx={{
                                        width: '50px',
                                        height: '50px',
                                        flexShrink:'0',
                                        borderRadius: '12px',
                                        background: 'rgba(229, 153, 125, 0.1)',
                                        border: '1px solid rgba(229, 153, 125, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <LocationOnIcon sx={{ fontSize: '28px', color: '#e5997d' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            color: '#fff',
                                            mb: '8px',
                                            textAlign: 'left',
                                        }}>
                                            Location
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            lineHeight: 1.6,
                                        }}>
                                            Surat, Gujarat, India
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                                <Box className='contact-info' sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: { lg: '32px 24px', md: '28px 20px', sm: '24px 16px', xs: '20px 16px' },
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '16px',
                                }}>
                                    <Box className="contact-icon" sx={{
                                        width: '50px',
                                        height: '50px',
                                        flexShrink:'0',
                                        borderRadius: '12px',
                                        background: 'rgba(10, 191, 142, 0.1)',
                                        border: '1px solid rgba(10, 191, 142, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <EmailIcon sx={{ fontSize: '28px', color: '#0abf8e' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            color: '#fff',
                                            mb: '8px',
                                            textAlign: 'left',
                                        }}>
                                            Email
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            lineHeight: 1.6,
                                        }}>
                                            <Link href="mailto:ghogharihitesh7@gmail.com" sx={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    color: '#0abf8e',
                                                },
                                            }}>
                                                ghogharihitesh7@gmail.com
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                                <Box className='contact-info' sx={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: { lg: '32px 24px', md: '28px 20px', sm: '24px 16px', xs: '20px 16px' },
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '16px',
                                }}>
                                    <Box className="contact-icon" sx={{
                                        width: '50px',
                                        height: '50px',
                                        flexShrink:'0',
                                        borderRadius: '12px',
                                        background: 'rgba(124, 58, 237, 0.1)',
                                        border: '1px solid rgba(124, 58, 237, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <PhoneIcon sx={{ fontSize: '28px', color: '#7c3aed' }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            color: '#fff',
                                            mb: '8px',
                                            textAlign: 'left',
                                        }}>
                                            Phone
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            fontSize: '14px',
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            lineHeight: 1.6,
                                        }}>
                                            <Link href="tel:+(91) 8530 309 370" sx={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    color: '#7c3aed',
                                                },
                                            }}>
                                                +(91) 8530 309 370
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        </Grid2>

                    </Box>

                    <Box sx={{
                        position: 'relative',
                        mt: { lg: '80px', md: '60px', sm: '50px', xs: '40px' },
                    }}>
                        <Box className="glass-card hero-scale-in" sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            width: "100%",
                            zIndex: "9",
                            padding: { lg: '48px 40px', md: '40px 32px', sm: '32px 24px', xs: '28px 20px' },
                            color: "#fff",
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(229, 153, 125, 0.3)',
                            },
                        }}>

                            <Box sx={{
                                '& .MuiFormLabel-root': {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    '&.Mui-focused': {
                                        color: '#e5997d',
                                    },
                                },
                                '& .MuiInputBase-root': {
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px',
                                    '&:after': {
                                        display: 'none',
                                    },
                                    '&:before': {
                                        display: 'none',
                                    },
                                    '&:hover': {
                                        border: '1px solid rgba(229, 153, 125, 0.3)',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                                        fontSize: '15px',
                                        padding: '16px 14px',
                                    },
                                },
                                '& .MuiFilledInput-root': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '12px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(229, 153, 125, 0.5)',
                                    },
                                    '& input': {
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                                        fontSize: '15px',
                                        padding: '16px 14px',
                                        '&:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px rgba(255, 255, 255, 0.02) inset',
                                            WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)',
                                            transition: 'background-color 5000s ease-in-out 0s',
                                        },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                },
                                '& .MuiFormHelperText-root': {
                                    color: '#e5997d',
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    fontSize: '12px',
                                    marginInline: '0',
                                    marginTop: '4px',
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

                                        <Box sx={{ textAlign: "center", mt: '16px' }}>

                                            <Button

                                                onClick={handleSubmit}

                                                disabled={loading}

                                                className="btn-cv glow-effect"

                                                sx={{

                                                    display: 'inline-flex',

                                                    alignItems: 'center',

                                                    gap: 1,

                                                    px: 4,

                                                    py: 2,

                                                    background: 'linear-gradient(135deg, #e5997d, #d17d5f)',

                                                    color: '#fff',

                                                    borderRadius: '12px',

                                                    textDecoration: 'none',

                                                    fontWeight: 600,

                                                    fontSize: '15px',

                                                    transition: 'all 0.3s ease',

                                                    border: 'none',

                                                    cursor: 'pointer',

                                                    textTransform: 'none',

                                                    minWidth: '160px',

                                                    boxShadow: '0 4px 20px rgba(229, 153, 125, 0.3)',

                                                    '&:hover': {

                                                        transform: 'translateY(-2px)',

                                                        boxShadow: '0 8px 30px rgba(229, 153, 125, 0.4)',

                                                        background: 'linear-gradient(135deg, #e8a68a, #d17d5f)',

                                                    },

                                                    '&.Mui-disabled': {

                                                        background: 'rgba(255, 255, 255, 0.1)',

                                                        color: 'rgba(255, 255, 255, 0.4)',

                                                        boxShadow: 'none',

                                                    },

                                                }}

                                            >

                                                {loading ? "Sending..." : "Send Message"}

                                                {!loading && <CallMadeRoundedIcon sx={{ fontSize: 16, ml: 1 }} />}

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