import type { NextPage } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";

const Pokeman: NextPage = ({ pokeman }: any) => {
  const [data, setData] = useState([]);
  const [evolution, setEvolution] = useState({
    generation: {
      name: "",
    },
    evolves_from_species: {
      name: "",
    },
  });
  let typeCSS = "";
  let buttonColor = "";
  let shadowColor = "";
  let hoverColor = "";

  useMemo(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeman.name}/encounters`
    );

    setData(await response.json());

    const evoResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokeman.name}`
    );
    if (evoResponse) {
      try {
        setEvolution(await evoResponse.json());
      } catch (e) {
        console.log(e);
      }
    }
  }, [pokeman]);

  const getPokeData = () => {
    return (
      <div
        className={`m-10 mb-2 text-center text-slate-50 text-xl overflow-hidden`}
      >
        <div>
          <div className="mb-3 overflow-hidden">
            <h1 className="mt-3 mb-1 italic uppercase text-3xl font-montserrat overflow-hidden">
              Abilities:
            </h1>
            <div className="flex flex-row justify-center overflow-hidden">
              {pokeman.abilities.map((ability: any) => {
                return (
                  <div className="mr-10">
                    <h1
                      key={ability.ability.name}
                      className="capitalize overflow-hidden"
                    >
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
            <h1 className="mt-3 mb-3 italic uppercase text-3xl font-montserrat overflow-hidden">
              Types:
            </h1>
            {pokeman.types.map((type: any) => {
              if (type.type.name == "normal") {
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-slate-50 text-2xl overflow-hidden"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "ice") {
                typeCSS = "bg-sky-800";
                buttonColor = "bg-sky-500";
                shadowColor = "shadow-sky-900";
                hoverColor = "hover:bg-sky-300";

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
                typeCSS = "bg-blue-800";
                buttonColor = "bg-blue-500";
                shadowColor = "shadow-blue-900";
                hoverColor = "hover:bg-blue-300";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-blue-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fire") {
                typeCSS = "bg-red-800";
                buttonColor = "bg-red-500";
                shadowColor = "shadow-red-900";
                hoverColor = "hover:bg-red-300";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-red-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "flying") {
                typeCSS = "bg-slate-800";
                buttonColor = "bg-slate-500";
                shadowColor = "shadow-slate-900";
                hoverColor = "hover:bg-slate-300";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-slate-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "poison") {
                typeCSS = "bg-violet-800";
                buttonColor = "bg-violet-500";
                shadowColor = "shadow-violet-900";
                hoverColor = "hover:bg-violet-300";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-violet-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "bug") {
                typeCSS = "bg-lime-800";
                buttonColor = "bg-lime-500";
                shadowColor = "shadow-lime-900";
                hoverColor = "hover:bg-lime-400";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-lime-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fighting") {
                typeCSS = "bg-orange-700";
                buttonColor = "bg-orange-500";
                shadowColor = "shadow-orange-900";
                hoverColor = "hover:bg-orange-400";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-orange-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "fairy") {
                typeCSS = "bg-pink-800";
                buttonColor = "bg-pink-500";
                shadowColor = "shadow-pink-900";
                hoverColor = "hover:bg-pink-400";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-pink-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "psychic") {
                typeCSS = "bg-fuchsia-800";
                buttonColor = "bg-fuchsia-500";
                shadowColor = "shadow-fuchsia-900";
                hoverColor = "hover:bg-fuchsia-400";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-fuchsia-500 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "dragon") {
                typeCSS = "bg-black";
                buttonColor = "bg-slate-700";
                shadowColor = "shadow-slate-900";
                hoverColor = "hover:bg-slate-500";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-slate-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "steel") {
                typeCSS = "bg-gray-400";
                buttonColor = "bg-gray-300";
                shadowColor = "shadow-gray-500";
                hoverColor = "hover:bg-gray-200";
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-gray-100 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "electric") {
                typeCSS = "bg-yellow-600";
                buttonColor = "bg-yellow-400";
                shadowColor = "shadow-yellow-700";
                hoverColor = "hover:bg-yellow-300";

                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-yellow-100 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "grass") {
                typeCSS = "bg-emerald-800";
                buttonColor = "bg-emerald-500";
                shadowColor = "shadow-emerald-900";
                hoverColor = "hover:bg-emerald-300";
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-emerald-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "rock") {
                typeCSS = "bg-amber-600";
                buttonColor = "bg-amber-500";
                shadowColor = "shadow-amber-700";
                hoverColor = "hover:bg-amber-300";
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-amber-300 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }
              if (type.type.name == "ground") {
                typeCSS = "bg-amber-800";
                buttonColor = "bg-amber-700";
                shadowColor = "shadow-amber-900";
                hoverColor = "hover:bg-amber-500";
                return (
                  <h1
                    key={type.type.name}
                    className="capitalize text-amber-700 text-2xl"
                  >
                    {type.type.name}
                  </h1>
                );
              }

              return (
                <h1
                  key={type.type.name}
                  className="capitalize text-slate-500 text-2xl"
                >
                  {type.type.name}
                </h1>
              );
            })}
          </div>
        </div>
        <div>
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

        <h1 className="mt-2">Height: {pokeman.height}</h1>
        <h1 className="mb-3">Weight: {pokeman.weight}</h1>
      </div>
    );
  };

  const content = getPokeData();

  return (
    <div className={`${typeCSS} sm:mt-[-8rem] overflow-y-hidden mt-[-16.8rem]`}>
      <div className={`m-10 text-center text-slate-50 text-xl overflow-hidden`}>
        <h1 className="text-4xl uppercase font-light font-montserrat sm:pt-[6rem] overflow-hidden pt-[15rem]">
          {pokeman.id}: {pokeman.name}
        </h1>
        <h1 className="text-3xl uppercase font-light font-montserrat pt-[1rem] overflow-hidden">
          {evolution.generation.name
            .replace("-", " ")
            .replace(" iii", " 3")
            .replace(" ii", " 2")
            .replace(" iv", " 4")
            .replace(" viii", " 8")
            .replace(" vii", " 7")
            .replace(" vi", " 6")
            .replace(" v", " 5")
            .replace(" i", " 1")}
        </h1>
      </div>
      <img
        src={pokeman.sprites.front_default}
        className={`m-auto sm:w-[30rem] sm:h-[30rem] object-fill w-[20rem]  ${
          buttonColor != "" ? buttonColor : "bg-slate-300"
        } rounded-full mb-10 mt-10 shadow-xl ${shadowColor}  `}
      ></img>
      {content}
      <div className="text-center text-2xl text-slate-50 capitalize">
        Evolves From:{" "}
        {evolution?.evolves_from_species?.name ? (
          <Link href={`/pokemon/${evolution.evolves_from_species.name}`}>
            <a
              className={`capitalize m-1 text-slate-50 font-medium text-xl  py-3 px-8 rounded-xl shadow-xl ${shadowColor} ${
                buttonColor != "" ? buttonColor : "bg-slate-400"
              } ${
                hoverColor != "" ? hoverColor : "hover:bg-slate-600"
              } transition-all duration-200 hover:cursor-pointer`}
            >
              {evolution.evolves_from_species.name}
            </a>
          </Link>
        ) : (
          "Is not an evolution"
        )}
      </div>
      <div className="text-center overflow-hidden">
        <h1 className="mt-7 mb-1 italic uppercase text-3xl font-montserrat text-slate-50 overflow-hidden">
          Encounters:{" "}
        </h1>
        <div className="grid xl:grid-rows-3 2xl:grid-cols-3 xl:grid-cols-2 py-3 overflow-hidden grid-cols-1 grid-rows-1">
          {data.map((encounter: any) => {
            let encounterArea = encounter.location_area.name;
            return (
              <div className="mx-1 mt-5 mb-3">
                <Link href={`/locations/${encounterArea}`}>
                  <a
                    className={`capitalize m-5 mx-2 text-slate-50 font-medium text-lg  py-3 px-5 rounded-xl shadow-xl ${shadowColor} ${
                      buttonColor != "" ? buttonColor : "bg-slate-400"
                    } ${
                      hoverColor != "" ? hoverColor : "hover:bg-slate-600"
                    } transition-all duration-200 hover:cursor-pointer`}
                  >
                    {encounter.location_area.name
                      .replace("-", " ")
                      .replace("-area", "")
                      .replace("-road", " road")}
                  </a>
                </Link>
              </div>
            );
          })}
          ;
        </div>
        <h1 className="mt-3 mb-10 italic uppercase text-3xl font-montserrat text-slate-50 overflow-hidden">
          Moves:
        </h1>
        <div className="grid 2xl:grid-rows-3 2xl:grid-cols-6 xl:grid-cols-4 py-3 overflow-hidden mx-10 grid-cols-1 grid-rows-1">
          {pokeman.moves.map((move: any) => {
            return (
              <Link href={`/moves/${move.move.name}`}>
                <div className="m-5 mx-3">
                  <a
                    key={move.move.name}
                    className={`capitalize m-5 text-slate-50 font-medium text-xl  py-3 px-8 rounded-xl shadow-xl ${shadowColor} ${
                      buttonColor != "" ? buttonColor : "bg-slate-400"
                    } ${
                      hoverColor != "" ? hoverColor : "hover:bg-slate-600"
                    } transition-all duration-200 hover:cursor-pointer`}
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
    fallback: false,
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
