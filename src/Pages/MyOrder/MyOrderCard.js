import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const MyOrderCard = ({ order, setSum }) => {
    const { img, price, _id, name, review } = order;
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate(`/payment/${_id}`)
    }

    const handleDelete = id => {
        fetch(`https://organic-food-server.onrender.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.jons())
            .then(data => {
                console.log(data.deletedCount)
                setSum(prev => prev + 1)
            })
    }

    return (
        <Col sm={6}>
            <div className='shadow rounded p-2'>
                <Row>
                    <Col sm={4}>
                        <div className='oreder-container'>
                            <div>
                                <img width='100%' src={img} alt="" />
                            </div>
                            <div className='order-btn-container'>
                                <div className='btn-order' onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></div>
                                {
                                    order.payment ? <div className='btn-order' style={{ cursor: 'not-allowed' }} title='Paid product'><i className="fas fa-ban icon"></i></div> : <div className='btn-order' onClick={() => handlePayment(_id)} title='Payment for product'><i className="fab fa-cc-amazon-pay"></i></div>
                                }
                                <div className='btn-order'><i className="fas fa-tag"></i></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className='pt-3'>
                            <h5>{name}</h5>
                            <h6>${price}.66</h6>
                            <Rating
                                initialRating={review}
                                emptySymbol="fa fa-star-o icon"
                                fullSymbol="fa fa-star icon "
                                readonly
                            />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default MyOrderCard;