
import { useState } from 'react';
import useTitle from '../hoks/useTitle';
import { useLoaderData } from 'react-router-dom';
const MyToy = () => {
  


    const myToyss = useLoaderData()
    const [myToys, setmyToys] = useState(myToyss)
    console.log(myToys)

    // useEffect( ()=>{
    //     fetch('http://localhost:5000/toys')
    //     .then(res => res.json())
    //     .then(data => {
    //      console.log(data)
    //     })
    // },[])

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


                    {/* {
                        myToys.map(toy => <ToyTablae
                            key={toy._id}
                            toy={toy}
                            myToys={myToys}
                            setmyToys={setmyToys}
                        ></ToyTablae>)
                    } */}


                </table>
            </div>


        </div>
    );
};

export default MyToy;