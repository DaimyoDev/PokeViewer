import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ pokemon }: any) => {
  return (
    <div className={styles.container}>
      <h1>Hello!</h1>
      {pokemon.results.map((pokemon: any) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

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
