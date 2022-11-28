import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../../Loading/Loading';
import ConfirmationDeleteModal from '../Modal/ConfirmationDeleteModal';


const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    const closeModal = () => {
        setDeleteProduct(null)
    };


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProduct/${user?.email}`)
            const data = await res.json()
            return data;
        }
    });

   

        const handleDeletingProduct = _id => {

            fetch(`http://localhost:5000/product/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Products deleted successfully`)
                        refetch();
                    }

                })
        };

    // console.log(products);

    if (isLoading) {
        return <Loading></Loading>
    };

    if (!products.length) {
        return <div className='p-4 mt-6'>
            <h1 className='text-3xl text-yellow-500'>No Product Added!. 
            <span className='text-blue-500 underline'
            ><Link to='/dashboard/addProduct'> Please add any product</Link></span>
            </h1>
        </div>
    };



    return (
        <div className='mt-3'>
            <h2 className="text-3xl font-semibold ml-8 mb-4">Manage My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Resale Price</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>sold / unsold</td>
                                <td>{product.resalePrice}</td>
                                <td>
                                    <label
                                        onClick={() => setDeleteProduct(product)}
                                        htmlFor="seller-con-dele-modal"
                                        className="btn btn-sm btn-error text-white">Delete</label>
                                </td>
                                <td>
                                    <label

                                        className="btn btn-sm btn-info text-white">Advertise</label>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deleteProduct &&
                <ConfirmationDeleteModal
                    deleteProduct={deleteProduct}
                    handleDeletingProduct={handleDeletingProduct}
                    closeModal={closeModal}
                ></ConfirmationDeleteModal>
            }

        </div>
    );
};

export default MyProducts;