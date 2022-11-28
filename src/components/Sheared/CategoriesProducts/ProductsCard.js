import { useContext, useState } from 'react';
import UseAdmin from '../../../api/UseAdmin';
import UseSeller from '../../../api/UseSeller';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import BookingModal from './BookingModal';

const ProductsCard = ({ pro }) => {
    const { name, img, location, sellerName, usedYear, originalPrice, resalePrice, timePosted } = pro;
    const [product, setProduct] = useState(null);
    const { user } = useContext(AuthContext);
    const [isSeller] = UseSeller(user?.email);
    const [isAdmin] = UseAdmin(user?.email);
    // console.log(isAdmin);
    // console.log(isSeller);

    return (
        <div>
            <div className="card card-compact md:w-full bg-base-100 shadow-xl">
                <figure>
                    <img className='h-52 w-full' src={img} alt="Shoes" />
                </figure>
                <div className="card-body space-y-0">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <h1 className='text-xl'>Original Price: {originalPrice}</h1>
                    <h1 className='text-xl'>Resale Price: <strong>{resalePrice}</strong></h1>
                    <p className='text-xl'>Used: {usedYear} {usedYear > 1 ? 'Years' : "Year"}</p>
                    <p className='text-xl'>Seller: <strong> {sellerName}</strong></p>
                    <p className='text-xl'>{location}</p>
                    <p className='text-xl'>{timePosted}</p>
                    <div className="card-actions justify-end">

                       { !isSeller && !isAdmin &&
                         <label
                         htmlFor="bookingModal"
                         onClick={() => setProduct(pro)}
                         className='btn btn-info text-white'>Book Now</label>
                       }
                    </div>
                </div>
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductsCard;