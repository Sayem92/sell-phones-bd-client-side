import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../../Loading/Loading';

const AllBuyers = () => {
 
        const { data: buyers = [], isLoading, refetch } = useQuery({
            queryKey: [''],
            queryFn: async () => {
                try {
    
                    const res = await fetch(`http://localhost:5000/allBuyers`)
                    const data = await res.json();
                    return data;
    
                }
                catch (err) {
                    console.log(err);
                }
            }
        })

        
        

        if(isLoading){
            return <Loading></Loading>
        }

        if (!buyers.length) {
            return <div className='p-4 mt-6'>
            <h1 className='text-3xl text-yellow-500'>No Buyers available.
            </h1>
        </div>
        }

    return (
        <div className='mt-3'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            {/* <th>Make Admin</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i)=>
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
                                        // onClick={() => setDeleteProduct(product)}
                                        htmlFor="seller-con-dele-modal"
                                        className="btn btn-sm btn-error text-white">Delete</label>
                                </td>
                                {/* <td>
                                    <label

                                        className="btn btn-sm btn-info text-white">Make Admin</label>

                                </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;