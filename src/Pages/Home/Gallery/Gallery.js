import React from 'react';
import { Container } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <Container>
                <div>
                    <h1 style={{ color: '#464343' }}>Build your organic store with <span style={{ color: '#62a403' }}>Organio</span><br /> Purchase now. <span style={{ color: '#f95800' }}>Only $59!</span></h1>
                    <button className='btn-gallery'>Purchase Now</button>
                </div>
            </Container>
        </div>
    );
};

export default Gallery;