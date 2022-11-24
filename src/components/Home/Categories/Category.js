import React from 'react';

const Category = ({cate}) => {

    return (
        <div className="card w-72 md:w-80 mx-auto bg-base-100 shadow-xl">
            <figure>
                <img className='h-40 w-full'
                src={cate.categoryImage} alt="sell phones" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cate.categoryName}</h2>
            </div>
        </div>
    );
};

export default Category;