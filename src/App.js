import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/About';
import Categories from './components/pages/categories';
import Cart from './components/pages/Cart';
import Account from './components/pages/account';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ProductDetails from './components/pages/ProductDetails';

const App = () => {

  return (
    <div>
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/product/:Id' element={<ProductDetails/>}/>
        </Routes>
      </ BrowserRouter>
    </div>
  )
}

export default App