import React from 'react';
import useTitle from '../hoks/useTitle';

const AllToy = () => {
    useTitle("All Toy")
    return (
        <div className='grid md:grid-cols-2 mma-auto gap-3 '>
            <div className="grid md:grid-cols-3 shadow-lg items-center gap-2 rounded-md  p-3 ">
                <div className="  ">
                    <img src="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg" alt="" />
                </div>
                <div className="">
                    <h2 className="">{name}</h2>
                    <h3 className=""><span className='text-orange-700 font-semibold'> Cstagroy:</span>  </h3>
                    <h3 className=""><span className='text-orange-700 font-semibold'> Cstagroy:</span>  </h3>
                    <h3 className=""><span className='text-orange-700 font-semibold'> Company: </span>  </h3>
                    <h3 className=""><span className='text-orange-700 font-semibold'> Seller:</span>    </h3>
                    <h3 className=""><span className='text-orange-700 font-semibold'>Rating:</span>     </h3>
                </div>
            </div>
           
        </div>
        
    );
};

export default AllToy;


// {catagory} 
// {catagory} 
// {company}  
// {seller}   
// {rating}   