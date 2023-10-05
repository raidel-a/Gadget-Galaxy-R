import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="h-container">
      <div className="logo-text-container">
        <img src="src/assets/gg_Logo.PNG" alt="Logo" />
        <h1 className="primaryText">
          <span className="cooper-black">gadget</span>
          <span className="orator-bold">GALAXY</span>
        </h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search any product" />
        </div>
        <div className="h-menu">
          <div className="menu-trigger" onClick={() => setOpen(!open)}>
            <h3>Products</h3>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropdownItem text={"Laptop"} />
                <DropdownItem text={"Mobile"} />
                <DropdownItem text={"Accessories"} />
              </ul>
            </div>
          </div>
          <h3>Contact Us</h3>
          <h3>Shopping Cart</h3>
        </div>
      </div>
    </section>
  );
};

const DropdownItem = ({ text }) => (
  <li className="dropdownItem">
    <a>{text}</a>
  </li>
);

export default Header;
