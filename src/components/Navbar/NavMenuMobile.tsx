import { X } from "lucide-react";
import Link from "next/link";

const NavMenuMobile = () => {
  return (
    <div className="absolute sm:hidden top-0 bg-white w-full">
      <div className="p-6">
        <div className="flex justify-between relative">
          <h2 className=" w-full uppercase border-b border-gray-300 pb-2">
            Menu
          </h2>
          <X className="absolute right-0 cursor-pointer" />
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="/discount">Discount</Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenuMobile;
