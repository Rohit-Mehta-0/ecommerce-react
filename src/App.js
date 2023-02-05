import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgetPassword from './pages/forgetPassword';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path ="about" element={<About/>}/>
            <Route path ="contact" element={<Contact/>}/>
            <Route path ="store" element={<OurStore/>}/>
            <Route path ="/:id" element={<SingleProduct/>}/>
            <Route path ="blogs" element={<Blog/>}/>
            <Route path ="blogs/blog" element={<SingleBlog/>}/>  
            <Route path ="cart" element={<Cart/>}/>  
            <Route path ="checkout" element={<Checkout/>}/>          
            <Route path ="wishlist" element={<Wishlist/>}/>
            <Route path ="login" element={<Login/>}/>
            <Route path ="forgetPassword" element={<ForgetPassword/>}/>
            <Route path ="/signup" element={<Signup/>}/>




          </Route>

        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
