import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Moves: NextPage = ({ locations }: any) => {
  const [search, setSearch] = useState("");

  return (
    <div className="text-center m-3 mb-5">
      <h1 className="text-5xl m-5 text-slate-50 mb-10 font-montserrat">
        All Locations
      </h1>
      <label htmlFor="search" className="text-xl text-slate-50 mr-3">
        Search Locations:
      </label>
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <div className="grid grid-rows-4 grid-cols-3 mt-10">
        {locations.results.map((location: any) => {
          if (search == "") {
            return (
              <div className=" m-5" key={location.name}>
                <Link href={`/locations/${location.name}`}>
                  <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
                    {location.name.replace("-area", " ").replace("-", " ")}
                  </a>
                </Link>
              </div>
            );
          } else {
            if (location.name.includes(search)) {
              return (
                <div className=" m-5">
                  <Link href={`/locations/${location.name}`}>
                    <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
                      {location.name.replace("-area", " ").replace("-", " ")}
                    </a>
                  </Link>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Moves;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/location-area?limit=100000&offset=0"
  );

  const data = await response.json();

  return {
    props: {
      locations: data,
    },
  };
};
