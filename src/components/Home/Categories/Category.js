import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cate}) => {

    return (
        <div className="card w-72 md:w-80 mx-auto bg-base-100 shadow-xl">
              <Link to={`/categories/${cate.categoryId}`}>
            <figure>
                <img className='h-40 w-full'
                src={cate.categoryImage} alt="sell phones" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cate.categoryName}</h2>
            </div>
            </Link>
        </div>
     
    );
};

export default Category;