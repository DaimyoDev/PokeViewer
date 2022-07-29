import Link from "next/link";

const Navbar: any = () => {
  return (
    <div className="flex sm:flex-row w-screen text-xl py-5 text-slate-50 overflow-hidden z-20 flex-col">
      <h1 className="sm:justify-self-start text-3xl sm:ml-[10rem] mt-[-0.30rem] font-light italic tracking-widest font-montserrat text-center sm:text-left">
        <span className="text-4xl text-red-500">Poke</span>Viewer
      </h1>
      <div className="flex sm:flex-row sm:justify-end w-screen mb-3 flex-col justify-center">
        <ul className="flex flex-col sm:flex-row justify-center w-[100vw] sm:m-0 ">
          <li className="sm:mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300 self-center">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="sm:mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300 self-center">
            <Link href={"/items"}>
              <a>Items</a>
            </Link>
          </li>
          <li className="sm:mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300 self-center">
            <Link href={"/pokemon"}>
              <a>Pokemon</a>
            </Link>
          </li>
          <li className="sm:mr-[5rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300 self-center">
            <Link href={"/moves"}>
              <a>Moves</a>
            </Link>
          </li>
          <li className="sm:mr-[20rem] mt-[0.5rem] hover:text-red-500 transition-all duration-300 self-center">
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
