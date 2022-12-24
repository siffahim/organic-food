import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/h4-sale.png';
import img2 from '../../images/landing-layer4.png';
import img3 from '../../images/landing-layer5.png';
const Discount = () => {
    return (
        <Container>
            <div className='pb-4'>
                <h2 className='fw-bold text-muted'>What We Offer for You</h2>
                <p className='text-muted'>Our purpose is to build solutions that remove barriers preventing people from doing their best work, and this is at the heart.</p>
            </div>
            <Row>
                <Col sm={6}>
                    <div className='shadow p-3 rounded'>
                        <Row>
                            <Col sm={6}>
                                <h2>Organic Food</h2>
                                <p>Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.</p>
                                <button className='custom-btn2'>Shop Now</button>
                            </Col>
                            <Col sm={6}>
                                <img width='100px' src={img} alt="" />
                                <img width='100%' src={img2} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='shadow p-3 rounded'>
                        <Row>
                            <Col sm={6}>
                                <h2>Organic Food</h2>
                                <p>Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.</p>
                                <button className='custom-btn'>Shop Now</button>
                            </Col>
                            <Col sm={6}>
                                <img width='100px' src={img} alt="" />
                                <img width='91%' src={img3} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Discount;