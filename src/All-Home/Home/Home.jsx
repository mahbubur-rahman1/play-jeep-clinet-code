import React, { useEffect, useState } from 'react';
import ToysCard from '../ToysCard/ToysCard';
import useTitle from '../../hoks/useTitle';

const Home = () => {
    const [tabs, setTab] = useState([])

    useEffect(() => {
        fetch('FAckData.json')
            .then(res => res.json())
            .then(data => {
                setTab(data)
            })
    })

    useTitle("Home")

    return (

        <div>
            <div className="p-6">
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
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {

                    tabs.map(toy => <ToysCard
                        key={toy.id}
                        toy={toy} n
                    >

                    </ToysCard>)

                }
            </div>
        </div>
    );
};

export default Home;