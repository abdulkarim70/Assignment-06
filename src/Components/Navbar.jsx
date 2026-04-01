import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ carts }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-[1600px] h-[80px] flex justify-between items-center px-6 md:px-12 lg:px-[100px]">
        
    
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-purple-700">Digi</span>
          <span className="text-purple-600">Tools</span>
        </h2>

      
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><a href="#">Product</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

       
        <div className="hidden md:flex items-center gap-4 font-semibold">
          
    
          <div className="flex items-center gap-1">
            <CiShoppingCart className="text-2xl" />
            <p>{carts.length}</p>
          </div>

          <button>Login</button>

          <button className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-700 to-purple-500">
            Get Started
          </button>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 shadow">
          <a href="#" className="block">Product</a>
          <a href="#" className="block">Features</a>
          <a href="#" className="block">Pricing</a>
          <a href="#" className="block">Testimonials</a>
          <a href="#" className="block">FAQ</a>

          <div className="flex items-center gap-2 pt-4 border-t">
            <CiShoppingCart className="text-xl" />
            <span>{carts.length}</span>
          </div>

          <button className="block w-full text-left">Login</button>

          <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-purple-700 to-purple-500">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;