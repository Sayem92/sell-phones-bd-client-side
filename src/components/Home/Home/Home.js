import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import FAQ from '../FAQ/FAQ';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;