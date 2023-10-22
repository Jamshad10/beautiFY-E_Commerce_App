import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_IMG } from '../../constants/constance';
import Header from '../../components/user/Header';
import Products from '../../components/user/Products';

const Home = () => {
    return (
        <div>
            <Header />
            {/* Opening Section */}
            <div className='lg:flex lg:items-center lg:justify-around lg:mx-auto bg-orange-50 border-b pb-4'>

                <div className=" max-w-xl ">
                    <div className="text-justify mb-28 py-2 px-6 lg:py-0 lg:mb-20 lg:px-14">
                        <h1 className='text-xl font-medium uppercase text-orange-400'>The Royal Elegance</h1>
                        <h1 className="mt-4 text-4xl font-bold tracking-wide text-gray-700 sm:text-5xl border-l-4 border-gray-800 rounded-sm px-4">
                            Revitalizing <br /> Your <span className='text-orange-400'>Beauty</span> for
                        </h1>
                        <h1 className="mt-2 text-4xl font-bold tracking-wide text-gray-700 sm:text-5xl border-l-4 border-orange-400 rounded-sm px-4">Years</h1>
                        <p className="mt-4 text-sm  text-gray-500 lg:text-justify">
                            Why hide your beauty when you can enhance it? Beauty gives you the confidence you deserve
                        </p>
                        <div className='flex mt-7'>
                            <Link to={''} className="relative rounded-xl px-5 py-2.5 overflow-hidden group bg-orange-400  hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32  transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative font-semibold">Shop Now</span>
                            </Link>
                            <Link to={''} className="relative rounded-full mx-6 px-2.5 py-2.5 overflow-hidden group bg-white border border-orange-400 text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-400 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-8  transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rounded-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                </span>
                            </Link>
                            <h1 className='-ml-4 pt-2.5 text-gray-500 text-sm font-medium'>Product Video</h1>
                        </div>
                    </div>
                </div>
                <img
                    src={MAIN_IMG}
                    alt="profile image"
                    className=' lg:h-96  -mt-20 lg:mt-20 lg:mr-20 rounded-full'
                />
            </div>
            {/* opening section ended */}
            <Products />

        </div>
    )
}

export default Home;