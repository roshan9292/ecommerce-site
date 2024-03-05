import React from "react";
import "./style.css"
 export default function Navbar({counter,cartItems}){
  return(
    <div className="navbar">
      <input className="searchBar" placeholder="Search for  products"></input>
       <div className="cartElement">
        <img className="cartImg" src="./images/cart.svg"/>
        <button onClick={cartItems}>Checkout</button>
       </div >
    </div>
  )
}
