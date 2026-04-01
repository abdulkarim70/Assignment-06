import React, { use } from 'react';
import Card from './Card';
const PricingCard = ({promiseData, carts, setcarts}) => {
    const cards=use(promiseData)
    console.log(cards);
    return (
        <div className='  grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-4'>
            {cards.map((card, index)=>
                <Card card={card} key={index} carts={carts} setcarts={setcarts}/>
            )}
             </div>
    );
};

export default PricingCard;