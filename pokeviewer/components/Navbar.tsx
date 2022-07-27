import Link from "next/link";

const Navbar: any = () => {
  return (
    <div>
      <h1>Navbar!</h1>
      <ul>
        <li>
          <Link href={"/item"}>
            <a>Items</a>
          </Link>
        </li>
        <li>
          <Link href={"/pokemon"}>
            <a>Pokemon</a>
          </Link>
        </li>
        <li>
          <Link href={"/locations"}>
            <a>Locations</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
