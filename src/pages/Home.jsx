import React from 'react';
import Banner from '../components/Home/Banner';
import Category from '../Category/Category';
import PopularMenu from '../components/Home/PopularMenu';
import Featured from '../components/Home/Featured';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;