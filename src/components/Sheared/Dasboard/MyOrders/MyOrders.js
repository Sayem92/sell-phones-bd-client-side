import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../../Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
//    console.log(user.email);


    const { data: booked = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/bookedProduct/${user?.email}`)
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })




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