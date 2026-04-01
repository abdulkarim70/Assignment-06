import React from 'react';
import { toast } from 'react-toastify';

const Card = ({card, carts, setcarts}) => {
  const handleCard=()=>{
const isFind= carts.find(item=> item.id===card.id)
if(isFind){
  toast.error('Item already added')
  return
}

    setcarts([...carts, card])
    toast('Item added to cart!')
  }
    return (
              <div className="bg-white rounded-2xl shadow-md p-6  h-full  space-y-1 relative">

  
  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
{card.tag}
  </span>

  
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 ">
    <img src={card.icon} alt="icon" />
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
    {card.features.map((feature, index)=>
    <li key={index} className="flex items-center gap-2">
      <span className="text-green-500">✔</span> {feature}
    </li>)}
    
  </ul>

  
  <button onClick={handleCard} className="w-full py-2 rounded-full text-white bg-gradient-to-r from-purple-700 via-purple-500 to-purple-600 hover:opacity-90 transition">
    Buy Now
  </button>

</div> 

    );
};

export default Card;