import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const MealCart = ({ meal }) => {
  return (
    <div className=" relative group cursor-pointer transition duration-500 ">
      <img
        src={meal?.strMealThumb}
        alt=""
        className=" rounded-xl w-32 md:w-56 object-cover group-hover:opacity-60"
      />
      <Link to={`/detail/${meal?.idMeal}`} >
        <div className=" absolute  flex -z-10 top-[40%] left-[30%] md:top-[45%] md:left-[40%] group-hover:z-10 w-9 h-9 md:w-12 md:h-12 bg-blue-500 text-white items-center justify-center rounded-full">
          <BsSearch className=" text-xl md:text-2xl" />
        </div>
      </Link>
    </div>
  );
};

export default MealCart;
