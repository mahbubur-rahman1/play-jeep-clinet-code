import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy }) => {
    const { _id, name, picture, rating, price } = toy
    return (
        <div className=''>
            
                <div className=" card card-compact w-96 bg-base-100 shadow-xl w-full">
                    <figure><img className='h-72' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p  className=''><span className='font-bold'>Price: </span>{price}</p>
                        <p className=''><span className='font-semibold'>Rating: </span>{ rating}</p>
                        <div className="card-actions ">
                            <Link to={`/toydetails/${_id}`}><button  className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ToysCard;