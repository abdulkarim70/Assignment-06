import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {/* Cart Item 1 */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-5 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl">
              ✏️
            </div>
            <div>
              <h3 className="font-medium text-lg">AI Writing Pro</h3>
              <p className="text-gray-500">$29</p>
            </div>
          </div>
          <button className="text-pink-500 font-medium hover:underline">
            Remove
          </button>
        </div>

        {/* Cart Item 2 */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-5 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl">
              🎨
            </div>
            <div>
              <h3 className="font-medium text-lg">Design Templates Pack</h3>
              <p className="text-gray-500">$49</p>
            </div>
          </div>
          <button className="text-pink-500 font-medium hover:underline">
            Remove
          </button>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500">Total:</span>
          <span className="text-2xl font-semibold">$78</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full py-4 rounded-full text-white font-medium text-lg 
          bg-gradient-to-r from-purple-600 to-pink-500 
          hover:opacity-90 transition">
          Proceed To Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;