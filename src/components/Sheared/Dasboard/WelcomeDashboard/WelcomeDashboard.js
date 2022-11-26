import React from 'react';

const WelcomeDashboard = () => {
    return (
        <div className='lg:my-64 my-32'>
            <div className='text-center text-green-400'>
                <p className='md:text-7xl text-3xl font-thin'>Welcome To Dashboard</p>
                <div className='md:hidden mt-3' >
                    <label htmlFor="dashboard-drawer"  className="btn btn-info text-base-content">Open drawer</label>
                </div>
            </div>
        </div>
    );
};

export default WelcomeDashboard;