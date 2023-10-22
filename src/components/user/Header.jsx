import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
    const cartItems = useSelector((state) => state.cart.cart)
    console.log(cartItems);
    const cartItemsLength = cartItems.length;

    return (
        <Disclosure as="nav" >
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-28">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <div className='rounded-full h-6 w-6 bg-yellow-500'></div>
                                    <h1 className='mx-3 font-bold text-black text-2xl'>beautiFY</h1>

                                </div>
                                <div className="hidden sm:block lg:ms-40">
                                    <div className="flex  md:ms-0 ">
                                        <Link
                                            to={'/home'}
                                            className="group uppercase text-gray-800 hover:text-rose-500 py-2 text-xs font-medium relative"
                                        >
                                            <span className='border-r-2 px-3'>Home</span>
                                            <div className="absolute  inset-x-0 bottom-0 h-0.5  bg-rose-500 transform scale-x-0  group-hover:scale-x-50 transition-transform"></div>
                                        </Link>

                                        <Link
                                            to={''}
                                            className="group uppercase text-gray-800 hover:text-rose-500 py-2 text-xs font-medium relative"
                                        >
                                            <span className='border-r-2 px-3'>About Us</span>
                                            <div className="absolute  inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0  group-hover:scale-x-50 transition-transform"></div>
                                        </Link>
                                        <Link
                                            to={''}
                                            className="group uppercase text-gray-800 hover:text-rose-500 py-2 text-xs font-medium relative"
                                        >
                                            <span className='border-r-2 px-3'>Make Up</span>
                                            <div className="absolute  inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0  group-hover:scale-x-50 transition-transform"></div>
                                        </Link>
                                        <Link
                                            to={''}
                                            className="group uppercase text-gray-800 hover:text-rose-500 py-2 text-xs font-medium relative"
                                        >
                                            <span className='border-r-2 px-3'>Show All</span>
                                            <div className="absolute  inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0  group-hover:scale-x-50 transition-transform"></div>
                                        </Link>
                                        <Link
                                            to={''}
                                            className="group uppercase text-gray-800 hover:text-rose-500 py-2 text-xs font-medium relative"
                                        >
                                            <span className='border-r-2 px-3'>How To</span>
                                            <div className="absolute  inset-x-0 bottom-0 h-0.5 px-1 bg-rose-500 transform scale-x-0  group-hover:scale-x-50 transition-transform"></div>
                                        </Link>
                                        <div className="relative ml-8">
                                            <input
                                                className="text-xs appearance-none border pl-10 border-gray-300 hover:border-rose-500 bg-slate-50 rounded-full  py-2 px-3 text-gray-800 leading-tight "
                                                id="username"
                                                type="text"
                                                placeholder="Search Product ....."
                                            />
                                            <div className="absolute right-0 inset-y-0 flex items-center">
                                                <span className='mb-1 mr-2 text-slate-400'>|</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="-ml-1 mr-3 h-5 w-5 text-gray-800 hover:text-rose-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                                    />
                                                </svg>

                                            </div>
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-3 text-gray-800 hover:text-rose-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div className='flex'>
                                        <Menu.Button className="relative  flex rounded-full bg-rose-500 text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-2 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>

                                        </Menu.Button>
                                        <Link to={'/cart'}>
                                            <Menu.Button className="relative ml-4 flex rounded-full bg-rose-500 text-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>

                                                {/* Default value (0) */}
                                                <span className="text-rose-500 text-base font-semibold absolute -top-1 -right-2.5">{cartItemsLength}</span>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 p-1.5 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
                                            </Menu.Button>
                                        </Link>
                                    </div>
                                  
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">

                            <Disclosure.Button
                                as="a"
                                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
                            >
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
                            >
                                Course
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
                            >
                                About
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                className='text-gray-800 hover:bg-gray-200 hover:text-black block rounded-md px-3 py-2 text-base font-medium'
                            >
                                Contact
                            </Disclosure.Button>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}