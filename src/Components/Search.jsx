import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Search = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();
    console.log(meals);
    setMeals(meals);
  };

  return (
    <div className=" flex flex-wrap justify-between md:justify-around items-center m-5 md:m-10 gap-5 md:gap-7">
      { meals === null ? (
        <p className=" text-3xl text-center ">There is no result</p>
      ) : (
        meals?.map((meal) => <Card key={meal?.idMeal} meal={meal} />)
      )}
    </div>
  );
};

export default Search;
