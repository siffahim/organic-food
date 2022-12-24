import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-3 text-white header">
            <Navbar.Brand href="#home">
                <img width='110px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto text-center d-flex align-items-center">
                    <Nav.Link as={Link} className='header-link' to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className='header-link' to="/shop">Shop</Nav.Link>
                    <Nav.Link as={Link} className='header-link' to="/home">Blog</Nav.Link>
                    <Nav.Link as={Link} className='header-link' to="/dashboard">Dashboard</Nav.Link>
                    {
                        user.email && <Nav.Link href="#a" className='text-white text'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email && <img style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                    }
                    {
                        user.email ? <button onClick={logOut} className='btn fs-5 text-white'><i className="fas fa-sign-in-alt"></i></button> : <Nav.Link as={Link} className='text-white fs-5' to="/login"><i className="far fa-user"></i></Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;