import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getProducts } from './redux/productSlice';
import CartPage from './pages/user/CartPage';
import Signup from './pages/user/Signup';
import LoginPage from './pages/user/Login';

function App() {
  const dispatch = useDispatch();

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

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>
      <ToastContainer position='bottom-right' autoClose={3000}></ToastContainer>
    </>
  );
}

export default App;
