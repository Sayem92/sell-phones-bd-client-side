import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-12-server-eosin.vercel.app/advertise`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    if (!products?.length) {
        return
    }

    // console.log("advertise",products);


    return (
        <div>
            <h1 className='p-2 text-4xl text-center text-blue-400 font-semibold'>Advertise Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-2 pt-10 pb-28 md:px-72'>

                {
                    products?.map(pro => <AdvertiseCard
                        key={pro._id}
                        pro={pro}
                    ></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;