import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-blue-900 px-4 sm:bg-transparent flex flex-col sm:flex-row justify-between sm:items-center py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="sm:hidden text-white" />
          <Logo />
        </div>
        <Image
          className="sm:hidden"
          src={"/avater.svg"}
          width={34}
          height={34}
          alt="avater"
        />
      </div>
      <div className="flex items-center gap-8 sm:w-min w-full ">
        <SearchForm />
        <NavMenu />
        <div className="hidden sm:block ">
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
