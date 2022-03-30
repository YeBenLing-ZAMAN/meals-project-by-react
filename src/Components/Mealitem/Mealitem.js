import React from 'react';
import './Mealitem.css';

const Mealitem = ({item}) => {
    const{strMealThumb,strMeal,strInstructions}=item;
    return (
        <div className='item-container'>
            <img src={strMealThumb} alt="" />

            <div className='details-container'>
            <h2>{strMeal}</h2>
            <p>{strInstructions.substr(0, 150)}</p>
            </div>
        </div>
    );
};

export default Mealitem;