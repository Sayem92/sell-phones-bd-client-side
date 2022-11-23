import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Sheared/Footer/Footer';
import Navbar from '../components/Sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;