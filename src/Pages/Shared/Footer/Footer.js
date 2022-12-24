import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <Row>
                    <Col sm={12} md={3}>
                        <img width='50%' src={logo} alt="" />
                        <p className='mt-2'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                        <ul className='d-flex m-0 p-0'>
                            <li className='footer-icon'><i className="fab fa-instagram"></i></li>
                            <li className='footer-icon'><i className="fab fa-twitter"></i></li>
                            <li className='footer-icon'><i className="fas fa-globe"></i></li>
                            <li className='footer-icon'><i className="fab fa-whatsapp"></i></li>
                        </ul>
                    </Col>
                    <Col sm={12} md={2}>
                        <h4>Links</h4>
                        <ul>
                            <li><i className="fas fa-carrot"></i> Home</li>
                            <li><i className="fas fa-carrot"></i> Service</li>
                            <li><i className="fas fa-carrot"></i> About us</li>
                            <li><i className="fas fa-carrot"></i> Testimonials</li>
                            <li><i className="fas fa-carrot"></i> News</li>
                            <li><i className="fas fa-carrot"></i> FQA</li>
                            <li><i className="fas fa-carrot"></i> About us</li>

                        </ul>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4>Information</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> 30 Commercial Road
                                Fratton, Australia</li>
                            <li><i className="fas fa-phone-alt"></i> 1-888-452-1505</li>
                            <h6>Open Hours:</h6>
                            <li>Mon – Sat: 8 am – 5 pm,
                                Sunday: Close</li>
                            <li>Tue – Wed: 10 am – 8 pm,
                                Sunday: Close</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h4>Area</h4>
                        <iframe title='area-detect' style={{ opacity: 0.8 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20657.99826665024!2d90.3973488249327!3d23.75263284504833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad339cb5%3A0x20c70986185ad2ba!2sMogbazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1650434266240!5m2!1sen!2sbd" width="100%" height='250px' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </div>
            <div className='text-center footer-under'>
                <p>&copy;  2022 All Right Reserve by Organic</p>
            </div>
        </>
    );
};

export default Footer;