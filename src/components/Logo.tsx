import logo from "@/assets/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo-icon-container" />
      <span className="logo-text">ShopOnline</span>
    </div>
  );
};

export default Logo;
