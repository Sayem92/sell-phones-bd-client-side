import React from 'react';
import logo from '../../../assets/sell.png'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-gray-800 text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">

                            <img className='w-14 h-14 rounded-lg' src={logo} alt="sell phone bd" />

                        </div>
                        <span className="self-center text-2xl font-semibold">Sell Phones BD</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <p >Features</p>
                            </li>
                            <li>
                                <p >Integrations</p>
                            </li>
                            <li>
                                <p >Pricing</p>
                            </li>
                            <li>
                                <p >FAQ</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <p >Privacy</p>
                            </li>
                            <li>
                                <p >Terms of Service</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-50">Contacts</h3>
                        <ul className="space-y-1">
                            <li>
                                <p >Kamalgonj, Moulvibazar</p>
                            </li>
                            <li>
                                <p >Sylhet, Bangladesh </p>
                            </li>
                            <li>
                                <p >(+880) 01748-433092</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-50">Follow me
                        </div>
                        <div className="flex justify-start space-x-3">
                            <a href="https://web.facebook.com/sayemahmed.sum" target='_blank' rel='noreferrer'> <AiFillFacebook className='text-3xl text-gray-200 mr-3'></AiFillFacebook></a>

                            <a href="https://www.linkedin.com/in/md-sayem-miah/" target='_blank' rel='noreferrer'> <AiFillLinkedin className='text-3xl text-gray-200 mr-3'></AiFillLinkedin></a>

                            <a href="https://github.com/Sayem92" target='_blank' rel='noreferrer'> <AiFillGithub className='text-3xl text-gray-200'></AiFillGithub></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 2018 Sell Phones BD. All rights reserved.</div>
        </footer>

    );
};

export default Footer;