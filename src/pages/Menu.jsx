import React from 'react';
import MenuList from "../utils/MenuList.json";
import MenuItem from '../utils/MenuItem';
import BannerImage from '../assets/pixelGalaxy.jpg';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 className="menuTitle">Products</h1>

      <div className="menuList">
        {MenuList.map((menuItem, key) => {
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

export default Menu;
