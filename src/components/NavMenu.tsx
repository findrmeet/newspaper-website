import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/trending">Trending</Link>
      <Link href="/discount">Discount</Link>
    </div>
  );
};

export default NavMenu;
