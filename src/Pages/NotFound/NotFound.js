import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <>
            <Navigation />
            <div className='text-center py-5 mb-5'>
                <h1 style={{ fontSize: '140px', color: '#62a403' }}>404</h1>
                <h4>OPPS! PAGE NOT BE FOUND</h4>
                <p className='text-muted'>Sorry but the page you are looking for does not exist,<br /> have been
                    removed, name changed or is temporarily unavailable.</p>
                <button className='bank-btn'>BACK TO HOME PAGE</button>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;