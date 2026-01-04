import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4">
      <Logo />
      <div className="flex items-center gap-8 sm:w-min w-full">
        <SearchForm />
        <NavMenu />
        <div className="hidden sm:block">
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
