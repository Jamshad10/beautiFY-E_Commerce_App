import React, { useState } from 'react';
import Header from '../../components/user/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const cartItemsLength = cartItems.length;

    const dispatch = useDispatch();

     // Create a local state to manage quantities
     const [localQuantities, setLocalQuantities] = useState({});

     const handleAddQuantity = (product) => {
         // Copy the local quantities and increase the quantity for the given product
         setLocalQuantities({
             ...localQuantities,
             [product.id]: (localQuantities[product.id] || 0) + 1,
         });
     };
 
     const handleMinusQuantity = (product) => {
         if (localQuantities[product.id] > 0) {
             // Copy the local quantities and decrease the quantity for the given product
             setLocalQuantities({
                 ...localQuantities,
                 [product.id]: (localQuantities[product.id] || 1) - 1,
             });
         }
     };

    //Remove the product from cart
    const handleDeleteItem = (product) => {
        dispatch(removeItem(product))
        toast.success('Product Removed from Cart')
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto bg-orange-50">
                <div className="flex shadow-md ">
                    <div className="w-3/4 bg-orange-50 px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="flex font-semibold text-3xl">Shopping Cart
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2 mt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </h1>
                            <h2 className="font-semibold text-2xl">{cartItemsLength} Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                        </div>
                        {cartItems.map((items) => {
                            return (
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={items.image} alt="Item" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 ">
                                            <span className="font-bold text-sm">{items.name}</span>
                                            <button
                                                className="-ml-6 font-semibold hover:text-red-500 text-gray-500 text-base"
                                                onClick={() => handleDeleteItem(items)}
                                            >
                                                Remove Item
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <button className='cursor-pointer' onClick={()=>handleMinusQuantity(items)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                        <input className="mx-2 border text-center w-8" type="text" value={localQuantities[items.id] || 0} />
                                        <button onClick={()=>handleAddQuantity(items)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${items.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${items.price * localQuantities[items.id]}.00</span>
                                </div>
                            )
                        })}

                        <Link to={'/home'} className="flex font-semibold text-indigo-600 text-sm mt-10">
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CartPage;
