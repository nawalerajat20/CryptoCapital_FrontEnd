import React, { useState } from 'react';
import jsonData from '../JSON-Files/data.json';
import { useNavigate } from 'react-router-dom';


function Cryptoinfo() {
    const [cards] = useState(jsonData);
    const navigate = useNavigate();
    return (
        <div>
            <section>
                <div className='container'>
                    <div className='cards'>
                        {cards && cards.map((card, i) => (
                            <div kay={i} className='card3'>
                                <img className='crypto_sym' src={card.icon} alt="" srcset="" />
                                <h2>{card.name}</h2>
                                <h2 className='sym'>{card.symbol}</h2>
                                <div className='button-view'
                                    onClick={(e) => {
                                        navigate(
                                            `/cryptoinfo/${card.name ? card.name : "bitcoin"}/${card.symbol ? card.symbol : "BTC"}`
                                        );
                                    }}
                                    
                                >
                                    View
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cryptoinfo