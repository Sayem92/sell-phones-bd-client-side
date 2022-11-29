import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const CategoriesProducts = () => {
    const products = useLoaderData();
    // console.log("category Pro",products);

    const unSold = products.filter(pro => pro.sold !== true)
    // console.log("unsold", unSold);


    if (!unSold?.length) {
        return <h1 className='md:m-20 m-10 text-4xl text-blue-600'>No product available !!!</h1>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-2 pt-10 pb-28 md:px-72'>
            {
                unSold?.map(pro => <ProductsCard
                    key={pro._id}
                    pro={pro}
                ></ProductsCard>)
            }
        </div>
    );
};

export default CategoriesProducts;