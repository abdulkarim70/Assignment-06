import React from 'react';
import PlayImage from '../assets/Play.png'
import BannerImgage from "../assets/banner.png"
const Banner = () => {
    return (
        <div>
        <div  className='flex px-[200px] gap-4 py-[60px]'>
<div className='w-[640px] h-[406px]'>
    <div>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 shadow-sm">
  
  <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
  
  <p className="text-purple-600 font-semibold text-sm">
    New: AI-Powered Tools Available
  </p>

</div>
</div>
<span><h2 className='text-[#101727] text-[65px] font-extrabold' >Supercharge Your</h2></span>
<span><h2 className='text-[#101727] text-[65px] font-extrabold'>Digital WorkFlow</h2></span>
<div className='p text-[#627382] text-[18px]'>
<span><p>Access premium AI tools, design assets, templates, and productivity</p></span>
<span><p>software—all in one place. Start creating faster today.</p>

</span>
<span><p>Explore Products</p>
</span>
</div>
<div className='flex gap-2 mt-3'>
    <button className=' btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]'>Explore Products</button>
    <button className='flex btn btn-outline rounded-full border-purple-600' > <img src={PlayImage} alt="" /> Watch Demo</button>
</div>
</div>
<div >
    <img className='w-100 h-110' src={BannerImgage} alt="" />
</div>

            </div>  
        </div>
    );
};

export default Banner;