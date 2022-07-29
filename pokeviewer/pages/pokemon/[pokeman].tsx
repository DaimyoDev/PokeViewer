import type { NextPage } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";

const Pokeman: NextPage = ({ pokeman }: any) => {
  const [data, setData] = useState([]);
  let encounters: any = [];

  useMemo(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeman.name}/encounters`
    );

    setData(await response.json());
  }, [pokeman]);

  const getEncounters = () => {
    data.map((encounter: any) => {
      let encounterArea = encounter.location_area.name;
      encounters.push(
        <div className="m-5">
          <Link href={`/locations/${encounterArea}`}>
            <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200">
              {encounter.location_area.name
                .replace("-", " ")
                .replace("-area", "")
                .replace("-road", " road")}
            </a>
          </Link>
        </div>
      );
    });
  };

  getEncounters();

  const getPokeData = () => {
    return (
      <div className={`m-10 text-center text-slate-50 text-xl`}>
        <h1 className="text-3xl uppercase font-light font-montserrat">
          {pokeman.id}: {pokeman.name}
        </h1>
        <img
          src={pokeman.sprites.front_default}
          className="m-auto w-[30rem] h-[30rem] object-fill bg-slate-400 rounded-full mb-10 mt-10 shadow-xl shadow-slate-700"
        ></img>
        <div>
          <div className="mb-10">
            <h1 className="mt-3 mb-3 italic uppercase text-3xl font-montserrat">
              Abilities:
            </h1>
            <div className="flex flex-row justify-center">
              {pokeman.abilities.map((ability: any) => {
                return (
                  <div className="mr-10">
                    <h1 key={ability.ability.name} className="capitalize">
                      {ability.ability.name.replace("-", " ")}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="mt-3 mb-3 italic uppercase text-3xl font-montserrat">
              Types:
            </h1>
            {pokeman.types.map((type: any) => {
              if (type.type.name == "normal") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-slate-50 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "ice") {
                return (
                  <div className="m-auto ">
                    <h1
                      key={type.type.name}
                      className="capitalize text-sky-300 text-2xl"
                    >
                      {type.type.name}
                    </h1>
                  </div>
                );
              }
              if (type.type.name == "water") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-blue-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fire") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-red-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "flying") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-slate-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "poison") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-violet-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "bug") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-lime-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fighting") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-orange-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fairy") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-pink-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "psychic") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-pink-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "dragon") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-black text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "steel") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-gray-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "electric") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-yellow-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "grass") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-emerald-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "rock") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-amber-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }

              return (
                <h1
                  key={type.type.name}
                  className="capitalize text-slate-400 text-2xl"
                >
                  {type.type.name}
                </h1>
              );
            })}
          </div>
        </div>
        <h1 className="mt-3">Height: {pokeman.height}</h1>
        <h1 className="mb-10">Weight: {pokeman.weight}</h1>
        <div className="">
          <h1 className="mt-3 mb-3 italic uppercase text-3xl font-montserrat">
            Base Stats:
          </h1>
          {pokeman.stats.map((stat: any) => {
            return (
              <div className="flex flex-row justify-center mb-2 uppercase">
                <h1>
                  {stat.stat.name.replace("-", " ")}: {stat.base_stat}
                </h1>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="mt-3 mb-10 italic uppercase text-3xl font-montserrat">
            Encounters:
          </h1>
          <div className="grid grid-cols-3">{encounters}</div>
        </div>
        <div>
          <h1 className="mt-3 mb-10 italic uppercase text-3xl font-montserrat">
            Moves:
          </h1>
          <div className="grid grid-rows-3 grid-cols-4">
            {pokeman.moves.map((move: any) => {
              return (
                <Link href={`/moves/${move.move.name}`}>
                  <div className="m-5">
                    <a
                      key={move.move.name}
                      className="capitalize m-5 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 hover:cursor-pointer"
                    >
                      {move.move.name.replace("-", " ")}
                    </a>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const content = getPokeData();

  return <div>{content}</div>;
};

export default Pokeman;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const data = await response.json();

  const paths = data.results.map((pokeman: any) => {
    return {
      params: { pokeman: pokeman.name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokeman}`
  );

  const data = await response.json();

  return {
    props: {
      pokeman: data,
    },
  };
};
