import React, { useContext } from 'react';
import { ShopContext } from '../Components/context/shop-context';
import '../styles/Menu.css';



function MenuItem({ id , name, price, detail, image }) {
  
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>${price}</h1>
      <h2>{name}</h2>
      <p>{detail}</p>
      <button onClick ={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  );
}

export default MenuItem;
