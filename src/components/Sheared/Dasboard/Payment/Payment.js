import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booked = useLoaderData();
    // console.log("for booking", booked);

    const { productName, productPrice } = booked;

    return (
        <div className='px-4 py-10'>
            <h1 className='text-3xl font-bold '>Payment for <span className='text-green-500'>{productName}</span></h1>
            <p className='text-xl my-2'>Please pay $<strong>{productPrice}</strong> for buying phone.</p>

            <div className='my-12 md:w-96 border p-4 rounded-lg shadow-lg'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booked={booked} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;