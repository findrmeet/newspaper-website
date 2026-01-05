import Link from "next/link";

const NavMenu = () => {
  return (
    <div className=" gap-8 hidden md:flex ">
      <Link className="hover:text-indigo-600" href="/">
        Home
      </Link>
      <Link className="hover:text-indigo-600" href="/trending">
        Trending
      </Link>
      <Link className="hover:text-indigo-600" href="/discount">
        Discount
      </Link>
    </div>
  );
};

export default NavMenu;
