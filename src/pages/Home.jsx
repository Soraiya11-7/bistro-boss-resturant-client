import React from 'react';
import Banner from '../components/Home/Banner';
import Category from '../Category/Category';
import PopularMenu from '../components/Home/PopularMenu';
import Featured from '../components/Home/Featured';
import Testimonials from '../components/Home/Testimonials';
import { Helmet } from 'react-helmet-async';
// import EmailJs from '../components/EmailJs';
// import Skills from '../components/Skills';
// import Education from '../components/Education';
// import HeroSection from '../components/HeroSection';
// import AboutMe from '../components/AboutMe';
// import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            {/* <Skills></Skills> */}
            {/* <HeroSection></HeroSection> */}
            {/* <AboutMe></AboutMe>
            <Education></Education>
            <Projects></Projects>
            <EmailJs></EmailJs> */}
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;