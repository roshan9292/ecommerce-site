import React, { useEffect } from "react"
import Product from "./product"
import "./style.css"
import Navbar from "./navbar"
import CartProducts from "./cartProducts"
import Category from "./category"
 function App(){
  const[productData,setProductData]=React.useState([])
  
  const [count,setCount]=React.useState(0)
  React.useState(function(){
    allProducts();
  },[])

// Api call to get all products
  function allProducts(){ 
    fetch('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(json=>setProductData(json.map(data=>({...data,cartCount:count}))))
  }

  const [cartToggle,setCartToggle]=React.useState(false)  
  function showCartItems(){
  setCartToggle(!cartToggle)
  }

  const [cartProduct,setCartProduct]=React.useState([])

  function addToCart(e){
    setCartProduct((product)=>[...product,e],setCount(e.cartCount=e.cartCount+1),)
  }

   const updatedCart= cartProduct.filter((item,index)=>{
    return index === cartProduct.findIndex(function(obj){
      return(item.id === obj.id);
    }
    )})

    const [isFiltered,setIsFiltered]=React.useState(false)
  function filterProducts(category){
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>res.json())
    .then(json=>setProductData(json.map(data=>({...data,cartCount:count}))))
    setIsFiltered(true);
  }

  function showAllProducts(){
    allProducts();
    setIsFiltered(false);
  }
    function incCartCount(iCart){
     setCount(iCart.cartCount += 1);
     console.log(iCart.cartCount)
    }

    function decCartCount(dCart){
    setCount(dCart.cartCount -= 1)
    if(dCart.cartCount <=0){
      setCartProduct(cartProduct.filter((product)=>product.id !== dCart.id))
      console.log(updatedCart);
    }
    }


  return(
  cartToggle ?
  <div className="cartPage">
  {updatedCart.map((cartItems)=><CartProducts  product={cartItems} incCartCount={incCartCount} decCartCount={decCartCount}/>)}
  </div>
  : 
  <>
   <Navbar counter={count} cartItems={showCartItems}/>
   <div className="mainSection">
   <Category filterProducts={filterProducts} isfiltered={isFiltered} showAllProducts={showAllProducts}/>
   <div className="productPage">
   {productData.map((product=><Product  key={product.id} addToCart={()=>addToCart(product)}  product={product} />))}
   </div>
   </div>
   </>
  )
}
export default App;