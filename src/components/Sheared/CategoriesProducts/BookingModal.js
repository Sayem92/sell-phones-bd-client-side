import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleBookedProduct = data => {

        const bookedData = {
            userName: user?.displayName,
            email: user?.email,
            categoryName: product?.categoryName,
            productName: product?.name,
            productImage: product.img,
            productPrice: product?.resalePrice,
            phone: data.phone,
            meetingLocation: data.meetingLocation,
            productId: product?._id
        }

        // booked collection a save--------
        fetch(`https://assignment-12-server-eosin.vercel.app/bookedProduct`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct('');
                    toast.success('Booked product successfully');
                    navigate('/dashboard/myOrders');
                }
            })
    }



    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProduct('')}
                        htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-3xl font-bold text-center text-info'>Booked Product</h2>
                    <form onSubmit={handleSubmit(handleBookedProduct)}>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">User Name</span>
                            </label>
                            <input type="text"
                                defaultValue={user?.displayName} disabled
                                className="input input-sm input-bordered  w-full" placeholder="User name" />
                        </div>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">Email</span>
                            </label>
                            <input type="email"
                                defaultValue={user?.email} disabled
                                className="input input-bordered input-sm w-full" placeholder="User email" />
                        </div>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">Product Name</span>
                            </label>
                            <input type="text"
                                defaultValue={product?.name} disabled
                                className="input input-sm input-bordered  w-full" placeholder="Product name" />
                        </div>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">Product Price</span>
                            </label>
                            <input type="text"
                                defaultValue={product?.resalePrice} disabled
                                className="input input-sm input-bordered  w-full" placeholder="Product price" />
                        </div>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">Phone Number</span>
                            </label>
                            <input type="text" {...register('phone', {
                                required: 'Enter your phone number',
                                minLength: { value: 11, message: "Please valid a phone number" },
                            })} className="input input-sm input-bordered  w-full" placeholder="Phone Number" />

                            {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-x">
                            <label className="label"> <span className="label-text ">Meeting Location</span>
                            </label>
                            <input type="text" {...register('meetingLocation', {
                                required: 'Enter your location for meeting'
                            })} className="input input-sm input-bordered  w-full" placeholder="Meeting Location" />

                            {errors.meetingLocation && <p className='text-red-600'>{errors.meetingLocation.message}</p>}
                        </div>


                        <input className='mt-3 btn btn-accent text-white w-full' type="submit" value='Submit' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;