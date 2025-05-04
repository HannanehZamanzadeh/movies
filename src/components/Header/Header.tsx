import backgroundImg from "../../assets/Rectangle 2.png";
import Navigation from "./navigation";
const Header = () => {
  return (
    <header>
      <div>
        <Navigation />
        <div
          className="bg-center h-120"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
      </div>
    </header>
  );
};
export default Header;
