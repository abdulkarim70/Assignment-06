import { useState } from "react";

const PremiumSection = () => {
  const [active, setActive] = useState("products");

  return (
    <div className=" py-20  mx-auto mx-w-[1200px] px-[200px]">
      <div className="max-w-4xl mx-auto text-center">
       
        <h1 className="text-5xl font-bold mb-4">
          Premium Digital Tools
        </h1>

     
        <p className="text-[#627382] text-lg max-w-2xl mx-auto mb-10">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

    
        <div className="inline-flex rounded-full p-1">
          
        
          <button
            onClick={() => setActive("products")}
            className={`px-8 py-3 rounded-full text-[16px]  ${
              active === "products"
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg"
                : "text-gray-700"
            }`}
          >
            Products
          </button>

         
          <button
            onClick={() => setActive("cart")}
            className={`px-8 py-3 rounded-full font-medium  ${
              active === "cart"
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-[#FFFFFF] shadow-lg"
                : "text-gray-700"
            }`}
          >
            Cart (0)
          </button>
        </div>

      </div>
    </div>
  );
};

export default PremiumSection;