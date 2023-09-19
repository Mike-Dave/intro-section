import { Link } from "react-router-dom";
import LogoImage from "../images/logo.svg";

function Logo() {
  return (
    <Link to="/">
      <img className="p-4 pt-6" src={LogoImage} alt="michael" />
    </Link>
  );
}

export default Logo;
