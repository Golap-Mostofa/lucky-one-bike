

import { useState } from 'react';
import './Card.css'
const Card = ({card}) => {
    
    
    return (
        <div className='order-samary'>
            <h4>0rder samary</h4>
            <p>card{card.length}</p>
            <p>name: {card[1]?.Name}</p>
        </div>
    );
};

export default Card;