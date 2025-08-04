import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
    </header>
  );
};

export default Header;
