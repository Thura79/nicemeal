import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    nav(`/search/${search}`)
    setSearch('')
  }

  console.log(search);

  return (
    <div className=" flex justify-between items-center border rounded p-5 shadow">
      <Link to={"/"}>
        <GiKnifeFork className=" text-3xl md:text-5xl lg:text-6xl text-orange-900" />
      </Link>

      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className=" border border-slate-400 outline-none rounded px-2 py-1 md:px-3 md:py-1 lg:px-5 lg:py-2"
        />
      </form>
    </div>
  );
};

export default Nav;
