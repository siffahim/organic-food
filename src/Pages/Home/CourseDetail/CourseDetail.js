import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const CourseDetail = () => {
    const [datas, setDatas] = useState([]);
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const navigate = useNavigate();
    const { user } = useAuth();
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://organic-food-server-siffahim.vercel.app/products/${courseId}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [courseId])

    const handleCheckout = () => {
        const order = {
            name: course.name,
            review: course.review,
            email: user.email,
            price: course.price,
            img: course.img,
        }

        fetch('https://organic-food-server-siffahim.vercel.app/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        navigate(`/dashboard/myorder`)
    }

    useEffect(() => {
        fetch('https://organic-food-server-siffahim.vercel.app/products')
            .then(res => res.json())
            .then(data => setDatas(data.result))
    }, [])

    return (
        <>
            <Navigation />
            <Container className='my-1'>
                <Row>
                    <Col sm={6}>
                        <div>
                            <img width='100%' height='490px' src={course.img} alt="" />
                        </div>
                        <Row>
                            {
                                datas.slice(0, 4).map(data => <Col xs={3} md={3}>
                                    <div className='productNastedCard'>
                                        <img width='100%' src={data.img} alt="" />
                                    </div>
                                </Col>)
                            }
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <p className='text-muted'>Product Review</p>
                        <p className='fs-3'>{course.name}</p>
                        <p className='d-flex'>BRAND: <span className='brand icon2'><i className="fab fa-canadian-maple-leaf"></i></span></p>
                        <h5>${(course.price) * count}.99</h5>
                        <Rating
                            initialRating={course.review}
                            emptySymbol="fa fa-star-o icon"
                            fullSymbol="fa fa-star icon "
                            readonly
                        /><br /><br />
                        <p>We value the experimentation, the reformation of the message, and the smart incentives. We offer a variety of services and solutions Worldwide. We’ve been lucky to collaborate with a long list of customers.</p>
                        <div>
                            <span>WEHIGT:</span>
                            <button className='btn fw-normal border mx-1'>1kg</button>
                            <button className='btn fw-normal border mx-1'>5kg</button>
                            <button className='btn fw-normal border mx-1'>250kg</button>
                        </div>
                        <div className='my-3'>
                            <button onClick={() => setCount(count - 1)} className='custom-btn'>-</button>
                            <button className='custom-btn2 fw-bold mx-1 px-4'>{count}</button>
                            <button onClick={() => setCount(count + 1)} className='custom-btn'>+</button>
                        </div>
                        <button className='bank-btn mt-2' onClick={handleCheckout}>BUY NOW</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CourseDetail;