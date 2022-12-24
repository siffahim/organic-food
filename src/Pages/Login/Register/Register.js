import React, { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/google.png';
import img from '../../../images/login.svg';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { register } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[name] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('please give some password')
        }
        register(loginData.email, loginData.password, loginData.name, navigate, location)
    }

    return (
        <>
            <Navigation />
            <Container className='login-container p-2  my-4'>
                <Row className='d-flex align-items-center'>
                    <Col sm={12} md={6}>
                        <img width='70%' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={4}>
                        <h3 className='mb-4'>Register</h3>
                        <form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="fas fa-user icon2"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Name"
                                    type='text'
                                    name='name'
                                    onBlur={handleOnBlur}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="fas fa-envelope icon2"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Email"
                                    type='email'
                                    name='email'
                                    onBlur={handleOnBlur}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="fas fa-unlock icon2"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Password"
                                    type='password'
                                    name='password'
                                    onBlur={handleOnBlur}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text><i className="fas fa-lock icon2"></i></InputGroup.Text>
                                <FormControl
                                    placeholder="Confirm password"
                                    type='password'
                                    name='password2'
                                    onBlur={handleOnBlur}
                                />
                            </InputGroup>
                            <button className='col-12 custom-btn2 mb-3'>Login</button>
                        </form>
                        <div >
                            <button className='icon-content' >
                                <img style={{ width: '25px' }} src={logo} alt="" />
                                <span className='login-text text-muted ms-4'>Continue with Google</span>
                            </button>
                            <p className='mt-2'><small>Don't have an account? <Link to='/login'>Create an account</Link></small></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Register;