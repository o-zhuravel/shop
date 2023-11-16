import './App.css';
import React from "react";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import {Route, Routes} from "react-router";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import Future from "./components/Future/Future";
import Contacts from "./components/Contacts/Contacts";
import Product from "./components/Product/Product";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products-list' element={<ProductsList/>}/>
            <Route path='/future' element={<Future/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/product/:productId' element={<Product/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
