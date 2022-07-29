import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl uppercase font-light font-montserrat text-center text-slate-50 mb-5">
        Welcome To PokeViewer!
      </h1>
      <p className="text-center text-xl mx-5 text-slate-50 sm:mx-[15rem] mb-3">
        PokeViewer is a wikipedia for everything pokemon! Or at least most of
        it. You can view items, pokemon, locations, and moves by tapping or
        clicking the text at the top of the page. Or you can click the buttons
        down below!
      </p>
      <ul className="flex flex-col text-slate-50 text-xl sm:flex-row justify-center">
        <li className="sm:mr-[5rem] mt-[0.5rem] bg-slate-400 py-3 px-8 rounded-xl hover:text-red-500 transition-all duration-300 self-center hover:bg-white sm:mx-[5rem]">
          <Link href={"/items"}>
            <a>Items</a>
          </Link>
        </li>
        <li className="sm:mr-[5rem] mt-[0.5rem] bg-slate-400 py-3 px-8 rounded-xl hover:text-red-500 transition-all duration-300 self-center hover:bg-white">
          <Link href={"/pokemon"}>
            <a>Pokemon</a>
          </Link>
        </li>
        <li className="sm:mr-[5rem] mt-[0.5rem]  bg-slate-400 py-3 px-8 rounded-xl hover:text-red-500 transition-all duration-300 self-center hover:bg-white">
          <Link href={"/moves"}>
            <a>Moves</a>
          </Link>
        </li>
        <li className="sm:mr-[5rem] mt-[0.5rem]  bg-slate-400 py-3 px-8 rounded-xl hover:text-red-500 transition-all duration-300 self-center hover:bg-white">
          <Link href={"/locations"}>
            <a>Locations</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
