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

    
        <div className="flex gap-2 items-center justify-center p-1">
          
        
          <button onClick={()=> setActive('products')} className= {active==='products'?"btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]":'btn  rounded-full'}>Products</button>

         
       <button onClick={()=> setActive('cart')} className= {active==='cart'?"btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]":'btn rounded-full'}>Cart-(0)</button>
        </div>

      </div>
    </div>
  );
};

export default PremiumSection;