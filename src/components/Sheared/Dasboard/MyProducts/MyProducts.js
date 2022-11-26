import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Loading from '../../../../Loading/Loading';
import ConfirmationDeleteModal from '../Modal/ConfirmationDeleteModal';


const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
  
    const closeModal = () => {
        setDeleteProduct(null)
    };


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProduct`)
            const data = await res.json()
            return data;
        }
    });



    const handleDeletingProduct = _id => {
        console.log(_id);
        
    };



    if (isLoading) {
        return <Loading></Loading>
    };

    if (!products.length) {
        return <h1>No Products Available</h1>
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
                                <td>{product.productName}</td>
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