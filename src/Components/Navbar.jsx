import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
const Navbar = ({ carts }) => {
    return (
        <div>
           <div className=' navbar mx-auto max-w-[1600px] h-[92px] justify-between items-center px-[200px] '>
 <h2 className='  text-3xl font-bold '><span className='text-purple-700'>Digi</span><span className='text-purple-600'>Tools</span> </h2>
 <div className=' '> 
    <ul className='flex gap-4 [&>li>a]:no-underline text-4 font-semibold '>
        <li><a  href="">Product</a></li>
        <li><a  href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">FAQ</a></li>
    </ul>

 </div>

<div className='login flex items-center justify-center gap-2 text-4 font-semibold'>
  <div className='flex items-center justify-center'><CiShoppingCart className='text-2xl ' /><p >{carts.length}</p>
    </div> <button>Login</button>
  <div className=''>
    <button className='btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]'>Get Started</button>
  </div>
</div>

            </div> 
        </div>
    );
};

export default Navbar;