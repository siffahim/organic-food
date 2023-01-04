import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img2 from '../../images/download.png';
import img from '../../images/Solucooaes-Bank.svg';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { paymentId } = useParams();
    const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6')

    const [paymentInfo, setPaymentInfo] = useState({})

    useEffect(() => {
        fetch(`https://organic-food-server-siffahim.vercel.app/orders/${paymentId}`)
            .then(res => res.json())
            .then(data => setPaymentInfo(data))

    }, [paymentId])

    return (
        <div>
            <Navigation />
            <Container className='login-container py-5 mt-4'>
                <Row className='d-flex align-items-center'>
                    <Col sm={12} md={6}>
                        <img width='80%' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <p className='fs-5'>Pyment ${paymentInfo.price}</p>
                        <p className='text-muted mb-2 fs-5'>Pay with</p>
                        <img src={img2} className='mb-5' alt="" />
                        {
                            paymentInfo.price && <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    paymentInfo={paymentInfo}
                                />
                            </Elements>
                        }
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Payment;