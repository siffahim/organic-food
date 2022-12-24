import React from 'react';
import Discount from '../../Discount/Discount';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import Gallery from '../Gallery/Gallery';
import ProductFacility from '../ProductFacility/ProductFacility';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <div className='my-4'>
                <Blogs />
            </div>
            <Courses />
            <div className='my-5'>
                <ProductFacility />
            </div>
            <Discount />
            <About />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;