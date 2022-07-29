import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Move: NextPage = ({ move }: any) => {
  const [search, setSearch] = useState("");
  let typeCSS = "";
  let buttonColor = "";
  let shadowColor = "";
  let hoverColor = "";
  const getMoveName = () => {
    if (move.type.name == "normal") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "fire") {
      typeCSS = "bg-red-800";
      buttonColor = "bg-red-500";
      shadowColor = "shadow-red-900";
      hoverColor = "hover:bg-red-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-red-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "flying") {
      typeCSS = "bg-slate-800";
      buttonColor = "bg-slate-500";
      shadowColor = "shadow-slate-900";
      hoverColor = "hover:bg-slate-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-slate-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "ice") {
      typeCSS = "bg-sky-800";
      buttonColor = "bg-sky-500";
      shadowColor = "shadow-sky-900";
      hoverColor = "hover:bg-sky-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-sky-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "water") {
      typeCSS = "bg-blue-800";
      buttonColor = "bg-blue-500";
      shadowColor = "shadow-blue-900";
      hoverColor = "hover:bg-blue-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-blue-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "poison") {
      typeCSS = "bg-violet-800";
      buttonColor = "bg-violet-500";
      shadowColor = "shadow-violet-900";
      hoverColor = "hover:bg-violet-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-violet-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "bug") {
      typeCSS = "bg-lime-800";
      buttonColor = "bg-lime-500";
      shadowColor = "shadow-lime-900";
      hoverColor = "hover:bg-lime-400";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-lime-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "fighting") {
      typeCSS = "bg-orange-700";
      buttonColor = "bg-orange-500";
      shadowColor = "shadow-orange-900";
      hoverColor = "hover:bg-orange-400";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-orange-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "fairy") {
      typeCSS = "bg-pink-800";
      buttonColor = "bg-pink-500";
      shadowColor = "shadow-pink-900";
      hoverColor = "hover:bg-pink-400";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-pink-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "psychic") {
      typeCSS = "bg-fuchsia-800";
      buttonColor = "bg-fuchsia-500";
      shadowColor = "shadow-fuchsia-900";
      hoverColor = "hover:bg-fuchsia-400";

      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-fuchsia-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "dragon") {
      typeCSS = "bg-black";
      buttonColor = "bg-slate-700";
      shadowColor = "shadow-slate-900";
      hoverColor = "hover:bg-slate-500";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-black font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "steel") {
      typeCSS = "bg-gray-400";
      buttonColor = "bg-gray-300";
      shadowColor = "shadow-gray-500";
      hoverColor = "hover:bg-gray-200";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-gray-100 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "electric") {
      typeCSS = "bg-yellow-600";
      buttonColor = "bg-yellow-400";
      shadowColor = "shadow-yellow-700";
      hoverColor = "hover:bg-yellow-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-yellow-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "grass") {
      typeCSS = "bg-emerald-800";
      buttonColor = "bg-emerald-500";
      shadowColor = "shadow-emerald-900";
      hoverColor = "hover:bg-emerald-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-emerald-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "rock") {
      typeCSS = "bg-amber-600";
      buttonColor = "bg-amber-500";
      shadowColor = "shadow-amber-700";
      hoverColor = "hover:bg-amber-300";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-amber-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "ground") {
      typeCSS = "bg-amber-800";
      buttonColor = "bg-amber-700";
      shadowColor = "shadow-amber-900";
      hoverColor = "hover:bg-amber-600";
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-amber-600 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    return (
      <div>
        <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
          {move.id}: {move.name.replace("-", " ")}
        </h1>
      </div>
    );
  };

  const moveName = getMoveName();

  const getMoveData = () => {
    return (
      <div className={`text-2xl text-slate-50`}>
        <h1 className="m-3">
          Accuracy: {move.accuracy ? move.accuracy : "No data found"}
        </h1>
        <h1 className="capitalize m-3">Type: {move.type.name}</h1>
        <h1 className="m-3">
          Power: {move.power ? move.power : "No data found"}
        </h1>
        <h1 className="m-3">PP: {move.pp}</h1>
        <h1 className="m-3">Move Priority: {move.priority}</h1>
        <h1 className="m-3 capitalize">
          Move Target: {move.target.name.replace("-", " ")}
        </h1>
        <h1>
          Stat Changes:{" "}
          {move.stat_changes.map((stat: any) => {
            return (
              <div>
                <h1 className="capitalize m-3">{stat.stat.name}</h1>
                <h1 className="m-3">Amount Changed: {stat.change}</h1>
              </div>
            );
          })}
        </h1>
        <div>
          <h1 className="mt-3"> Move Description: </h1>
          {move.effect_entries.map((effect: any) => {
            return (
              <div className="mx-[15rem] text-xl font-semibold">
                <h1>
                  {effect.effect.replace(
                    "$effect_chance",
                    `${move.effect_chance}`
                  )}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="overflow-hidden">
          <h1 className="capitalize mb-5 mt-3">
            Pokemon Who Learn {move.name.replace("-", " ")}:
          </h1>
          <div className="mb-7">
            <label htmlFor="search" className="text-xl text-slate-50 mr-3">
              Search Pokemon:
            </label>
            <input
              type="search"
              onChange={(e) => {
                const search = () => {
                  setSearch(e.target.value);
                };
                setTimeout(search, 1000);
              }}
              className="text-black text-xl"
            ></input>
          </div>
          <div className="grid grid-rows-4 grid-cols-5">
            {move.learned_by_pokemon.map((learned: any) => {
              if (search == "") {
                return (
                  <div className="m-5">
                    <Link href={`/pokemon/${learned.name}`}>
                      <a
                        className={`capitalize m-5 text-slate-50 font-medium text-xl  py-3 px-8 rounded-xl shadow-xl ${shadowColor} ${
                          buttonColor != "" ? buttonColor : "bg-slate-400"
                        } ${
                          hoverColor != "" ? hoverColor : "hover:bg-slate-600"
                        } transition-all duration-200 hover:cursor-pointer`}
                      >
                        {learned.name}
                      </a>
                    </Link>
                  </div>
                );
              } else {
                if (learned.name.includes(search)) {
                  return (
                    <div className=" m-5">
                      <Link href={`/pokemon/${learned.name}`}>
                        <a
                          className={`capitalize m-5 text-slate-50 font-medium text-xl  py-3 px-8 rounded-xl shadow-xl ${shadowColor} ${
                            buttonColor != "" ? buttonColor : "bg-slate-400"
                          } ${
                            hoverColor != "" ? hoverColor : "hover:bg-slate-600"
                          } transition-all duration-200 hover:cursor-pointer`}
                        >
                          {learned.name.replace("-", " ")}
                        </a>
                      </Link>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    );
  };

  const moveData = getMoveData();

  return (
    <div
      className={`flex flex-col text-center ${typeCSS} overflow-y-hidden pointer-events-none mt-[-5.5rem]`}
    >
      <h1 className="mb-4 pt-[7rem]">{moveName}</h1>
      <div className={`pb-5 mb-3 pointer-events-auto ${typeCSS} min-h-screen`}>
        {moveData}
      </div>
    </div>
  );
};

export default Move;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/move?limit=100000&offset=0"
  );
  const data = await response.json();

  const paths = data.results.map((move: any) => {
    return {
      params: { move: move.name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const response = await fetch(`https://pokeapi.co/api/v2/move/${params.move}`);

  const data = await response.json();

  return {
    props: {
      move: data,
    },
  };
};
