import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/h4-banner1.jpg';

const About = () => {
    return (
        <div className='about mt-5'>
            <Container>
                <div className='py-4'>
                    <h2 className='fw-bold text-muted'>Why Choose us?</h2>
                    <p className='text-muted'>Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</p>
                </div>
                <Row className='d-flex align-items-center'>
                    <Col sm={6}>
                        <div className='d-flex align-items-center'>
                            <div className='about-icon'>
                                <i className="fas fa-hand-holding-usd icon"></i>
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='about-icon'>
                                <i className="fas fa-swimmer icon2"></i>
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div className='about-icon'>
                                <i className="fas fa-truck icon"></i>
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='about-icon'>
                                <i className="fas fa-balance-scale icon2"></i>
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img width='80%' className='about-img' src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;