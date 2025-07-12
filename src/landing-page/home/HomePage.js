import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage(){
    return(
        <>
        <Awards/>
        <Education/>
        <Pricing/>
        <Stats/>
        <Hero/>
        <Navbar/>
        <OpenAccount/>
        <Footer/>

        </>
    )
}
export default HomePage;