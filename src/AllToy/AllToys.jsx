import React from 'react';

const AllToys = ({toy}) => {
    console.log(toy)
    const {_id, catagory, date, details, name, photo, price, quantity, selleremail, sellername, company    } = toy;

    return (
        <div className="grid md:grid-cols-3 shadow-lg items-center gap-2 rounded-md  p-3 ">
        <div className="  ">
            <img src={photo} alt="" />
        </div>
        <div className="">
            <h2 className="">{name}</h2>
            <h3 className=""><span className='text-orange-700 font-semibold'> Price: </span>  {price}</h3>
            <h3 className=""><span className='text-orange-700 font-semibold'> Details: </span>{details}  </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'> Seller Name:  </span> {sellername} </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'> Seller Email: </span> {selleremail}   </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'>Quantity: </span> {quantity}    </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'>Company: </span>  {company}   </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'>Catagory: </span> {catagory}    </h3>
            <h3 className=""><span className='text-orange-700 font-semibold'>Date & Time: </span> {date}    </h3>

        </div> 
    </div>
   
    );
};

export default AllToys; 