import type { NextPage } from "next";
import Link from "next/link";

const Item: NextPage = ({ item }: any) => {
  return (
    <div>
      <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
        {item.name.replace("-", " ")}
      </h1>
      <img
        src={item.sprites.default}
        className="m-auto w-[30rem] h-[30rem] object-fill bg-slate-400 rounded-full mb-10 mt-10 shadow-xl shadow-slate-700"
      ></img>
      <h1 className="text-center text-slate-50 text-xl mt-5 capitalize">
        Category: {item.category.name.replace("-", " ")}
      </h1>
      <h1 className="text-center text-slate-50 text-xl mt-5 capitalize">
        Cost: {item.cost}
      </h1>
      <h1 className="text-center text-slate-50 text-2xl mt-3 mx-[15rem]">
        Effects:{" "}
        {item.effect_entries.map((effect: any) => {
          return (
            <div>
              <h1>{effect.effect}</h1>
            </div>
          );
        })}
      </h1>
      <h1 className="text-center text-slate-50 text-4xl mt-5 capitalize mb-10 font-montserrat font-light">
        Held By Pokemon:
      </h1>
      <div className="grid grid-rows-4 grid-cols-5">
        {item.held_by_pokemon.map((pokemon: any) => {
          console.log(pokemon);
          return (
            <div className="m-5">
              <Link href={`/pokemon/${pokemon.pokemon.name}`}>
                <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200 ">
                  {pokemon.pokemon.name}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/item?limit=100000&offset=0"
  );
  const data = await response.json();

  const paths = data.results.map((item: any) => {
    return {
      params: { item: item.name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const response = await fetch(`https://pokeapi.co/api/v2/item/${params.item}`);

  const data = await response.json();

  return {
    props: {
      item: data,
    },
  };
};
