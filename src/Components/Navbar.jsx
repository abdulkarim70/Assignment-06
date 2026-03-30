import React from 'react';

const Navbar = () => {
    return (
        <div>
           <div className=' navbar max-w-7xl h-[92px]'>
 <h2>DigiTools</h2>
 <div className=' '> 
    <ul className='flex gap-3 [&>li>a]:no-underline'>
        <li><a  href="">Product</a></li>
        <li><a  href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">FAQ</a></li>
    </ul>

 </div>

<div className='login'>

</div>

            </div> 
        </div>
    );
};

export default Navbar;