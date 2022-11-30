import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AdvertiseCard = ({ pro }) => {
    const { name, img, location, sellerName, usedYear, originalPrice, resalePrice, timePosted } = pro;
   

    return (

        <div>
            <div className="card card-compact md:w-full bg-base-100 shadow-xl">
                <figure>
                <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        <PhotoView src={img}>
                            <img style={{ objectFit: 'cover' }}
                                className='rounded-lg h-96 w-64' src={img} alt="phone" />
                        </PhotoView>
                    </PhotoProvider>
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