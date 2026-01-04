import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <Logo />
      <div className="flex items-center gap-8">
        <SearchForm />
        <NavMenu />
        <div>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
