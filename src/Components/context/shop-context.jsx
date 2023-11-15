import React, { createContext, useState } from 'react'
import MenuList from "../../utils/MenuList.json";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  MenuList.forEach(item => {
    cart[item.id] = 0; // Using the 'id' from each item
  });
  return cart
}

export const ShopContextProvider = (props) =>{
  /*Define all states and pass the state to the provider which can be accessed in cart and shop */
  const[cartItems, setCartItems] = useState(getDefaultCart());
  
  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = MenuList.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount;


  }

  const addToCart= (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const removeFromCart= (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  };



  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
  
}
