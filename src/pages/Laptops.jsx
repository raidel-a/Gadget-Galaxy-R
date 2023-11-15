import React from 'react';
import MenuList from "../utils/MenuList.json";
import MenuItem from '../utils/MenuItem';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Menu.css';

function Laptops() {

  const laptopItems = MenuList.filter(menuItem => menuItem.type === 'Laptop');
  return (
    <div className="menu">
      <h1 className="menuTitle">Laptops</h1>

      <div className="menuList">
        {laptopItems.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              price={menuItem.price}
              name={menuItem.name}
              detail={menuItem.detail}

            />
          );
        })}
      </div>
    </div>
  );
}

export default Laptops;
