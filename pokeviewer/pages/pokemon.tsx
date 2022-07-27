import type { NextPage } from "next";
import Link from "next/link";

const Pokemon: NextPage = ({ pokemon }: any) => {
  return (
    <div>
      <h1>Pokemon!</h1>
      {pokemon.results.map((pokeman: any) => {
        return (
          <div>
            <Link href={`/pokemon/${pokeman.name}`}>
              <a className="capitalize">{pokeman.name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
};
