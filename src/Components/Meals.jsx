import React, { useEffect, useState } from 'react'
import MealCart from './MealCart';
import Loading from './Loading';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    
    const fetchMeal = async() => {
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const {meals} = await api.json();
        setMeals(meals)
    }
    useEffect(() => {
        fetchMeal()
        
    }, [])


  return (
    <div className=' flex flex-wrap justify-between md:justify-around items-center m-5 md:m-10 gap-2 md:gap-7'>
        {
           meals.length ? meals?.map(meal => (<MealCart key={meal?.idMeal} meal={meal} />)    ) : <Loading/>
        }
    </div>
  )
}

export default Meals