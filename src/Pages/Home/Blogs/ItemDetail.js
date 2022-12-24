import React from 'react';
import { Col } from 'react-bootstrap';

const ItemDetail = ({ blog }) => {
    const { img, name } = blog;
    return (
        <Col sm={12} md={3}>
            <div className={`blog-card shadow`}>
                <img width='60px' src={img} alt="" />
                <h6 className='ms-3 mt-3'>{name}</h6>
            </div>
        </Col>
    );
};

export default ItemDetail;