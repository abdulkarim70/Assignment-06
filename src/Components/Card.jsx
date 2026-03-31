import React from 'react';

const Card = ({card}) => {
    return (
              <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm space-y-4 relative">

  {/* <!-- Badge --> */}
  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
{card.tag}
  </span>

  {/* <!-- Icon --> */}
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
    
  </div>

  
  <h2 className="text-xl font-semibold text-gray-800">
    {card.name}
  </h2>

  
  <p className="text-gray-500 text-sm">
    {card.description}
  </p>

  
  <h3 className="text-2xl font-bold text-gray-900">
    ${card.price}<span className="text-sm text-gray-400">/Mo</span>
  </h3>


  <ul className="space-y-2 text-sm text-gray-600">
    <li className="flex items-center gap-2">
      <span className="text-green-500">✔</span> Unlimited AI generations
    </li>
    <li className="flex items-center gap-2">
      <span className="text-green-500">✔</span> 50+ writing templates
    </li>
    <li className="flex items-center gap-2">
      <span className="text-green-500">✔</span> Grammar checker
    </li>
  </ul>

  
  <button className="w-full py-2 rounded-full text-white bg-gradient-to-r from-purple-700 via-purple-500 to-purple-600 hover:opacity-90 transition">
    Buy Now
  </button>

</div> 

    );
};

export default Card;