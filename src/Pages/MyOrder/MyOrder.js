import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    const [sum, setSum] = useState(0);
    useEffect(() => {
        fetch(`https://organic-food-server-siffahim.vercel.app/orders?email=${user.email}`, {
            headers: {
                "authorization": `Bearer ${sessionStorage.getItem('idToken')}`
            }
        }).then(res => res.json())
            .then(data => setOrders(data))

    }, [sum, orders, navigate, user])
    return (
        <div className='mt-2'>
            <Container>
                <Row className='g-4'>
                    {
                        orders.map(order => <MyOrderCard
                            key={order}
                            order={order}
                            setSum={setSum}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;

/* .then(res => {
    if (res.status === 200) {
        return res.json()
    }
    else if (res.status === 401) {
        return navigate('/login')
    }
}) */