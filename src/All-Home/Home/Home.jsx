import React, { useEffect, useState } from 'react';
import ToysCard from '../ToysCard/ToysCard';
import useTitle from '../../hoks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';



const Home = () => {
    const [tabs, setTab] = useState([])

    // const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setTab(data)
            })
    })

    useTitle("Home")

    return (

        <div>
            {/* <div className="p-6">
                <div className="">
                    <div className="carousel  h-screen w-full">
                        <div id="slide1" className="carousel-item  relative w-full">
                            <img src="  https://thumbs.dreamstime.com/b/childrens-toys-section-small-toy-jeep-sky-more-shopping-mall-latvia-riga-march-childrens-toys-section-small-toy-272682489.jpg" className="w-full " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://thumbs.dreamstime.com/b/toy-jeep-car-suv-truck-white-background-83729270.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://thumbs.dreamstime.com/b/cute-funny-blond-little-young-toddler-kid-child-boy-sitting-driving-riding-electric-toy-car-automobile-jeep-park-children-255995876.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://thumbs.dreamstime.com/b/black-toy-jeep-isolated-black-background-water-toy-jeep-isolated-black-background-water-253513439.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div> */}
            {/* carusal */}

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
            <div className='grid md:grid-cols-3 mx-auto gap-3'>
                {

                    tabs.map(toy => <ToysCard
                        key={toy._id}
                        toy={toy} n
                    >

                    </ToysCard>)

                }
            </div>

            <div>
                <h1 className='text-5xl text-sky-600 text-center my-6'>Ouer Visitor</h1>
                <hr />
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='grid md:grid-cols-4 my-8 justify-center'>
                    <div className=''>
                        <img className='rounded-full h-56 w-56 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nOp4v9KJmAEWxhZv_rCwZHX8EuVIjyPz3A&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Adrin Pilon</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Marketing Manager</p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag7xmdSjm0Lp161mAq4sm9Pfm6x9xVgZPZg&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Vone Pope</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Banker</p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevZUdSn7F4eYaPIAChEMz6O4BRBAJ1sM0gA&usqp=CAU" alt="" />
                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Caypran Pamuta</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Enganier</p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-full h-56 w-56' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsbilc7p4CbwwY2hwu6ziEpL_Szh_vxXbtg&usqp=CAU" alt="" />

                        <div className='mt-4'>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Name:</span> Steven Androws</p>
                            <p className='text-1xl'> <span className='text-1xl font-semibold mt-5'>Propetion:</span> Self Empolyer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;