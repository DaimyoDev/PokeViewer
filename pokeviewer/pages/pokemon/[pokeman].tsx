import type { NextPage } from "next";
import { useRouter } from "next/router";

const Pokeman: NextPage = ({ pokeman }: any) => {
  const getPokeData = () => {
    return (
      <div>
        <h1>{pokeman.name}</h1>
        <h1>{pokeman.id}</h1>
        <img src={pokeman.sprites.front_default}></img>
        <div>
          {pokeman.abilities.map((ability: any) => {
            return <h1 key={ability.ability.name}>{ability.ability.name}</h1>;
          })}
        </div>
        <div>
          {pokeman.types.map((type: any) => {
            return <h1 key={type.type.name}>{type.type.name}</h1>;
          })}
        </div>
        <h1>{pokeman.height}</h1>
        <h1>{pokeman.weight}</h1>
        <div>
          {pokeman.moves.map((move: any) => {
            return <h1 key={move.move.name}>{move.move.name}</h1>;
          })}
        </div>
      </div>
    );
  };

  const content = getPokeData();

  return (
    <div>
      <h1>Pokeman</h1>
      {content}
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
