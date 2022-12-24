import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import './Banner.scss';


const Banner = () => {
    return (
        <div style={{ backgroundColor: '#feeae9' }}>
            <Carousel>
                <Carousel.Item>
                    <div className='banner-container'>
                        <div>
                            <img className='d-block w-100' src={slide1} alt="" />
                        </div>
                        <div className='banner-content'>
                            <h2><span className='textBanner' style={{ color: '#62a403' }}>BIGGER</span> <span className='text-muted textBanner'>&</span> <br /> <span className='textBanner' style={{ color: '#f95800' }}>BETTER</span> <br /> <span style={{ color: '#3f3d3d' }} >ORGANIC FOOD HERE!!!</span></h2>
                            <p style={{ color: '#424242' }}>Be smart, Eat organic. Why eat unhealthy – when you have organic food</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='banner-container'>
                        <div>
                            <img className='d-block w-100' src={slide2} alt="" />
                        </div>
                        <div className='banner-content'>
                            <h2><span className='textBanner' style={{ color: '#fff' }}>Fresh</span> <span className='text-muted textBanner'>&</span> <br /> <span className='textBanner' style={{ color: '#f95800' }}>Organic</span> <br /> <span style={{ color: '#eae7e7' }} >NEVER EAT CHEMICALS!!!</span></h2>
                            <p style={{ color: '#9fa6aa' }}>Be smart, Eat organic. Why eat unhealthy – when you have organic food</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;