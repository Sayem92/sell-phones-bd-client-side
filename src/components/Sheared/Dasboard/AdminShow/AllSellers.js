import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../../Loading/Loading';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`https://assignment-12-server-eosin.vercel.app/allSellers`, {
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



    const handleDeletingSeller = _id => {

        const agree = window.confirm('Are you sure delete this buyer !!!')

        if (agree) {
            // console.log(_id);
            fetch(`https://assignment-12-server-eosin.vercel.app/users/delete/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Seller deleted successfully`)
                        refetch();
                    }

                })

        }


    };




    if (isLoading) {
        return <Loading></Loading>
    }

    if (!sellers.length) {
        return <div className='p-4 mt-6'>
            <h1 className='text-3xl text-yellow-500'>No Sellers available.
            </h1>
        </div>
    }



    return (
        <div className='mt-3'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-lg">
                                                <img src={buyer.userPhoto} alt='' />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <label
                                            onClick={() => handleDeletingSeller(buyer._id)}
                                            className="btn btn-sm btn-error text-white">Delete</label>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;