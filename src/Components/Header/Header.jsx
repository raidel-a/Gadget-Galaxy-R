import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import productData from "../../utils/MenuList.json";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/gg_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownTimerRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(dropdownTimerRef.current);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  return (
    <section className="h-wrapper">
      <div className="h-container">
        
        <Link to="/">
          <img
            src={logo}
            aria-label="Gadget Galaxy Logo"
            className="logo-image"
          />
          <h1 className="primary-text">GadgetGalaxy</h1>
        </Link>

        <SearchBar className="searchBar" placeholder="Search" data={productData} />

        <div className="h-menu">
          <div
            className="pagesDropdown"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <h3 onClick={handleDropdownToggle}>Products</h3>
            <ul className={`dropdown-menu ${isDropdownVisible ? "active" : "inactive"}`}>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/laptops">Laptops</Link></li>
              <li><Link to="/phones">Phones</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </div>

          <Link to="/">
            <h3>Contact Us</h3>
          </Link>
          <Link to="/Cart">
            <h3>Cart</h3>
          </Link>
        </div>

        <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
          <MenuIcon />
        </div>
      </div>

      {isMobileMenuVisible && (
        <nav className="mobile-menu">
          <Link to="/products">Products</Link>
          <Link to="/laptops">Laptops</Link>
          <Link to="/phones">Phones</Link>
          <Link to="/accessories">Accessories</Link>
        </nav>
      )}
    </section>
  );
};


function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} key={key} target="_blank">
                {/* key={key} */}
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
