import axios from 'axios';
import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../Loading/Loading';
import Category from './Category';

const Categories = () => {
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        axios.get('https://assignment-12-server-eosin.vercel.app/categories')
            .then(data => {
                setCategory(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='py-20'>
            <h1 className='p-2 text-4xl text-center text-blue-400 font-semibold'>Choose Your Desire Brand</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 py-10 lg:px-28'>
                {
                    categories?.map(cate => <Category
                        key={cate._id}
                        cate={cate}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;