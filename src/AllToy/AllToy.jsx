import React, { useEffect, useState } from 'react';
import useTitle from '../hoks/useTitle';
import AllToys from './AllToys';

const AllToy = () => {
    useTitle("All Toy")

    const [data, setData] = useState([])
   

    useEffect( ()=>{
        fetch('https://assinment-server-site-mahbubur-rahman1.vercel.app/toys')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])



    return (
        <div className='grid md:grid-cols-2 mma-auto gap-3 '>

            {
                data.map(toy=> <AllToys toy={toy} key={toy._id}></AllToys> )
            }
        

        </div>
        
    );
};

export default AllToy;


// {catagory} 
// {catagory} 
// {company}  
// {seller}   
// {rating}   