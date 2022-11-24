import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookedForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, product } = useContext(AuthContext);


    const handleBookedProduct = data => {
      
        const bookedData={
            userName: user?.displayName,
            email: user?.email,
            productName: product?.name,
            productPrice: product?.resalePrice,
            phone: data.phone,
            meetingLocation : data.meetingLocation,
        }


        fetch(`http://localhost:5000/bookedProduct`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(bookedData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Booked product successfully');
            }
        })
    }



    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl mx-2'>
                <h2 className='text-4xl py-4 font-bold text-center text-info'>Booked Product</h2>
                <form onSubmit={handleSubmit(handleBookedProduct)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">User Name</span>
                        </label>
                        <input type="text" 
                        defaultValue={user?.displayName} disabled
                        className="input input-sm input-bordered  w-full max-w-xs" placeholder="User name" />
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email" 
                         defaultValue={user?.email} disabled
                        className="input input-bordered input-sm w-full max-w-xs" placeholder="User email" />
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Product Name</span>
                        </label>
                        <input type="text" 
                        defaultValue={product?.name} disabled
                        className="input input-sm input-bordered  w-full max-w-xs" placeholder="Product name" />
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Product Price</span>
                        </label>
                        <input type="text" 
                        defaultValue={product?.resalePrice} disabled
                         className="input input-sm input-bordered  w-full max-w-xs" placeholder="Product price" />
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Phone Number</span>
                        </label>
                        <input type="text" {...register('phone',{
                            required:'Enter your phone number',
                            minLength: { value: 11, message: "Please valid a phone number" },
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="Phone Number" />

                       {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Meeting Location</span>
                        </label>
                        <input type="text" {...register('meetingLocation',{
                            required:'Enter your location for meeting'
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="Meeting Location" />

                        {errors.meetingLocation && <p className='text-red-600'>{errors.meetingLocation.message}</p>}
                    </div>


                    <input className='mt-3 btn btn-accent text-white w-full max-w-xs' type="submit" value='Submit' />

                </form>
            </div>
        </div>

    );
};

export default BookedForm;