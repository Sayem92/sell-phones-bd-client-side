import React from 'react';
import signup from '../../../assets/signup.png';
import buy from '../../../assets/buy.png';
import sellphones from '../../../assets/sell phones.png';
import details from '../../../assets/details.png';

const Working = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 pb-10">
            <div className="container mx-auto flex flex-col p-2 md:p-6">
                <p className="p-2 text-xl font-medium text-center ">How it Works</p>
                <h2 className="pb-4 text-3xl font-bold text-center text-blue-500">4 Simple steps to Sell and Buy your phones</h2>
                <div className="divide-y divide-gray-700">
                    <div className="grid justify-center grid-cols-4 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">

                            <img src={signup} className='w-32' alt="" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step - 1</span>
                            <span className="text-xl font-bold md:text-2xl">Create an account or login</span>
                            <span className="mt-4 dark:text-gray-300 text-left">Please first create an account and must be choose seller or buyer account. Google signup means buyers account. After click the dashboard sellers can see two route add product and my products. Buyers can see the my orders route. If Sellers add a product then he/she can see the products in my order route. Here, Sellers easily update and delete any order. Only buyers can see the booked products in my orders route and payment easily.
                            </span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <img src={sellphones} className='w-32' alt="" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step - 2</span>
                            <span className="text-xl font-bold md:text-2xl">Resale phones</span>
                            <span className="mt-4 dark:text-gray-300 text-left">Only sellers account sell brand phones. Click the dashboard sellers can see two route add product and my products. Click the add product route See a form and fill up the form of sell phone details. Click the add product button. Automatically going the my products route and see your products status(sold/unsold) and you can easily update and delete your product. Most benefits you can advertise your product nobody can see without login.</span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <img src={buy} className='w-32' alt="" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step - 3 </span>
                            <span className="text-xl font-bold md:text-2xl">Buy phones or booked</span>
                            <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 text-left">Only buyers can booked products. After click the book now button open and modal form and fill up this all field and submit the form. Their all booked products can see easily my orders route of dashboard. Here, he payment her products with stripe. </span>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-4 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <img src={details} className='w-32' alt="" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step - 4 </span>
                            <span className="text-xl font-bold md:text-2xl">See All information</span>
                            <span className="mt-4 dark:text-gray-300 text-left">Only admin see the all users(sellers and buyers) information. Admin can delete any sellers or buyers account. Users all information secure and safety.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Working;