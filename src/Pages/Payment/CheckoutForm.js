import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ paymentInfo }) => {
    const { price, email, _id } = paymentInfo;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate()


    useEffect(() => {
        fetch('https://organic-food-server-siffahim.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true)

        //check card..................>
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
            setSucess('');
        }
        else {
            setError('');
            console.log(paymentMethod)
        }

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSucess('');
        }
        else {
            setError('');
            console.log(paymentIntent)
            setProcessing(false)
            setSucess('Successfully payment')

            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.split('_secret')[0],
                last4: paymentMethod.card.last4,
                brand: paymentMethod.card.brand
            }

            //save to db
            const url = `https://organic-food-server-siffahim.vercel.app/orders/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    navigate('/dashboard/myorder')
                })
        }

    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        className='banking'
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    {
                        processing ? <p>Loading...</p> : <button type="submit" className='bank-btn' disabled={!stripe || sucess}>
                            Payment
                        </button>
                    }
                </form>
                {
                    error && <p className='mt-3' style={{ color: 'red', }}>{error}</p>
                }
                {
                    sucess && <p className='mt-3' style={{ color: 'green' }}>{sucess}</p>
                }
            </div>
        </>
    );
};

export default CheckoutForm;