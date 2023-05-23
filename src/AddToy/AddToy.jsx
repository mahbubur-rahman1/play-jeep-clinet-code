import React from 'react';
import useTitle from '../hoks/useTitle';

const AddToy = () => {
    useTitle("Add Toy")
    return (
        <div>
            <div className='bg-blue-600 my-2'>
                <form className='p-3 ' >
                    <div className="flex mb-8">
                        <div className="form-control md:w-1/4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Name</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Enter Toys Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Price</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Enter The Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Details</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Enter Toy Details" name="details" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Seller Name</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Seller Name" name="sellername" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="flex mb-8">

                        <div className="form-control md:w-1/4 ">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Seller Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Enter Seller Email" name="selleremail" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Quantity</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Comapny</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Company name" name="company" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/4 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Catagory</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Enter Catagory" name="Catagory" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>




                    <div className="flex mb-8">
                        <div className="form-control md:w-1/2 ms-4">

                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Photo</span>
                            </label>
                            <label className="input-group ">

                                <input type="text" placeholder="Enter Photo URL" name="photo" required className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ms-4">
                            <label className="label">
                                <span className="label-text text-1xl font-semibold text-white">Date</span>
                            </label>
                            <label className="input-group ">

                                <input type="Datetime-local" placeholder="Enter Time" name="date" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>



                    <input type="submit" value="Add Coffe" className="btn btn-block bg-green-600" />

                </form>
            </div>

        </div>
    );
};

export default AddToy;