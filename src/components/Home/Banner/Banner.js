import React from 'react';

const Banner = () => {
    return (

        <section className=" ">
            <div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/T2S67Pk/1.jpg" alt="phone sell"
                        className="object-contain h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg" />
                </div>
                <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-semibold leading-none sm:text-6xl">BEST PLACE TO <span className='text-orange-500'>SELL</span> YOUR PHONES
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Sell phones BD most trusted platform to sell old Mobile Phone, sell your used Mobile Phone and get instant cash at your account.

                    </p>
                    
                </div>
            </div>
        </section>

    );
};

export default Banner;