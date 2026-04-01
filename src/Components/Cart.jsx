import React, { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({carts, setcarts}) => {
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
   
   const handleRemove=(cart)=>{
    const updatedCart = carts.filter(c=> c.id !==cart.id)
    setcarts(updatedCart)
    toast('Item removed from cart')
   }
   const handleCheckout=()=>{
    setcarts([])
    toast('Checkout success')
   }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

       
        {carts.length===0?<p className="text-2xl text-center font-bold">Your Cart Is Empty</p>: carts.map(cart=>
        <div key={cart.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-5 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl">
              <img src={cart.icon} alt="icon" />
            </div>
            <div>
              <h3 className="font-medium text-lg">{cart.name}</h3>
              <p className="text-gray-500">${cart.price}</p>
            </div>
          </div>
          <button onClick={() => handleRemove(cart)} className="text-pink-500 font-medium hover:underline">
            Remove
          </button>
        </div>)}

     
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">Total:</span>
          <span className="text-2xl font-semibold">${totalPrice}</span>
        </div>

       
        <button onClick={handleCheckout} className="w-full py-4 rounded-full text-white font-medium text-lg 
          bg-gradient-to-r from-purple-600 to-pink-500 
          hover:opacity-90 transition">
          Proceed To Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;