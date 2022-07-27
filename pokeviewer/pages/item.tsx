import type { NextPage } from "next";

const Items: NextPage = ({ items }: any) => {
  return (
    <div>
      <h1>Items!</h1>
      {items.results.map((item: any) => {
        return (
          <div>
            <p className="capitalize">{item.name}</p>
          </div>
        );
      })}
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
