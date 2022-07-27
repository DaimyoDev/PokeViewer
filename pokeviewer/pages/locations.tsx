import type { NextPage } from "next";

const Locations: NextPage = ({ locations }: any) => {
  return (
    <div>
      <h1>Locations!</h1>
      {locations.results.map((location: any) => {
        return (
          <div>
            <p className="capitalize">{location.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Locations;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/location?limit=100000&offset=0"
  );

  const data = await response.json();

  return {
    props: {
      locations: data,
    },
  };
};
