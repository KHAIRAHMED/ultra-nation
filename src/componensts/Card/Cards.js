import React from 'react';

const Cards = (props) => {
    const cart = props.cart
    let total = 0;
    console.log(props)
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        total= total + country.population
        
    }
    return (
        <div>
            <h1>select Country :{cart.length}</h1>
            <p>population : {total}</p>
            <p></p>
        </div>
    );
};

export default Cards;