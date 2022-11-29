import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../../Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    //    console.log(user.email);


    const { data: booked = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`https://assignment-12-server-eosin.vercel.app/bookedProduct/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('phoneToken')}`
                    }
                })
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })


    // console.log(booked);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!booked.length) {
        return <div className='p-4 mt-6'>
            <h1 className='text-3xl text-yellow-500'>No Product Booked!.
                <span className='text-blue-500 underline'
                ><Link to='/'> Please booked any product</Link></span>
            </h1>
        </div>
    }

    return (
        <div className='mt-3'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booked?.map((booked, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-lg">
                                            <img src={booked.productImage} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{booked.productName}</td>
                                <td>{booked.productPrice}</td>
                                <td>

                                    {!booked?.paid &&

                                        <Link to={`/dashboard/payment/${booked._id}`}>
                                            <button
                                                className='btn btn-sm btn-info text-white'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booked?.paid &&
                                        <button
                                            className='btn btn-sm btn-success text-white'
                                        >Paid</button>

                                    }
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;