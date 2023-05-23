import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { _id, picture, price, rating, name, catagory, seller, company } = data;


    return (
        <div>
            <div className='flex gap-10 items-center justify-items-center mx-auto w-8/12  '>
                <div className=' '>
                    <img className='h-64 w-72' src={picture} alt="" />
                </div>
                <div className=''>
                    <h2 className='text-2xl mb-2 font-bold'>{name}</h2>
                    <h2 className=' font-bold mb-1 '><span className='text-red-700'> Price: </span> {price}</h2>
                    <h2 className=' font-bold mb-1 '><span className='text-red-700'> Seller: </span> {seller}</h2>
                    <h2 className=' font-bold mb-1 '><span className='text-red-700'> Catagory: </span> {catagory}</h2>
                    <h2 className=' font-bold mb-1'><span className='text-red-700'> Company: </span> {company}</h2>
                    <h2 className=' font-bold mb-1'><span className='text-red-700'> Rading: </span> {rating}</h2>



                </div>
            </div>



        </div>
    );
};

export default ViewDetails;