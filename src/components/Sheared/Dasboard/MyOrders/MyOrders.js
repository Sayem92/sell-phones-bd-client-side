import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../../Loading/Loading';

const MyOrders = () => {
    const [loader, setLoader] = useState(true)

    const url = `http://localhost:5000/bookedProduct`;

    const { data: bookings = [] } = useQuery({

        queryKey: ['bookedProduct'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            setLoader(false)
            return data;
        }
    });

    console.log(bookings);

    if(loader){
        return <Loading></Loading>
    }

    if (!bookings.length) {
        return <h1 className='mt-6 text-3xl text-yellow-500'>No Booked data available!. Please booked any product.</h1>
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
                            bookings?.map((booked, i) => <tr key={i}>
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
                                    <label

                                        htmlFor="seller-con-dele-modal"
                                        className="btn btn-sm btn-info text-white">Pay</label>
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