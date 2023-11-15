import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/Menu";
import Laptops from "./pages/Laptops";
import Phones from "./pages/Phones";
import Accessories from "./pages/Accessories"; 
import ScrollToTop from "./utils/ScrollToTop";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/products" element={<Products />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
          <Footer />
        <ScrollToTop/>
      </Router>
    </div>
  );
}

export default App;
