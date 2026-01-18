import React from 'react'
import HeroSection from '../Components/HeroSection';
import WhatIDo from '../Components/WhatIDo';
import MyExperience from '../Components/MyExperience';
import MyEducation from '../Components/MyEducation';
import MySkills from '../Components/MySkills';
import MyRecentWorks from '../Components/MyRecentWorks';
import ContactUs from '../Components/ContactUs';
import SliderSkill from '../Components/SliderSkill';
const Home = () => {
    return (
        <>
            <HeroSection />
            <SliderSkill />
            <WhatIDo />
            <MyExperience />
            <MyEducation />
            <MySkills />
            <MyRecentWorks />
            <ContactUs />
        </>
    )
}
export default Home