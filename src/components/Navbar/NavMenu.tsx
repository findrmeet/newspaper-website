import Link from "next/link";

const NavMenu = () => {
  return (
    <div className=" gap-8 hidden sm:flex">
      <Link href="/">Home</Link>
      <Link href="/trending">Trending</Link>
      <Link href="/discount">Discount</Link>
    </div>
  );
};

export default NavMenu;
