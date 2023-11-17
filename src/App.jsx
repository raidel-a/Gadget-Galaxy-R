import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Menu";
import Laptops from "./pages/Laptops";
import Phones from "./pages/Phones";
import Accessories from "./pages/Accessories";
import React from 'react';
import { ShopContextProvider } from "./Components/context/shop-context";
import { Cart } from "./pages/Cart";


import ScrollToTop from "./utils/ScrollToTop";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShopContextProvider>

    <div className="App">
      <Router>
        
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/products" element={<Products />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
          <Footer />
        <ScrollToTop/>
      </Router>
    </div>
    
    </ShopContextProvider>
  );
}

export default App;
