import React, { useEffect, useState } from 'react';
import Mealitem from '../Mealitem/Mealitem';
import './Home.css';

const Home = () => {
    const [searchText, setSearchText] = useState('');// **

    const searchFood = e => {
        setSearchText(e.target.value);
    }

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchResult(data.meals)); // this line is very improtant 
    }, [searchText])

    return (
        <div>
            <h1 >Search your favourite food</h1>
            <input onChange={searchFood} type="text" />
            <br />
            <div className='items-container'>
               
            </div>
        </div>
    );
};

export default Home;