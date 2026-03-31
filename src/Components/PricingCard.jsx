import React, { use } from 'react';
import Card from './Card';
const PricingCard = ({promiseData}) => {
    const cards=use(promiseData)
    console.log(cards);
    return (
        <div className='flex grid grid-cols-3 gap-3'>
            {cards.map(card=>
                <Card card={card}/>
            )}
             </div>
    );
};

export default PricingCard;