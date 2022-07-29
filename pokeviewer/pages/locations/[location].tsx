import type { NextPage } from "next";
import { useMemo, useState } from "react";
import Link from "next/link";

const Location: NextPage = ({ location }: any) => {
  const [data, setData] = useState({
    region: {
      name: "",
    },
  });

  useMemo(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/location/${location.name.replace("-area", "")}`
    );

    if (response) {
      try {
        setData(await response.json());
      } catch (e) {
        console.log(e);
      }
    }
  }, [location]);

  const getLocationName = () => {
    return (
      <div>
        <h1 className="text-5xl text-center uppercase text-slate-50 font-montserrat font-light">
          {location.name.replace("-", " ").replace("-area", " ")}
        </h1>
        <div></div>
      </div>
    );
  };

  const locationName = getLocationName();

  const getLocationData = () => {
    return (
      <div className="text-3xl text-slate-50 capitalize">
        <h1 className="m-3">Region: {data.region.name || "Data not found"}</h1>
        <div>
          <h1 className="text-3xl text-center text-slate-50 m-3 mb-6">
            Pokemon Encounters:
          </h1>
          <div className="grid grid-rows-5 grid-cols-5">
            {location.pokemon_encounters.map((encounter: any) => {
              return (
                <div className="m-5">
                  <Link href={`/pokemon/${encounter.pokemon.name}`}>
                    <a className="capitalize m-3 text-red-600 font-medium text-xl bg-slate-300 py-3 px-8 rounded-xl shadow-lg shadow-gray-600 hover:bg-slate-600 transition-all duration-200">
                      {encounter.pokemon.name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
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
    "https://pokeapi.co/api/v2/location-area?limit=100000&offset=0"
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
    `https://pokeapi.co/api/v2/location-area/${params.location}`
  );

  const data = await response.json();

  return {
    props: {
      location: data,
    },
  };
};
