import type { NextPage } from "next";
import Link from "next/link";

const Move: NextPage = ({ location }: any) => {
  const getMoveName = () => {
    return (
      <div>
        <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
          {location.name.replace("-", " ")}
        </h1>
      </div>
    );
  };

  const moveName = getMoveName();

  const getMoveData = () => {
    return (
      <div className="text-3xl text-slate-50 capitalize">
        <h1 className="m-3">Region: {location.region.name}</h1>
      </div>
    );
  };

  const moveData = getMoveData();

  return (
    <div className="flex flex-col text-center">
      <h1 className="mb-10">{moveName}</h1>
      <h1>{moveData}</h1>
    </div>
  );
};

export default Move;

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/location?limit=100000&offset=0"
  );
  const data = await response.json();

  const paths = data.results.map((location: any) => {
    return {
      params: { location: location.name },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/location/${params.location}`
  );

  const data = await response.json();

  return {
    props: {
      location: data,
    },
  };
};
