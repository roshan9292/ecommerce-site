import React from "react";

export default function CartProducts({product,incCartCount,decCartCount}){

  return(
    <div className="cartProducts">
      <div className="leftSection">
        <img src={product.image}/>
        <div className="quantity">
          <button onClick={()=>decCartCount(product)}>-</button>
          <p>{product.cartCount}</p>
          <button onClick={()=>incCartCount(product)}>+</button>
        </div>
      </div>
      <div className="rightSection">
       <p className="cartTitle">{product.title}</p>
       <p className="priceTag">{product.price}$</p>
       <div className="pay">
            <p className="totalPrice"> Total : {(product.price*product.cartCount).toFixed(1)}$</p>
            <p className="payButton">Pay</p> 
          </div>
        </div>
    </div>
  )
}