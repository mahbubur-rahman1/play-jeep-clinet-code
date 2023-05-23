
import { useEffect, useState } from 'react';
import useTitle from '../hoks/useTitle';
import { useLoaderData } from 'react-router-dom';
import ToyTabla from './ToyTabla';


const MyToy = () => {

    // const myToyss = useLoaderData()
    const [myToys, setMyToys] = useState([])
    console.log(myToys)
    const url = "http://localhost:5000/toys"
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
         console.log(data)
        })
    },[])

    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Details</th>
                            <th>Seller Name</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>


                    {
                        myToys.map(toy => <ToyTabla
                            key={toy._id}
                            toy={toy}
                            myToys={myToys}
                            setMyToys={setMyToys}
                        ></ToyTabla>)
                    }


                </table>
            </div>


        </div>
    );
};

export default MyToy;