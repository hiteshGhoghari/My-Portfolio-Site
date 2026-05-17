import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import PSImg from '../../assets/image/adobe-photoshop.png'
import FigmaImg from '../../assets/image/figma.png'
import XDImg from '../../assets/image/xd.png'
import HTMLImg from '../../assets/image/html-5.png'
import CSSImg from '../../assets/image/css-3.png'
import BSImg from '../../assets/image/bootstrap.png'
import JQImg from '../../assets/image/jquery.png'
import JSImg from '../../assets/image/js.png'
import RJSImg from '../../assets/image/reactjs.png'
import VJSImg from '../../assets/image/vuejs.png'
import MuiImg from '../../assets/image/materialui.png'
import TailwindImg from '../../assets/image/tailwindcss.png'
import SASSImg from '../../assets/image/sass.png'
import AntImg from '../../assets/image/ant.png'
import ShapeCircle from '../../assets/image/section-bg-shape-1.png'
import AngularImg from '../../assets/image/angular.png'
/* ── Skill data grouped by category ── */

const categories = [
    { key: 'all', label: 'All' },
    { key: 'design', label: 'Design' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'frameworks', label: 'Frameworks & UI' },
]
const skillGroups = [
    {
        key: 'design',
        label: 'Design Tools',
        skills: [
            { name: 'Adobe Photoshop', img: PSImg },
            { name: 'Figma', img: FigmaImg },
            { name: 'Adobe XD', img: XDImg },
        ],
    },
    {
        key: 'frontend',
        label: 'Frontend Languages',
        skills: [
            { name: 'HTML5', img: HTMLImg },
            { name: 'CSS3', img: CSSImg },
            { name: 'JavaScript', img: JSImg },
            { name: 'jQuery', img: JQImg },
            { name: 'SASS', img: SASSImg },
        ],
    },
    {
        key: 'frameworks',
        label: 'Frameworks & UI Libraries',
        skills: [
            { name: 'React JS', img: RJSImg },
            { name: 'Vue JS', img: VJSImg },
            { name: 'Angular', img: AngularImg },
            { name: 'Bootstrap', img: BSImg },
            { name: 'Tailwind CSS', img: TailwindImg },
            { name: 'Material UI', img: MuiImg },
            { name: 'ANT Design', img: AntImg },
        ],
    },
]
/* ── Single skill card ── */

const SkillCard = ({ name, img }) => (
    <Box sx={{
        background: 'rgba(255,255,255,0.03)',
        border: '0.5px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: { xs: '16px 8px 14px', sm: '20px 10px 16px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'default',
        transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
        height: '100%',
        '&:hover': {
            background: 'rgba(255,255,255,0.065)',
            borderColor: '#e5997d',
            transform: 'translateY(-3px)',
            '& .skill-label': { color: 'rgba(255,255,255,0.95)' },
            '& .skill-icon-wrap': { borderColor: 'rgba(229,153,125,0.4)' },
        },
    }}>
        <Box className="skill-icon-wrap" sx={{
            width: { xs: '48px', sm: '54px' },
            height: { xs: '48px', sm: '54px' },
            borderRadius: '12px',
            background: 'rgba(0,0,0,0.4)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0,
            transition: 'border-color 0.25s',
        }}>
            <Box
                component="img"
                src={img}
                alt={name}
                sx={{
                    width: { xs: '28px', sm: '32px' },
                    height: { xs: '28px', sm: '32px' },
                    objectFit: 'contain',
                    transition: 'transform 0.25s',
                    '&:hover': { transform: 'scale(1.1)' },
                }}
            />
        </Box>
        <Typography className="skill-label" sx={{
            fontSize: { xs: '10px', sm: '11px' },
            color: 'rgba(255,255,255,0.42)',
            textAlign: 'center',
            lineHeight: 1.3,
            transition: 'color 0.25s',
        }}>
            {name}
        </Typography>
    </Box>
)



/* ── Section group with label ── */

const SkillSection = ({ group }) => (
    <Box sx={{ mb: '32px' }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            mb: '16px',
        }}>
            <Typography sx={{
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                whiteSpace: 'nowrap',
            }}>
                {group.label}
            </Typography>
            <Box sx={{
                flex: 1,
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
            }} />
        </Box>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
                xs: 'repeat(3, 1fr)',
                sm: 'repeat(4, 1fr)',
                md: 'repeat(5, 1fr)',
                lg: 'repeat(6, 1fr)',
                xl: 'repeat(7, 1fr)',
            },
            gap: { xs: '8px', sm: '10px', md: '12px' },
        }}>
            {group.skills.map((skill, i) => (
                <SkillCard key={i} name={skill.name} img={skill.img} />
            ))}
        </Box>
    </Box>
)



/* ── Main component ── */

const MySkills = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const visibleGroups = activeFilter === 'all'
        ? skillGroups
        : skillGroups.filter(g => g.key === activeFilter)
    return (
        <>
            <Box sx={{
                background: '#0f1217',
                padding: { lg: '100px 0', md: '80px 0', sm: '60px 0', xs: '50px 0' },
                position: 'relative',
                zIndex: '1',
                '&:after': {
                    content: "''",
                    backgroundImage: `url(${ShapeCircle})`,
                    width: '250px',
                    height: '250px',
                    display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },
                    position: 'absolute',
                    top: '-150px',
                    right: '60px',
                    zIndex: '-1',
                    opacity: '0.1',
                    backgroundPosition: 'left top',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    animation: 'stonerotate 10s infinite linear',
                    animationDirection: 'alternate',
                },
            }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        textAlign: 'center',
                        mb: { lg: '56px', md: '48px', sm: '40px', xs: '32px' },
                    }}>
                        <Typography sx={{
                            fontFamily: '"DM Mono", monospace',
                            fontSize: '12px',
                            letterSpacing: '0.2em',
                            color: '#555',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                            display: 'block',
                        }}>
                            What I work with
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { lg: '54px', md: '46px', sm: '38px', xs: '30px' },
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            color: 'transparent',
                            WebkitTextStroke: '1px #de9b7e',
                        }}>
                            My{' '}
                            <Box component="span" sx={{
                                position: 'relative',
                                color: 'transparent',
                                WebkitTextStroke: '1px #0abf8e',
                            }}>
                                Skills
                            </Box>
                        </Typography>
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
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: { xs: '6px', sm: '8px' },
                        mb: { xs: '28px', sm: '36px', lg: '44px' },
                    }}>
                        {categories.map((cat) => (
                            <Box
                                key={cat.key}
                                onClick={() => setActiveFilter(cat.key)}
                                sx={{
                                    background: activeFilter === cat.key
                                        ? 'rgba(229,153,125,0.12)'
                                        : 'rgba(255,255,255,0.04)',
                                    border: activeFilter === cat.key
                                        ? '0.5px solid #e5997d'
                                        : '0.5px solid rgba(255,255,255,0.1)',
                                    borderRadius: '20px',
                                    padding: { xs: '5px 12px', sm: '6px 16px' },
                                    fontSize: { xs: '11px', sm: '12px' },
                                    color: activeFilter === cat.key
                                        ? '#e5997d'
                                        : 'rgba(255,255,255,0.45)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    userSelect: 'none',
                                    '&:hover': {
                                        borderColor: 'rgba(229,153,125,0.5)',
                                        color: '#e5997d',
                                    },
                                }}
                            >
                                {cat.label}
                            </Box>
                        ))}
                    </Box>
                    <Box>
                        {visibleGroups.map((group) => (
                            <SkillSection key={group.key} group={group} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}



export default MySkills