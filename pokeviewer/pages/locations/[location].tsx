import type { NextPage } from "next";
import { useMemo, useState } from "react";
import Link from "next/link";

const Location: NextPage = ({ location }: any) => {
  const [data, setData] = useState({
    pokemon_encounters: [],
  });

  useMemo(() => {
    location.areas.map(async (area: any) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/location-area/${area.name}`
      );
      setData(await response.json());
    });
  }, [location]);

  const getLocationName = () => {
    return (
      <div>
        <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
          {location.name.replace("-", " ")}
        </h1>
        <div>{}</div>
      </div>
    );
  };

  const locationName = getLocationName();

  const getLocationData = () => {
    let content: any = [];
    data?.pokemon_encounters.map((encounters: any) => {
      content.push(
        <div className="m-5">
          <Link href={`/pokemon/${encounters.pokemon.name}`}>
            <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200">
              {encounters.pokemon.name}
            </a>
          </Link>
        </div>
      );
    });
    return (
      <div className="text-3xl text-slate-50 capitalize">
        <h1 className="m-3">
          Region: {location.region?.name ? location.region.name : "No region"}
        </h1>
        <div>
          <h1 className="text-3xl text-center text-slate-50 m-3 mb-6">
            Pokemon Encounters:
          </h1>
          <div className="grid grid-rows-5 grid-cols-5">{content}</div>
        </div>
      </div>
    );
  };

  const locationData = getLocationData();

  return (
    <div className="flex flex-col text-center">
      <h1 className="mb-10">{locationName}</h1>
      <h1>{locationData}</h1>
    </div>
  );
};

export default Location;

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
