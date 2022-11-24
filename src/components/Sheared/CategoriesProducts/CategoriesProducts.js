import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const CategoriesProducts = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-2 pt-10 pb-28 md:px-72'>
           {
            products.map(pro => <ProductsCard
                key={pro._id}
                pro={pro}
            ></ProductsCard>)
           }
        </div>
    );
};

export default CategoriesProducts;