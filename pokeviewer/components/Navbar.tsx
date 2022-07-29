import Link from "next/link";

const Navbar: any = () => {
  return (
    <div className="flex flex-row w-screen text-xl py-5 text-slate-50 overflow-hidden">
      <h1 className="justify-self-start text-3xl ml-[10rem] mt-[-0.30rem] font-light italic tracking-widest font-montserrat">
        <span className="text-4xl text-red-500">Poke</span>Viewer
      </h1>
      <div className="flex flex-row justify-end w-screen mb-3">
        <ul className="flex flex-row">
          <li className="mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300">
            <Link href={"/items"}>
              <a>Items</a>
            </Link>
          </li>
          <li className="mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300">
            <Link href={"/pokemon"}>
              <a>Pokemon</a>
            </Link>
          </li>
          <li className="mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300">
            <Link href={"/moves"}>
              <a>Moves</a>
            </Link>
          </li>
          <li className="mr-[20rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300">
            <Link href={"/locations"}>
              <a>Locations</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
