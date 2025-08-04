import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo-container">
      <img src={logo} alt="logo" className="logo-icon-container" />
      <span className="logo-text">ShopOnline</span>
    </Link>
  );
};

export default Logo;
