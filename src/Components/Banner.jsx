import React from 'react';
import PlayImage from '../assets/Play.png'
import BannerImgage from "../assets/banner.png"
const Banner = () => {
    return (
     <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 py-16">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

 
    <div className="w-full lg:w-1/2 text-center lg:text-left">

     
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1E7FF] shadow-sm mb-6">
        <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
        <p className="text-purple-600 font-semibold text-sm">
          New: AI-Powered Tools Available
        </p>
      </div>

     
      <h2 className="text-[#101727] text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
        Supercharge Your <br className="hidden sm:block" />
        Digital Workflow
      </h2>

      
      <p className="text-[#627382] text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
      </p>

  
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg">
          Explore Products
        </button>

        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-600 text-purple-600">
          <img src={PlayImage} alt="play" className="w-5 h-5" />
          Watch Demo
        </button>
      </div>
    </div>

   
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        className="w-full max-w-md lg:max-w-lg"
        src={BannerImgage}
        alt="banner"
      />
    </div>

  </div>
</div>
    );
};

export default Banner;