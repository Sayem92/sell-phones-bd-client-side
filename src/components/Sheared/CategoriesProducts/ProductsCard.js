import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ProductsCard = ({ pro }) => {
    const { name, img, location, sellerName, usedYear, originalPrice, resalePrice, timePosted } = pro;
    const { setProduct } = useContext(AuthContext);


    return (
        <div className="card card-compact md:w-full bg-base-100 shadow-xl">
            <figure>
                <img className='h-52 w-full' src={img} alt="Shoes" />
            </figure>
            <div className="card-body space-y-0">
                <h2 className="card-title text-3xl">{name}</h2>
                <h1 className='text-xl'>Original Price: {originalPrice}</h1>
                <h1 className='text-xl'>Resale Price: <strong>{resalePrice}</strong></h1>
                <p className='text-xl'>Used: {usedYear} Yr</p>
                <p className='text-xl'>Seller Name: {sellerName}</p>
                <p className='text-xl'>{location}</p>
                <p className='text-xl'>{timePosted}</p>
                <div className="card-actions justify-end">

                    <Link to='/bookedForm'>
                        <button onClick={() => setProduct(pro)}
                            className='btn btn-info text-white'>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;