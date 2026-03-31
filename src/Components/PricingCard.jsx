import React, { use } from 'react';
import Card from './Card';
const PricingCard = ({promiseData}) => {
    const cards=use(promiseData)
    console.log(cards);
    return (
        <div className=' grid grid-cols-3 gap-3 py-4'>
            {cards.map((card, index)=>
                <Card card={card} key={index}/>
            )}
             </div>
    );
};

export default PricingCard;