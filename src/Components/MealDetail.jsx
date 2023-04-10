import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const MealDetail = () => {
  const { id } = useParams();

  const [food, setfood] = useState();
  const [load, setLoading] = useState(true);

  const fetchdetail = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    console.log(meals);
    setfood(meals[0]);
    setLoading(false)
  };

  useEffect(() => {
    fetchdetail();
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div className=" flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 m-5 md:m-10">
          <img
            src={food?.strMealThumb}
            alt=""
            className=" w-full rounded-xl h-auto md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
          />
          <div className=" mt-5 md:mt-0 space-y-1">
            <p className=" text-xl md:text-3xl">{food?.strMeal}</p>
            <p className=" text-lg">{food?.strArea}</p>
            <p className=" text-lg">{food?.strCategory}</p>
            <p className=" text-slate-500">{food?.strInstructions}</p>

            <div className=" flex items-center gap-5">
              <a href={food?.strYoutube} target="_blank">
                <BsYoutube className=" text-red-600 text-5xl" />
              </a>
              <p className=" text-slate-500">Watch on youtube</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MealDetail;
