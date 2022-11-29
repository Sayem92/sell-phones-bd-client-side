import React from 'react';

const AdvertiseCard = ({ pro }) => {
    const { name, img, location, sellerName, usedYear, originalPrice, resalePrice, timePosted } = pro;
   

    return (

        <div>
            <div className="card card-compact md:w-full bg-base-100 shadow-xl">
                <figure>
                    <img className='h-44 w-full' src={img} alt="Shoes" />
                </figure>
                <div className="card-body space-y-0 text-sm">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <h1 className='text-sm'>Original Price: {originalPrice}</h1>
                    <h1 className='text-sm'>Resale Price: <strong>{resalePrice}</strong></h1>
                    <p className='text-sm'>Used: {usedYear} {usedYear > 1 ? 'Years' : "Year"}</p>
                    <p className='text-sm'>Seller: <strong> {sellerName}</strong></p>
                    <p className='text-sm'>{location}</p>
                    <p className='text-sm'>{timePosted}</p>
                </div>
            </div>
        </div>

    );
};

export default AdvertiseCard;