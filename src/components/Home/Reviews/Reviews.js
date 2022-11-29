import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Loading/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            try {

                const res = await fetch(`https://assignment-12-server-eosin.vercel.app/reviews`)
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

    return (
        <div className='p-2 md:px-20 mb-20 '>
            <h1 className='text-3xl font-bold mb-8 text-blue-600 text-center'>Great reviews</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews?.map(reviewData => <ReviewCard
                        key={reviewData._id}
                        reviewData={reviewData}
                    ></ReviewCard>)
                }

            </div>
        </div>
    );
};

export default Reviews;