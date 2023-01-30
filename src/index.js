import React from "react"
import ReactDOM  from "react-dom"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Store from "./Components/pages/Store";
import Home from "./Components/Main/Home";
import Community from "./Components/pages/Community";
import Design from "./Components/pages/Design";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Header/Login";
import Cart from "./Components/Header/Cart";
import DetailProduct from "./Components/pages/DetailProduct";



// browserRouter
//Routes
//h
//route index element={< Home />}
//route path="store" element={< Store />}
//f

const App = () => {
    
  return (
    <div id='app'>
        <BrowserRouter>
          <header id="header">
            <Header/>
          </header>

          <Routes>
            <Route index element={<Home/>} />
            <Route path="store" element={<Store />} />
            <Route path="community" element={<Community />} />
            <Route path="design" element={<Design/>} />
            <Route path="login" element={<Login/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="detailproduct" element={<DetailProduct/>} />
          </Routes>
          
          <footer id="footer">
            <Footer/>
          </footer>
        </BrowserRouter>

    </div>

    
  )
}

const rootElement = document.getElementById('root')
  ReactDOM.render(<App />, rootElement)
  // className="position-fixed top-0 start-0 end-0"
