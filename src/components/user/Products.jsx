import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { getProducts } from '../../redux/productSlice';
import axios from 'axios';


export default function Products() {
    const products = useSelector((state) => state.products.products.slice(100, 106));
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json');
            dispatch(getProducts(response.data));
          } catch (error) {
            console.log(error);
          }
        }
        fetchProducts();
      }, [])

    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItem(item))
        toast.success('Added to Cart')
    };

    return (
        <div className="bg-orange-50 lg:px-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-8">
                    <div className='flex items-center justify-center'>
                        <h2 className="text-3xl font-semibold text-gray-700 relative overflow-hidden pb-2 tracking-wide">
                            Latest Products
                            <span className='absolute left-0 w-1 ml-6 h-1 bg-gray-600 rounded-lg bottom-0'>.</span>
                            <span className='absolute left-0 w-1 ml-8 h-1 bg-gray-600 rounded-lg bottom-0'>.</span>
                            <span className="absolute ml-10 left-0 w-1/2 h-1 bg-gray-600 rounded-lg bottom-0"></span>
                            <span className='absolute right-0 w-1 mr-14 h-1 bg-gray-600 rounded-lg bottom-0'>.</span>
                            <span className='absolute right-0 w-1 mr-12 h-1 bg-gray-600 rounded-lg bottom-0'>.</span>
                        </h2>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:gap-y-6">
                        {products.map((callout) => (
                            <div key={callout.id} className='bg-white px-4 py-4 rounded-xl'>
                                <div className="group relative cursor-pointer">

                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={callout.image}
                                            alt='image'
                                            className="h-full w-full object-cover object-center border rounded-xl"
                                        />
                                        <div className="absolute left-0 bottom-0 bg-gray-600 px-3 py-1 text-white text-xs font-semibold rounded-tr-lg">
                                            Shine & Glow
                                        </div>
                                    </div>
                                    <p className="mt-2 text-base font-semibold text-gray-900">{callout.name}</p>
                                    <div className='flex items-center justify-between'>

                                        <h3 className="mt-1 text-xs text-gray-500">
                                            <span className="absolute inset-0 " />
                                            <span className='line-through'>$40.00</span>
                                            <span className="text-sm font-semibold text-gray-700 ml-3"> ${callout.price}</span>
                                        </h3>
                                        <div className="flex items-center space-x-1 mt-2">
                                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-300" />
                                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-300" />
                                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-300" />
                                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-300" />
                                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-gray-300 dark:text-gray-500" />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-end'>
                                        <h1 className='text-xs text-gray-500'>329 Reviews</h1>
                                    </div>

                                </div>
                                <button
                                    onClick={() => handleAddToCart(callout)}
                                    className="w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-500 border  rounded-md shadow-sm hover:bg-orange-600 ">
                                    Add to Cart
                                </button>

                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
