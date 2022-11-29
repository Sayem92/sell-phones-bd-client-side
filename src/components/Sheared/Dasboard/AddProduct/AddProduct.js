import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UseSeller from '../../../../api/UseSeller';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

// seller only ---------------------------
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = UseSeller(user?.email);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_IMGBB_key;
    const navigate = useNavigate();

    const handleAddProduct = data => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {


                    const product = {
                        name: data.productName,
                        categoryName: data.categoryName,
                        img: imgData.data.display_url,

                        originalPrice: data.resalePrice,
                        resalePrice: data.resalePrice,
                        condition: data.condition,

                        usedYear: data.usedYear,
                        phone: data.phone,
                        location: data.location,
                        description: data.description,
                        sellerEmail: user?.email,
                        sellerName: user?.displayName,
                        timePosted: user?.metadata?.creationTime.slice(4, 17)


                    }


                    // sava information to the database----------
                    fetch(`https://assignment-12-server-eosin.vercel.app/addProduct`, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.productName} info save successful`);
                            navigate('/dashboard/myProducts');
                        })
                }
            })
    };



    return (
        <div className='pr-1 py-10 md:w-96 mx-auto'>
            <h2 className="text-3xl font-semibold ml-8">Add A Product</h2>
            <div className='md:w-96 p-7 shadow-xl mx-2'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    {/* productName */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Product Name</span>
                        </label>
                        <input type="text" {...register('productName', {
                            required: "Please enter product name"
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="Product name" />

                        {errors.productName && <p className='text-red-600'>{errors.productName.message}</p>}
                    </div>
                    {/* image */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Product Photo</span>
                        </label>
                        <input type="file" {...register('image', {
                            required: "Please select your photo"
                        })}
                            className="file-input file-input-info file-input-bordered file-input-sm w-full max-w-xs"
                            placeholder="Your photo"
                        />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>
                    {/* categoryName */}

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Category Name</span>
                        </label>

                        <select {...register('categoryName', {
                            required: "Please select category name"
                        })}
                            className="select select-sm border border-gray-300 w-full max-w-xs">

                            <option disabled defaultValue >Chose category?</option>
                            <option value='Oppo Phones'>Oppo Phones</option>
                            <option value='Xiaomi Phones'>Xiaomi Phones</option>
                            <option value='Realme Phones'>Realme Phones</option>
                            <option value='Vivo Phones'>Vivo Phones</option>
                            <option value='Samsung Phones'>Samsung Phones</option>
                        </select>

                        {errors.categoryName && <p className='text-red-600'>{errors.categoryName.message}</p>}
                    </div>

                    {/* originalPrice */}

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Original Price</span>
                        </label>
                        <input type="number" {...register('originalPrice', {
                            required: "Please enter original price"
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="original price" />

                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice.message}</p>}
                    </div>
                    {/* resalePrice */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Resale Price</span>
                        </label>
                        <input type="number" {...register('resalePrice', {
                            required: "Please enter resale price"
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="resale price" />

                        {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice.message}</p>}
                    </div>
                    {/* condition */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Condition Types</span>
                        </label>
                        <select {...register('condition')}
                            className="select select-sm border border-gray-300 w-full max-w-xs">

                            <option disabled defaultValue >Chose condition?</option>
                            <option value='excellent'>excellent</option>
                            <option value='Good'>good</option>
                            <option value='Fair'>fair</option>
                        </select>
                    </div>
                    {/* usedYear */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Used Year</span>
                        </label>
                        <input type="number" {...register('usedYear', {
                            required: "Please enter original price"
                        })} className="input input-sm input-bordered  w-full max-w-xs" placeholder="used year" />

                        {errors.usedYear && <p className='text-red-600'>{errors.usedYear.message}</p>}
                    </div>
                    {/* phone */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Phone Number</span>
                        </label>
                        <input type="number" {...register('phone', {
                            required: 'Enter your phone number',
                            minLength: { value: 11, message: "Please valid a phone number" },
                        })} className="input input-sm input-bordered  w-full" placeholder="Phone Number" />

                        {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                    </div>
                    {/* location */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Location</span>
                        </label>
                        <input type="text" {...register('location', {
                            required: 'Enter your location'
                        })} className="input input-sm input-bordered  w-full" placeholder=" location" />

                        {errors.meetingLocation && <p className='text-red-600'>{errors.meetingLocation.message}</p>}
                    </div>
                    {/* description */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Description</span>
                        </label>
                        <textarea type="text" {...register('description', {
                            required: 'Enter your description'
                        })} className="textarea textarea-bordered w-full" placeholder=" Description" />

                        {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                    </div>


                    {
                        isSeller &&
                        <input className='mt-3 btn btn-accent text-white w-full' type="submit" value='Submit' />
                    }

                </form>
            </div>
        </div>
    );
};

export default AddProduct;