import React, { useEffect, useState } from 'react';
import ToysCard from '../ToysCard/ToysCard';
import useTitle from '../../hoks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';



const Home = () => {
    const [tabs, setTab] = useState([])

    // const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://assinment-server-site-mahbubur-rahman1.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setTab(data)
            })
    })

    useTitle("Home")

    return (












        <div>




            








            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/childrens-toys-section-small-toy-jeep-sky-more-shopping-mall-latvia-riga-march-childrens-toys-section-small-toy-272682489.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/toy-jeep-car-suv-truck-white-background-83729270.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/cute-funny-blond-little-young-toddler-kid-child-boy-sitting-driving-riding-electric-toy-car-automobile-jeep-park-children-255995876.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://thumbs.dreamstime.com/b/black-toy-jeep-isolated-black-background-water-toy-jeep-isolated-black-background-water-253513439.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            {/* react tabs section */}

            {/* <Tabs>
                <TabList>
                    <Tab>All Toys</Tab>
                    <Tab onClick={() => carHandler()}>Car</Tab>
                    <Tab onClick={() => ambulanceHandler()}>Ambulance</Tab>
                    <Tab onClick={() => tractorHandler()}>Tractor</Tab>
                    <Tab onClick={() => motorbickHandler()}>Motorbicks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            tabs.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-5 mb-5">
                        {
                            toys.map(toy => <ToysCard
                                key={toy.id}
                                toy={toy}
                            ></ToysCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs> */}

            {/* home page card section */}
            <div data-aos="fade-down" data-aos-duration="1000" className=' z-30  mx-auto relative '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQrAW8SCRFXOcHVcFGSqOFFuufBIhoHkKUw&usqp=CAU" className='w-full' alt="" />

                <div data-aos="fade-down" data-aos-duration="2500" className='mx-auto border-black border rounded-xl bg-blue-100 md:absolute md:top-[45%] md:left-[40%] top-[50%] left-[50%] '>
                    <div className=' border-black mx-auto p-5 rounded-xl'>
                        <h1 className='text-yellow-200 text-2xl text-center bg-slate-500 rounded-lg p-2'> Fun with Toys Stars</h1>
                        <p className='bg-black text-white p-3 text-lg rounded-xl mt-2'> Website </p>

                        <div className='pt-3'>
                            <Link className='btn btn-outline  btn-error btn-block' to="https://www.alibaba.com/">
                                Alibaba
                            </Link> <br />
                            <Link className=' mt-2 btn-outline btn btn-block btn-error' to="https://www.daraz.com.bd/">
                            Daraz
                            </Link>
                        </div>
                    </div>

                </div>

            </div>



            <div className='grid md:grid-cols-3 mx-auto gap-3'>
                {

                    tabs.map(toy => <ToysCard
                        key={toy._id}
                        toy={toy} n
                    >

                    </ToysCard>)

                }
            </div>



            <div className='shadow-lg'>
                <h1 className='text-5xl text-red-600 text-center my-6'>Ouer Client</h1>
                <hr />
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='grid md:grid-cols-4 my-8 justify-center'>
                    <div className=''>
                        <img className='rounded-full h-56 w-56 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nOp4v9KJmAEWxhZv_rCwZHX8EuVIjyPz3A&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Adrin Pilon</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Marketing Manager man  </p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag7xmdSjm0Lp161mAq4sm9Pfm6x9xVgZPZg&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Vone Pope</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Banker</p>
                        </div>
                    </div>
                    <div className=''>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevZUdSn7F4eYaPIAChEMz6O4BRBAJ1sM0gA&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Caypran Pamuta</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Enganier</p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsbilc7p4CbwwY2hwu6ziEpL_Szh_vxXbtg&usqp=CAU" alt="" />

                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Steven & Androws</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Self Empolyer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;