import React from 'react';

const ToysCard = ({ toy }) => {
    const { name, picture, rating, price } = toy
    return (
        <div className=''>
            
                <div className=" card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-72' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p  className='text-2xl'>{price}</p>
                        <p className=''>{ rating}</p>
                        <div className="card-actions ">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ToysCard;