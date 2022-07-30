import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Items: NextPage = ({ items }: any) => {
  const [search, setSearch] = useState("");
  return (
    <div className="text-center m-3 mb-5">
      <h1 className="text-5xl m-5 text-slate-50 mb-10 font-montserrat">
        All Items
      </h1>
      <label htmlFor="search" className="text-xl text-slate-50 mr-3">
        Search Items:
      </label>
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      ></input>
      <div className="grid xl:grid-rows-4 xl:grid-cols-5 mt-10 md:grid-cols-2">
        {items.results.map((item: any) => {
          if (search == "") {
            return (
              <div className=" m-5" key={item.name}>
                <Link href={`/items/${item.name}`}>
                  <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
                    {item.name.replace("-", " ")}
                  </a>
                </Link>
              </div>
            );
          } else {
            if (item.name.includes(search)) {
              return (
                <div className=" m-5">
                  <Link href={`/items/${item.name}`}>
                    <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
                      {item.name.replace("-", " ")}
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

export default Items;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/item?limit=100000&offset=0"
  );

  const data = await response.json();

  return {
    props: {
      items: data,
    },
  };
};
