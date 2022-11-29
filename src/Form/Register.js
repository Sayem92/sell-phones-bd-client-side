import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userInfoSave } from '../api/User';
import { UseToken } from '../api/UseToken';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin, loading, setLoading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const imageHostKey = process.env.REACT_APP_IMGBB_key;
    // const navigate = useNavigate();

    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = UseToken(createUserEmail);

    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }


    // user signup---------
    const handleSignUp = data => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignUpError('');
                toast.success('Successfully created!');


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
                        console.log(imgData)
                        if (imgData.success) {

                            //user update---------
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.display_url,
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    // save data -------------
                                    saveUser(data.name, data.email, data.seller, imgData.data.display_url)

                                })
                                .catch(err => console.log(err));
                        }

                    })
            })
            .catch(err => {
                console.log(err);
                setSignUpError(err.message);
                setLoading(false);
            })
    };


    // //save user --------
    const saveUser = (name, email, seller, photoURL) => {
        const user = {
            name,
            email,
            sellerAccount: seller,
            userPhoto: photoURL
        }

        fetch(`https://assignment-12-server-eosin.vercel.app/users`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);
                toast.success('Save user data!');
                setLoading(false);
                // navigate('/')
                setCreateUserEmail(email); // set for token-----

            })

    };



    // google login----------------
    const handleGoogleLogin = () => {

        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                // user data save --------------
                userInfoSave(user?.displayName, user?.email, false, user?.photoURL)
                toast.success('Google Login Successfully!');
                // navigate('/')
                setCreateUserEmail(user?.email); // set for token-----


            })
            .catch(err => console.log(err))
    }


    if (loading) {
        return <Loading></Loading>
    }

    return (

        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl mx-2'>
                <h2 className='text-4xl py-4 font-bold text-center text-info'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Name</span>
                        </label>
                        <input type="text" {...register('name', {
                            required: "Please enter your name"
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your name" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    {/* image */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">User Photo</span>
                        </label>
                        <input type="file" {...register('image', {
                            required: "Please select your photo"
                        })}
                            className="file-input file-input-info file-input-bordered  w-full max-w-xs"
                            placeholder="Your photo"
                        />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: 'Email is required'
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your email" />

                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: "Password is must be 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" }

                        })} className="input input-bordered  w-full max-w-xs" placeholder="********" />

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <div className="form-control p-2">
                            <label className="label cursor-pointer">
                                <span className="label-text">Seller Account</span>
                                <input type="checkbox" {...register('seller')}
                                    className="toggle toggle-info" />
                            </label>
                        </div>
                    </div>



                    <input className='mt-3 btn btn-accent text-white w-full max-w-xs' type="submit" value='Sign Up' />

                    <div>
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                    </div>
                </form>

                <p className='my-3 text-center '>Already have an account? <Link to='/login' className='text-primary underline'>Please login</Link></p>
                <div className='divider py-4'>OR</div>

                <button onClick={handleGoogleLogin}
                    className='btn btn-outline w-full  hover:text-white hover:border-none hover:bg-info'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Register;