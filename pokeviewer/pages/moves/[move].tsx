import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Move: NextPage = ({ move }: any) => {
  const [search, setSearch] = useState("");
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
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-red-500 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "flying") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-slate-700 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "ice") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-sky-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "water") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-blue-700 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "poison") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-violet-700 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "bug") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-lime-500 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "fighting") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-orange-500 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "fairy") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-pink-500 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "psychic") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-pink-700 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "dragon") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-black font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "steel") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-gray-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "electric") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-yellow-300 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "grass") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-emerald-500 font-montserrat">
            {move.id}: {move.name.replace("-", " ")}
          </h1>
        </div>
      );
    }
    if (move.type.name == "rock") {
      return (
        <div>
          <h1 className="text-5xl text-center uppercase text-amber-700 font-montserrat">
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
      <div className="text-2xl text-slate-50">
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
          <h1 className="m-3"> Move Description: </h1>
          {move.effect_entries.map((effect: any) => {
            return (
              <div className="mx-10">
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
                      <a className="text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 m-3 capitalize">
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
                        <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
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
    <div className="flex flex-col text-center">
      <h1 className="mb-4">{moveName}</h1>
      <h1>{moveData}</h1>
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
