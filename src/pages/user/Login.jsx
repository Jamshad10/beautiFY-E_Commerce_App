import { useState } from "react";
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MAIN_IMG } from "../../constants/constance";

export default function LoginPage() {
    const [email, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            dispatch(setUser(storedUser));
            navigate('/home');
            toast.success('Successfully Logged in')
        } else {
            toast.warning('Invalid Credentials')
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
            <img
                src={MAIN_IMG}
                alt="image"
                className=" w-96 h-96 rounded-full ml-16"
            />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9  text-gray-700">
                        Welcome to beautiFY!
                    </h2>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder="Enter your email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    placeholder="Enter your password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 "
                            >
                                Login in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account ?{' '}
                        <Link to={'/signup'} className="font-semibold leading-6 text-orange-600 hover:text-indigo-500">
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
